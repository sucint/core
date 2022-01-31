const always = require('../src/always');

describe('Always', () => {
  it('Should return a function that always return the same value', () => {
    expect(always(5)()).toEqual(5);
  });
});
