class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) {
    let node = new Node(value)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      node.next = this.first
      this.first = node
    }
    return ++this.size
  }

  pop() {
    if (this.size === 0) return null

    let poppedNode = this.first
    this.first = this.first.next
    poppedNode.next = null
    if (this.size === 1) {
      this.last = null
    }
    
    this.size--
    return poppedNode.value
  }
}

let stack = new Stack()
debugger
stack.push('one')
stack.push('two')
stack.push('three')
stack.pop()
stack.pop()
stack.pop()