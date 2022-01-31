const curry2 = require('./curry2');

function gte(a, b) {
  return a >= b;
}

module.exports = curry2(gte);
