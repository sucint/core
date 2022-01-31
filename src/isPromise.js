const isFunction = require('./isFunction');

function isPromise(p) {
  return p && isFunction(p.then);
}

module.exports = isPromise;
