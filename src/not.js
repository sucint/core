const { notOpTag } = require('./tags');

function not(x) {
  if (x && x.constructor && x.constructor[notOpTag]) {
    return x.constructor[notOpTag](x);
  }
  return !x;
}

module.exports = not;
