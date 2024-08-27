// RangeIterator.test.js

const RangeIterator = require('./Rangeiterator'); 

describe('RangeIterator', () => {
  test('should iterate over the range from start to end with the specified step', () => {
    let rangeIterator = new RangeIterator(3, 7, 1);
    const result = [...rangeIterator];
    

    expect(result).toEqual([3, 4, 5, 6]);
  });

  test('should return an empty array if start is greater than or equal to end', () => {
    let rangeIterator = new RangeIterator(7, 3, 1);
    const result = [...rangeIterator];

    expect(result).toEqual([]);
  });

  test('should handle negative step correctly', () => {
    let rangeIterator = new RangeIterator(7, 3, -1);
    const result = [...rangeIterator];


    expect(result).toEqual([7, 6, 5, 4]);
  });

  test('should handle a single element range', () => {
    let rangeIterator = new RangeIterator(5, 6, 1);
    const result = [...rangeIterator];


    expect(result).toEqual([5]);
  });

  test('should return an empty array if step is 0', () => {
    let rangeIterator = new RangeIterator(3, 7, 0);
    const result = [...rangeIterator];

    expect(result).toEqual([]);
  });
});
