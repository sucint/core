const curry3 = require('./curry3');
const getAt = require('./getAt');
const atPath = require('./atPath');

function setAtPathMut(x, path, value) {
  let current = x;
  const pathArr = atPath(path);
  for (let i = 0; i < pathArr.length - 1; i += 1) {
    const index = pathArr[i];
    current = getAt(
      current,
      index.startsWith('[') ? index.slice(1, -1) : index
    );
  }
  const index = pathArr[pathArr.length - 1];
  current[index.startsWith('[') ? index.slice(1, -1) : index] = value;
  return x;
}

module.exports = curry3(setAtPathMut);
