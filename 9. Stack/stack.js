class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  unshift() {
    this.arr.shift();
  }
}

const s = new Stack()
s.push(1) // 1
s.push(5) // 1, 5
s.push(7) // 1, 5, 7
s.push(8) // 1, 5, 7, 8
s.unshift() // 5, 7, 8
console.log(s.arr)