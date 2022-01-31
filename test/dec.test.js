const dec = require('../src/dec');

describe('Dec', () => {
  it('Should substract 1 from a number', () => {
    expect(dec(10)).toEqual(9);
  });
});
