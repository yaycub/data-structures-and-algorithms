const insertShiftArray = require('./array-shift');

describe('Array-Shift', () => {
  it('should insert a value into the midpoint of an array', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    expect(insertShiftArray([1, 2, 3, 4, 6, 7, 8], 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
})
;
