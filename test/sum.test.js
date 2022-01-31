const sum = require('../src/sum');

describe('Sum', () => {
  it('Should add two numbers', () => {
    expect(sum([1, 2])).toEqual(3);
  });
  it('Should coerce arguments', () => {
    expect(sum(['1', 2])).toEqual(3);
    expect(sum([1, '2'])).toEqual(3);
    expect(sum([true, true])).toEqual(2);
    expect(sum([null, true])).toEqual(1);
    expect(sum([undefined, true])).toEqual(NaN);
    expect(sum([new Date(1), new Date(2)])).toEqual(3);
  });
  it('Should allow param overflow', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
  it('Should allow multiple params', () => {
    expect(sum(1, 2, 3)).toEqual(6);
  });
});
