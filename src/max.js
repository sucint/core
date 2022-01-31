const curry2 = require('./curry2');
const forEach = require('./forEach');

function max(...args) {
  let result;
  let isFirst = true;
  forEach(args, (c) => {
    const n = Number(c);
    if (isFirst) {
      result = n;
      isFirst = false;
    } else if (n > result) {
      result = n;
    }
  });
  return result;
}

module.exports = curry2(max);
