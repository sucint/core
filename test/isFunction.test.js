const isFunction = require('../src/isFunction');

function* genFunction() {
  for (let i = 0; i < 10; i += 1) {
    yield i;
  }
}

async function* asyncGenFunction() {
  for (let i = 0; i < 10; i += 1) {
    yield i;
  }
}

describe('IsFunction', () => {
  it('Should identify a function', () => {
    expect(isFunction(() => true)).toBeTruthy();
    expect(isFunction(async () => true)).toBeTruthy();
    expect(isFunction(genFunction)).toBeTruthy();
    expect(isFunction(asyncGenFunction)).toBeTruthy();
  });
  it('Should identify when is not a function', () => {
    expect(isFunction('str')).toBeFalsy();
  });
});
