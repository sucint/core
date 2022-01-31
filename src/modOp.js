const isObject = require('./isObject');
const isFunction = require('./isFunction');
const { modOpTag } = require('./tags');

function modOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[modOpTag])) {
      return a.constructor[modOpTag](a, b);
    }
  }
  if (isObject(b)) {
    if (isFunction(b.constructor[modOpTag])) {
      return b.constructor[modOpTag](a, b);
    }
  }
  return Number(a) % Number(b);
}

module.exports = modOp;
