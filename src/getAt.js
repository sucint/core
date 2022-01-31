const curry2 = require('./curry2');
const atIndex = require('./atIndex');
const isArrayLike = require('./isArrayLike');
const isIterable = require('./isIterable');
const map = require('./map');
const identity = require('./identity');
const isObject = require('./isObject');
const isString = require('./isString');
const len = require('./len');

function getAt(x, index) {
  if (x === undefined) {
    throw new Error(`Cannot perform getAt on undefined`);
  }
  if (x === null) {
    throw new Error(`Cannot perform getAt on null`);
  }
  if (isString(x) || isArrayLike(x)) {
    const position = atIndex(len(x), index);
    return x[position];
  }
  if (isIterable(x)) {
    const arr = map(x, identity);
    return getAt(arr, index);
  }
  if (isObject(x)) {
    return x[index];
  }
  throw new Error('Cannot perform getAt on input');
}

module.exports = curry2(getAt);
