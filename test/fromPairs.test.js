const fromPairs = require('../src/fromPairs');

describe('fromPairs', () => {
  it('Should create an object from array of pairs', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
  });
});
