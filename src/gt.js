const curry2 = require('./curry2');

function gt(a, b) {
  return a > b;
}

module.exports = curry2(gt);
