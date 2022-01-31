const isObject = require('./isObject');
const isFunction = require('./isFunction');
const { powOpTag } = require('./tags');

function powOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[powOpTag])) {
      return a.constructor[powOpTag](a, b);
    }
  }
  if (isObject(b)) {
    if (isFunction(b.constructor[powOpTag])) {
      return b.constructor[powOpTag](a, b);
    }
  }
  return Number(a) ** Number(b);
}

module.exports = powOp;
