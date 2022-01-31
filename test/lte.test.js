const lte = require('../src/lte');

describe('lte', () => {
  it('Should return true if a < b', () => {
    expect(lte(8, 9)).toBeTruthy();
  });
  it('Should return true if a = b', () => {
    expect(lte(8, 8)).toBeTruthy();
  });
  it('Should return false if a > b', () => {
    expect(lte(8, 7)).toBeFalsy();
  });
});
