class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null 
    this.size = 0
  }

  enqueue(node) {
    // add something to the end of the list
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }

  dequeue() {
    // remove this first item in the list
    if (!this.first) return null
    let dequeued = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return dequeued
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
        return this
      }
    }

    if (path < 0) {
      parentPos.left = newNode
    } else {
      parentPos.right = newNode
    }

    return this
  }

  find(value) {
    if (!this.root) return false

    let current = this.root
    while(current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
}

module.exports = { BinarySearchTree, Queue }

// let tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(15)
// tree.insert(14)
// tree.insert(1)
// tree.insert(-2)
// tree.insert(200)
// tree.insert(8)
// tree.insert(8).insert(13)
//         10
//       /    \
//      1      15
//     / \    /  \
//    -2  8  14  200
//          /
//         13