// First In First Out

class Queue {
  constructor() {
    this.arr = [];
  }

  // O(1)
  enqueue(val) {
    this.arr.push(val);
  }

  // O(1)
  dequeue() {
    this.arr.shift();
  }

  // O(1)
  peek() {
    return this.arr[0];
  }
}


const q = new Queue()
q.enqueue(1); // 1
q.enqueue(5); // 1, 5
q.enqueue(7); // 1, 5, 7
q.enqueue(8); // 1, 5, 7, 8
q.dequeue(); // 5, 7, 8
console.log(q.peek()); 5
console.log(q.arr);
