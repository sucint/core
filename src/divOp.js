const isObject = require('./isObject');
const isFunction = require('./isFunction');
const { divOpTag } = require('./tags');

function divOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[divOpTag])) {
      return a.constructor[divOpTag](a, b);
    }
  }
  if (isObject(b)) {
    if (isFunction(b.constructor[divOpTag])) {
      return b.constructor[divOpTag](a, b);
    }
  }
  return Number(a) / Number(b);
}

module.exports = divOp;
