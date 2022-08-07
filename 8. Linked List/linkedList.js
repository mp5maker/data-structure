class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // O(1)
  insertStart(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // O(n)
  insertEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // O(n)
  insertMiddle(value, index) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let counter = 0;
      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = node;
      node.next = current;
    }
  }

  // O(1)
  deleteStart() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  // O(n)
  deleteEnd() {
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
  }

  // O(n)
  deleteMiddle(index) {
    if (!this.head) {
      return;
    } else {
      let current = this.head
      let counter = 0
      let prev = null
      while(counter < index) {
        prev = current
        current = current.next
        counter++
      }
      prev.next = current.next
    }
  }

  reverse() {
    let current = this.head
    let prev = null
    while(current) {
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
  }
}

const SLL = new SinglyLinkedList();
SLL.insertStart(1);  // 1
SLL.insertStart(2); // 2 -> 1
SLL.insertEnd(3); // 2 -> 1 -> 3
SLL.insertEnd(4); // 2 -> 1 -> 3 -> 4
SLL.insertMiddle(10, 1); // 2 -> 10 -> 1 -> 3 -> 4
SLL.deleteStart(); // 10 -> 1 -> 3 -> 4
SLL.deleteEnd(); // 10 -> 1 -> 3
SLL.deleteMiddle(1); // 10 -> 1 -> 3
console.log(SLL.head); // 10 -> 3
console.log(SLL.reverse()) // 3 -> 10
