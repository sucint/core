const curry2 = require('./curry2');

function lt(a, b) {
  return a < b;
}

module.exports = curry2(lt);
