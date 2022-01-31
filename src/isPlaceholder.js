const { placeholderTag } = require('./tags');

function isPlaceholder(obj) {
  return obj && obj[placeholderTag];
}

module.exports = isPlaceholder;
