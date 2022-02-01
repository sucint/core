const curry2 = require('./curry2');
const clone = require('./clone');
const getAtPath = require('./getAtPath');
const isArrayLike = require('./isArrayLike');
const isObject = require('./isObject');
const len = require('./len');

function toValue(str) {
  if (str === undefined || str === null) {
    return str;
  }
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  }
  if (str === 'true') {
    return true;
  }
  if (str === 'false') {
    return false;
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(str)) {
    return str;
  }
  return Number(str);
}

function transformFromObj(input, src) {
  if (isArrayLike(input)) {
    const l = len(input);
    for (let i = 0; i < l; i += 1) {
      // eslint-disable-next-line no-param-reassign
      input[i] = transformFromObj(input[i], src);
    }
    return input;
  }
  if (isObject(input)) {
    const keys = Object.keys(input);
    keys.forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      input[key] = transformFromObj(input[key], src);
    });
    return input;
  }
  if (typeof input === 'string') {
    if (input.startsWith('@@')) {
      return input.slice(1);
    }
    if (input.startsWith('@')) {
      const tokens = input.split('||').map((t) => t.trim());
      const defValue = toValue(tokens[1]);
      return getAtPath(src, tokens[0].slice(1)) || defValue;
    }
  }
  return input;
}

function transform(obj, transformation) {
  return transformFromObj(clone(transformation), obj);
}

module.exports = curry2(transform);
