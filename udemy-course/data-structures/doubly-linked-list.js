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
    if (this.length === 0) return undefined
    let poppedItem = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.previous
      this.tail.next = null
      poppedItem.previous = null
    }
    this.length--
    return poppedItem
  }

  shift() {
    // if the list is 0 return undefined
    if (this.length === 0) return undefined
    let shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.previous = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }
}

let list = new DoublyLinkedList()
list.push('one')
list.push('two')
list.push('three')
debugger
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())

debugger