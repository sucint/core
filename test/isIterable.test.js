const isIterable = require('../src/isIterable');

describe('isIterable', () => {
  it('Should return false if no input is provided', () => {
    expect(isIterable(undefined)).toBeFalsy();
  });
  it('Should return false if input is not iterable', () => {
    expect(isIterable({})).toBeFalsy();
  });
});
