const curry2 = require('./curry2');
const boolDict = require('./boolDict');
const filter = require('./filter');

function denyIndexes(x, arr) {
  const dict = boolDict(arr);
  return filter(x, (n, i) => !dict[i]);
}

module.exports = curry2(denyIndexes);
