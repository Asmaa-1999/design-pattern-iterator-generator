// rangeGenerator test

import { rangeGenerator } from "./rangeGenerator";

test("range Generator fun ", () => {
  const res = [rangeGenerator(0, 5, 1)]; //[0,1,2,3,4]
  expect(res).toEqual([0, 1, 2, 3, 4]);
});

test("rangeGenerator with negative step", () => {
  const result = [...rangeGenerator(5, 0, -1)];
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

test("rangeGenerator with start equal to end", () => {
  const result = [...rangeGenerator(5, 5, 1)];
  expect(result).toEqual([]);
});

test("rangeGenerator with step 0 (should yield no values)", () => {
  const result = [...rangeGenerator(0, 5, 0)];
  expect(result).toEqual([]); 
});
