class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  // O(logn)
  insert(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.value) {
        if (val <= current.value) {
          if (current.left == null) {
            current.left = newNode;
            break;
          }
          current = current.left
        } else if (val > current.value) {
          if (current.right == null) {
            current.right = newNode;
            break;
          }
          current = current.right
        }
      }
    }
  }

  // Balanced Binary Search Tree, O(logn), for unabalanced BST, O(n)
  search(val) {
    let current = this.head;
    while (current) {
      if (current.value == val) return true;
      else if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
    }
    return false;
  }

  delete(val) {
    let current = this.head
    if (!this.head) return null
    let parent = null
    let lastDirection = null
    while(current.value) {
      if (current.value == val) {
        if (current.left == null && current.right == null) parent[lastDirection] = null
        if (current.left == null && current.right !== null) parent[lastDirection] = current.right
        if (current.right == null && current.left !== null) parent[lastDirection] = current.left
        if (current.left !== null && current.right !== null) {
          let temp = current.left
          while(temp.right) {
            temp = temp.right
          }
          temp.right = current.right
          parent[lastDirection] = temp
        }
        break
      }

      if (val < current.value) {
        lastDirection = "left"
        parent = current
        current = current.left;
      } else if (val > current.value) {
        lastDirection = "right"
        parent = current
        current = current.right;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(3); // 3
bst.insert(9); // 3  => 9
bst.insert(1); // 1 <- 3 -> 9
bst.insert(21); // 1 <- 3 -> 9 > 21
bst.insert(8); // 1 <- 3 -> 9      8 <- 9 > 21
console.log(bst.head);
console.log(bst.search(23)) // false
console.log(bst.search(9)) // true
// bst.delete(8); // 1 <- 3 -> 9      null <- 9 > 21 [Deletion of 0 Child]
// bst.delete(9); // 1 <- 3 -> 21 [Deletion of 1 Child]
bst.delete(9); // 1 <- 3 -> 21 [Deletion of 2 Child]
console.log(bst.head);
