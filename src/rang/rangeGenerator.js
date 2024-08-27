// 1-Range Generator

export function* rangeGenerator(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

const iterator = rangeGenerator(5, 10, 1);

console.log(iterator.next().value); // 5
console.log(iterator.next().value); // 6
console.log(iterator.next().value); // 7
console.log(iterator.next().value); // 8
console.log(iterator.next().value); // 9
console.log(iterator.next().value); // undefined

console.log("test for of");

for (let element of rangeGenerator(5, 10, 1)) {
  console.log(element);
}


  