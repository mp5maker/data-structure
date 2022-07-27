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

  insert(val) {
    const newNode = new Node(val)
    if (!this.head) this.head = newNode
    else {
      let current = this.head
      while (current.value) {
        if (val <= current.value) {
          if (current.left) {
            current = current.left
          } else {
            current.left = newNode
            break
          }
        } else if (val > current.value) {
          if (current.right) {
            current = current.right
          } else {
            current.right = newNode
            break
          }
        }
      }
    }
  }

  // Balanced Binary Search Tree, O(logn), for unabalanced BST, O(n)
  search(val) {
    let current = this.head
    while(current) {
      if (current.value == val) return true
      if (val < current.value) current = current.left
      if (val > current.value) current = current.right
    }
    return false
  }
}


const bst = new BinarySearchTree()
bst.insert(3)   // 3
bst.insert(9)  // 3  => 9
bst.insert(1) // 1 <- 3 -> 9
bst.insert(21) // 1 <- 3 -> 9 > 21
console.log(bst.head)
console.log(bst.search(23)) // false
console.log(bst.search(9)) // true