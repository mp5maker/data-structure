class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
  }

  // O(n)
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // O(n)
  pop() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      const value = current.value;
      prev.next = null;
      return value;
    }
  }

  // O(n)
  peek() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current.val;
    }
  }
}

const stack = new StackLinkedList();
stack.push(1); // 1
stack.push(17); // 1-17
stack.push(8); // 1-16-8
stack.push(13); // 1-16-8-13
stack.pop(); // 1-16-8
stack.push(3); // 1-16-8-3
console.log(stack.peek()); // 3
