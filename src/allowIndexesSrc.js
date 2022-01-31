const curry2 = require('./curry2');
const boolDict = require('./boolDict');
const filterSrc = require('./filterSrc');

function allowIndexesSrc(x, arr) {
  const dict = boolDict(arr);
  return filterSrc(x, (n, i) => dict[i]);
}

module.exports = curry2(allowIndexesSrc);
