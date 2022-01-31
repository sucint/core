const isArrayLike = require('./isArrayLike');
const isString = require('./isString');
const map = require('./map');
const identity = require('./identity');

function asArrayLike(x) {
  if (isArrayLike(x) || isString(x)) {
    return x;
  }
  return map(x, identity);
}

module.exports = asArrayLike;
