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
    let parentPos = null
    let path

    while(targetPos) {
      if (targetPos.value > value) {
        parentPos = targetPos
        targetPos = targetPos.left
        path = -1
      } else if (targetPos.value < value) {
        parentPos = targetPos
        targetPos = targetPos.right
        path = 1
      } else {
        return undefined
      }
    }

    if (path < 0) {
      parentPos.left = newNode
    } else {
      parentPos.right = newNode
    }

    return this
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