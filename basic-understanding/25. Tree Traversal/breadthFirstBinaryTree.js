class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  levelOrder(start, traversal = []) {
    const queue = [start]
    while(queue.length) {
      const popped = queue.shift()
      traversal.push(popped.val)
      if(popped.left) queue.push(popped.left)
      if (popped.right) queue.push(popped.right)
    }
    return traversal
  }

}

const tree = new BinaryTree();
tree.root = new Node(3);
tree.root.left = new Node(4);
tree.root.left.left = new Node(6);
tree.root.left.right = new Node(7);
tree.root.right = new Node(5);
tree.root.right.left = new Node(8);
tree.root.right.right = new Node(9);
console.log(tree.root);
// Space Complexity O(n), Time Complexity O(n)
console.log("levelOrder", tree.levelOrder(tree.root));

// Breadth First Search
//               3
//       4               5
// 6         7    8           9
