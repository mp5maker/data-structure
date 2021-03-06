class Node {
  constructor(value, adjacentList = [], visited = false) {
    this.value = value;
    this.adjacentList = adjacentList;
    this.visited = visited;
  }

  clone() {
    return JSON.parse(
      JSON.stringify(new Node(this.value, [...this.adjacentList], this.visited))
    );
  }
}

class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  size() {
    return this.list.length;
  }
}

class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  size() {
    return this.list.length;
  }
}

class Graph {
  breadthFirstSearch(node) {
    let queue = new Queue();
    let travel = [];
    queue.enqueue(node);

    while (queue.size()) {
      let currentNode = queue.dequeue();
      travel.push(currentNode.value);
      if (!currentNode.visited) {
        currentNode.visited = true;
        const neighbors = currentNode.adjacentList;
        for (let neighbor of neighbors) {
          if (!neighbor.visited) {
            queue.enqueue(neighbor);
          }
        }
      }
    }

    return travel;
  }

  depthFirstSearch(node) {
    let stack = new Stack();
    let travel = [];
    stack.push(node);
    while (stack.size()) {
      let currentNode = stack.pop();
      travel.push(currentNode.value);
      if (!currentNode.visited) {
        currentNode.visited = true;
        const neighbors = currentNode.adjacentList;
        for (let neighbor of neighbors) {
          if (!neighbor.visited) {
            stack.push(neighbor);
          }
        }
      }
    }
    return travel;
  }
}

const node1 = new Node("A");
const node2 = new Node("B");
const node3 = new Node("C");
const node4 = new Node("D");
const node5 = new Node("E");
const node6 = new Node("F");
const node7 = new Node("G");

node1.adjacentList.push(node2);
node1.adjacentList.push(node3);
node1.adjacentList.push(node4);

node2.adjacentList.push(node5);
node2.adjacentList.push(node6);

node4.adjacentList.push(node7);

const breadthFirstNode = node1.clone();
const depthFirstNode = node1.clone();
// Complexity Time O(Vertex+Edge), Space Complexity (V)
console.log(new Graph().breadthFirstSearch(breadthFirstNode));
// Complexity Time O(Vertex+Edge) Space Complexity (V)
console.log(new Graph().depthFirstSearch(depthFirstNode));

// Graph
//            A
//     B     C     D
// E     F       G
