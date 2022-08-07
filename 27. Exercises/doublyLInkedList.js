class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtHead(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  insertAtTail(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  insertAtIndex(index, val) {
    if (index < 0 || index > this.size) return null;
    else {
      const newNode = new Node(val);
      let current = this.head;
      let prev = null;
      while (index) {
        prev = current;
        current = current.next;
        index--;
      }
      current.prev = newNode;
      newNode.next = current;
      newNode.prev = prev;
      prev.next = newNode;
      this.size++;
    }
  }

  deleteAtHead() {
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let current = this.head.next;
      current.prev = null;
      this.head = current;
      this.size--;
    }
  }

  deleteAtTail() {
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let current = this.tail.prev;
      current.next = null;
      this.tail = current;
      this.size--;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.size) return null;
    else if (index === 0) {
      let current = this.head.next;
      if (current) current.prev = null;
      this.head = current;
    } else if (current === this.size - 1) {
      if (prev) prev.next = null;
    } else {
      let current = this.head;
      let prev = null;
      while (index) {
        prev = current;
        current = current.next;
        index--;
      }
      let next = current.next;
      next.prev = prev;
      prev.next = next;
    }
    this.size--;
  }
}

const dll = new DoublyLinkedList();
dll.insertAtHead(3);
dll.insertAtHead(1);
dll.insertAtTail(4);

console.log(dll.head);
console.log(dll.tail);
console.log("+++++++++++");

console.log("Insert At Index<<<<");
dll.insertAtIndex(1, 2);
console.log(dll.head);
console.log(dll.tail);
console.log(">>>>");

console.log("Delete At head <<<<");
dll.deleteAtHead();
console.log(dll.head);
console.log(dll.tail);
console.log(">>>>");

console.log("Delete At Tail <<<<");
dll.deleteAtTail();
console.log(dll.head);
console.log(dll.tail);
console.log(">>>>");

console.log("Delete At Index <<<<");
dll.deleteAtIndex(1);
console.log(dll.head);
console.log(dll.tail);
console.log(">>>>");
