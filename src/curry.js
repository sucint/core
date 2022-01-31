const curryN = require('./curryN');

function curry(fn) {
  return curryN(fn.length, fn);
}

module.exports = curry;
