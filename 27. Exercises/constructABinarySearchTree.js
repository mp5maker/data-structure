function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Stack {
  constructor() {
    this.store = [];
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.size = this.size.bind(this);
    this.peek = this.peek.bind(this);
  }

  push(val) {
    this.store.push(val);
  }

  pop() {
    return this.store.pop();
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  size() {
    return this.store.length;
  }
}

var bstFromPreorder = function (preorder) {
  let root = null;
  let stack = new Stack();
  preorder.forEach((item) => {
    const newNode = new TreeNode(item);
    let peeked = stack.peek();
    if (root === null) {
      root = newNode;
      stack.push(root);
    } else if (item < peeked.val) {
      peeked.left = newNode;
      stack.push(newNode);
    } else {
      let popped = null;
      while (stack.size() > 0 && item > stack.peek().val) {
        popped = stack.pop();
      }
      popped.right = newNode;
      stack.push(newNode);
    }
  });
  return root;
};
