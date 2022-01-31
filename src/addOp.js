const isObject = require('./isObject');
const isFunction = require('./isFunction');
const merge = require('./merge');
const { addOpTag } = require('./tags');

function addOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[addOpTag])) {
      return a.constructor[addOpTag](a, b);
    }
    return merge(a, b);
  }
  if (typeof a === typeof b && !(a instanceof Date)) {
    return a + b;
  }
  return Number(a) + Number(b);
}

module.exports = addOp;
