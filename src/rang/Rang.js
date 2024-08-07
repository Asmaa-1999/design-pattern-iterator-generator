// 1-Range Generator

function* rangeGenerator(start, end, step) {
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

// 2-Range Iterator
class RangeIterator {
  constructor(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step;
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.start < this.end) {
          let res = { value: this.start, done: false };
          this.start += this.step;
          return res;
        }
        return { value: undefined, done: true };
      },
    };
  }
}

let rangeIterator = new RangeIterator(3, 7, 1);

console.log(...rangeIterator);
for (let element of rangeIterator) {
  console.log(element);
}
