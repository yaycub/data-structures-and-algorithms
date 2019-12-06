const BinarySearch = require('./array-binary-search');

describe('array-binary-search function', () => {
  it('can return the index of the key', () => {
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
  });

  it('can return -1 if key is not in the array', () => {
    expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
});
