const { negateOpTag } = require('./tags');

function negate(x) {
  if (x && x.constructor && x.constructor[negateOpTag]) {
    return x.constructor[negateOpTag](x);
  }
  return -x;
}

module.exports = negate;
