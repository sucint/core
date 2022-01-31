const curry2 = require('./curry2');

function has(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = curry2(has);
