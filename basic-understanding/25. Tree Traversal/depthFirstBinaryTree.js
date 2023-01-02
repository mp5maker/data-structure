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

  preOrder(start, traversal = []) {
    if (start === null) return
    traversal.push(start.val)
    this.preOrder(start.left, traversal)
    this.preOrder(start.right, traversal)
    return traversal
  }

  inOrder(start, traversal=[]) {
    if (start == null) return
    this.inOrder(start.left, traversal)
    traversal.push(start.val)
    this.inOrder(start.right, traversal)
    return traversal
  }

  postOrder(start, traversal=[]) {
    if (start == null) return
    this.postOrder(start.left, traversal)
    this.postOrder(start.right, traversal)
    traversal.push(start.val)
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
console.log("preOrder", tree.preOrder(tree.root));
console.log("inOrder", tree.inOrder(tree.root));
console.log("postOrder", tree.postOrder(tree.root));

// Depth First Search
//               3
//       4               5
// 6         7    8           9