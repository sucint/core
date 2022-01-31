const powOp = require('./powOp');
const curry2 = require('./curry2');

function pow(a, b) {
  return powOp(a, b);
}

module.exports = curry2(pow);
