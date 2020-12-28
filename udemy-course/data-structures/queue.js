class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null 
    this.size = 0
  }

  enqueue(value) {
    // add something to the end of the list
    let node = new Node(value)
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
    return dequeued.value
  }
}

let q = new Queue()
debugger