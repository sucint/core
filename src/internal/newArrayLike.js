const isArray = require('../isArray');
const isArrayLike = require('../isArrayLike');

function newArrayLike(x, arr) {
  if (!isArray(x) && isArrayLike(x) && x.constructor) {
    return new x.constructor(arr);
  }
  return arr;
}

module.exports = newArrayLike;
