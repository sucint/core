const curry2 = require('./curry2');
const forEach = require('./forEach');

function map(x, fn) {
  const result = [];
  forEach(x, (n, i, arr) => result.push(fn(n, i, arr)));
  return result;
}

module.exports = curry2(map);
