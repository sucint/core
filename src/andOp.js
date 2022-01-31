const isObject = require('./isObject');
const isFunction = require('./isFunction');
const { andOpTag } = require('./tags');

function andOp(a, b) {
  if (isObject(a) && isFunction(a.constructor[andOpTag])) {
    return a.constructor[andOpTag](a, b);
  }
  if (isObject(b) && isFunction(b.constructor[andOpTag])) {
    return b.constructor[andOpTag](a, b);
  }
  return a && b;
}

module.exports = andOp;
