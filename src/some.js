const curry2 = require('./curry2');
const forWhile = require('./forWhile');

function some(x, fn) {
  if (x === undefined || x === null) {
    return false;
  }
  let result = false;
  forWhile(x, (value, index, iter) => {
    if (fn(value, index, iter) === true) {
      result = true;
      return false;
    }
    return true;
  });
  return result;
}

module.exports = curry2(some);
