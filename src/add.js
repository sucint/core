const addOp = require('./addOp');
const curry2 = require('./curry2');

function add(...args) {
  let current = args[0];
  for (let i = 1; i < args.length; i += 1) {
    current = addOp(current, args[i]);
  }
  return current;
}

module.exports = curry2(add);
