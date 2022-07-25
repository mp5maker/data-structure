class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class QueueLL {
  constructor() {
    this.head = null
  }

  // O(n)
  enqueue(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  // O(1)
  dequeue() {
    if (!this.head) {
      return null
    } else {
      let current = this.head
      if (current.next) {
        this.head = current.next
      }
    }
  }

  // O(1)
  peek() {
    if (!this.head) {
      return null
    } else {
      return this.head.value
    }
  }
}

const qll = new QueueLL()
qll.enqueue(1) // 1
qll.enqueue(9) // 1 -> 9
qll.enqueue(14) // 1 -> 9 -> 14
qll.enqueue(27) // 1 -> 9 -> 14 -> 27
qll.dequeue() // 9 -> 14 -> 27
qll.dequeue() // 14 -> 27
console.log(qll.peek()) // 14