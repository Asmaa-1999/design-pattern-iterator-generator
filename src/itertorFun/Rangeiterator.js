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