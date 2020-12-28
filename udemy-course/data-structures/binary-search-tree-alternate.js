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
    let newNode = new Node(value)

    if (!this.root) { 
      this.root = newNode
      return this
    }

    let targetPos = this.root

    while(true) {
      if (value < targetPos.value) {
        if (!targetPos.left) {
          targetPos.left = newNode
          return this
        } else {
          targetPos = targetPos.left
        }
      } else if (value > targetPos.value) {
        if (!targetPos.right) {
          targetPos.right = newNode
          return this
        } else {
          targetPos = targetPos.right
        }
      } else {
        return this
      }
    }
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
tree.insert(8).insert(13)
debugger
//         10
//       /    \
//      1      15
//     / \    /  \
//    -2  8  14  200
//          /
//         13