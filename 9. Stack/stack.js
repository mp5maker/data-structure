// Last In First Out
class Stack {
  constructor() {
    this.arr = [];
  }

  pop() {
    return this.arr.pop();
  }

  push(val) {
    this.arr.push(val);
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

const s = new Stack();
s.push(1); // 1
s.push(5); // 1, 5
s.push(7); // 1, 5, 7
s.push(8); // 1, 5, 7, 8
s.pop(); // 1, 5, 7
console.log(s.peek()); // 7
console.log(s.arr);
