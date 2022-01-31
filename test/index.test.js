const S = require('../src');

describe('S', () => {
  it('Should expose the functions', () => {
    const n = 7;
    expect(S.pow(S.add(n, 2), 3)).toEqual(729);
  });
});
