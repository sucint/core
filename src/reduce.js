const curry3 = require('./curry3');
const forEach = require('./forEach');

function reduce(x, fn, intialValue) {
  let result = intialValue;
  forEach(x, (n, i, arr) => {
    result = fn(result, n, i, arr);
  });
  return result;
}

module.exports = curry3(reduce);
