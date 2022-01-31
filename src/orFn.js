const curry2 = require('./curry2');
const isFunction = require('./isFunction');
const orOp = require('./orOp');

function orFn(...fns) {
  return function andFnRet(...args) {
    let result = false;
    for (let i = 0; i < fns.length; i += 1) {
      const fn = fns[i];
      const value = isFunction(fn) ? fn(...args) : fn;
      result = orOp(result, value);
      if (value) {
        return true;
      }
    }
    return false;
  };
}

module.exports = curry2(orFn);
