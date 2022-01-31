const RangeIterable = require('./internal/rangeIterable');

function range(from, to, step) {
  return new RangeIterable(from, to, step);
}

module.exports = range;
