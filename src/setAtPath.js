const curry3 = require('./curry3');
const clone = require('./clone');
const setAtPathMut = require('./setAtPathMut');

function setAtPath(x, path, value) {
  const cloned = clone(x);
  return setAtPathMut(cloned, path, value);
}

module.exports = curry3(setAtPath);
