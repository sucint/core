const isNull = require('../src/isNull');

describe('IsNull', () => {
  it('Should return true if null is provided', () => {
    expect(isNull(null)).toBeTruthy();
  });
  it('Should return false if not null is provided', () => {
    expect(isNull(undefined)).toBeFalsy();
  });
});
