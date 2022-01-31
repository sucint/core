const mod = require('../src/mod');

describe('Mod', () => {
  it('Should calculate modulus', () => {
    expect(mod(45, 7)).toEqual(3);
  });
});
