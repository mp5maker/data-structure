class Node {
  constructor(value) {
    this.value = value;
    this.adjacentList = [];
    this.visited = false
  }
}

class Stack {
  constructor() {
    this.list = []
  }

  push(value) {
    this.list.push(value)
  }

  pop() {
    return this.list.pop()
  }

  size() {
    return this.list.length
  }
}


class Queue {
  constructor() {
    this.list = []
  }

  enqueue(value) {
    this.list.push(value)
  }

  dequeue() {
    return this.list.shift()
  }

  size() {
    return this.list.length
  }
}

class Graph {
  breadthFirstSearch(node) {
    let queue = new Queue()
    let travel = []
    queue.enqueue(node)

    while(queue.size()) {
      let currentNode = queue.dequeue()
      travel.push(currentNode.value)
      if (!currentNode.visited) {
        currentNode.visited = true;
        const neighbors = currentNode.adjacentList
        for (let neighbor of neighbors) {
          if (!neighbor.visited) {
            queue.enqueue(neighbor)
          }
        }
      }
    }

    return travel
  }
}


const node1 = new Node('A');
const node2 = new Node('B');
const node3 = new Node('C');
const node4 = new Node('D')
const node5 = new Node('E')
const node6 = new Node('F')
const node7 = new Node('G')


node1.adjacentList.push(node2);
node1.adjacentList.push(node3);
node1.adjacentList.push(node4);

node2.adjacentList.push(node5)
node2.adjacentList.push(node6)

node4.adjacentList.push(node7)
console.log(new Graph().breadthFirstSearch(node1))

// Graph
//            A
//     B     C     D
// E     F       G

