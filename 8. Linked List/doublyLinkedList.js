class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.head.prev = node;
      node.next = this.head;
      this.head = node
    }
  }

  // O(n)
  deleteMiddle(index) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let counter = 0;
    let prev = null;
    while (counter < index) {
      prev = current;
      current = current.next;
      counter++;
    }
    if (current.next) {
      let next = current.next;
      prev.next = next;
      next.prev = prev;
    }
  }
}

const DLL = new DoublyLinkedList();
DLL.insertStart(10); // 10
DLL.insertStart(32); // 32 -> 10
DLL.insertStart(2); // 2 -> 32 -> 10
DLL.deleteMiddle(1); // 2 -> 10
console.log(DLL.head);
