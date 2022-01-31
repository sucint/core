const isObject = require('./isObject');
const isFunction = require('./isFunction');
const { subtractOpTag, negateOpTag } = require('./tags');
const add = require('./add');
const negate = require('./negate');

function subtractOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[subtractOpTag])) {
      return a.constructor[subtractOpTag](a, b);
    }
  }
  if (isObject(b)) {
    if (isFunction(b.constructor[subtractOpTag])) {
      return b.constructor[subtractOpTag](a, b);
    }
    if (isFunction(b.constructor[negateOpTag])) {
      return add(a, negate(b));
    }
  }
  if (typeof a === typeof b && !(a instanceof Date)) {
    return a - b;
  }
  return Number(a) - Number(b);
}

module.exports = subtractOp;
