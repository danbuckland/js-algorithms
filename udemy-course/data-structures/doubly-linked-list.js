class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.previous = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    // if the length is 0 return undefined
    if (this.length === 0) return undefined
    // if the length is 1 return that item and set head and tail to null
    let poppedItem = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // if the length is 2
      this.tail = this.tail.previous
      this.tail.next = null
    }

    this.length--
    poppedItem.previous = null
    return poppedItem
  }
}

let list = new DoublyLinkedList()
list.push('one')
list.push('two')
list.push('three')
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())

debugger