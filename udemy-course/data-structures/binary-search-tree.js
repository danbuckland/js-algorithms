class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    // if root is null then set this.root to node
    if (!this.root) {
      this.root = new Node(value)
      return true
    }

    let targetPos = this.root
    let parentPos = null
    let path = 0
    while(targetPos) {
      debugger
      if (targetPos.value > value) {
        parentPos = targetPos
        targetPos = targetPos.left
        path = -1
      } else {
        parentPos = targetPos
        targetPos = targetPos.right
        path = 1
      }
    }
    if (path < 0) {
      parentPos.left = new Node(value)
    } else {
      parentPos.right = new Node(value)
    }
    
    return true
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(14)
tree.insert(1)
tree.insert(-2)
tree.insert(200)
tree.insert(8)
debugger
//         10
//       /    \
//      1      15
//     / \    /  \
//    -2  8  14  200
//