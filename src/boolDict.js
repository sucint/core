const forEach = require('./forEach');
const isObject = require('./isObject');
const isString = require('./isString');

function boolDict(x) {
  const result = {};
  if (isString(x)) {
    result[x] = true;
  } else if (isObject(x)) {
    forEach(x, (n, i) => {
      result[i] = true;
    });
  } else {
    forEach(x, (n) => {
      result[n] = true;
    });
  }
  return result;
}

module.exports = boolDict;
