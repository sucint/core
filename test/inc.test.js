const inc = require('../src/inc');

describe('Inc', () => {
  it('Should add 1', () => {
    expect(inc(10)).toEqual(11);
  });
});
