const curry2 = require('./curry2');
const isArrayLike = require('./isArrayLike');
const isString = require('./isString');
const isObject = require('./isObject');
const isIterable = require('./isIterable');

function forWhile(x, fn) {
  if (x !== undefined && x !== null) {
    if (isArrayLike(x) || isString(x)) {
      for (let i = 0; i < x.length; i += 1) {
        if (fn(x[i], i, x) === false) {
          break;
        }
      }
    } else if (isIterable(x)) {
      let index = 0;
      const iterator = x[Symbol.iterator]();
      let current;
      do {
        current = iterator.next();
        if (!current.done) {
          if (fn(current.value, index, x) === false) {
            break;
          }
          index += 1;
        }
      } while (!current.done);
    } else if (isObject(x)) {
      const keys = Object.keys(x);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        if (fn(x[key], key, x) === false) {
          break;
        }
      }
    } else {
      fn(x, 0, x);
    }
  }
}

module.exports = curry2(forWhile);
