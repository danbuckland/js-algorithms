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

  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof(index) !== 'number' || isNaN(index)) return null
    let pointer = this.head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        pointer = pointer.next
      }
    } else {
      pointer = this.tail
      for (let i = this.length - 1; i > index; i--) {
        pointer = pointer.previous
      }
    }
    return pointer
  }

  set(index, value) {
    let node = this.get(index)
    if (!node) {
      return false
    }
      
    node.value = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length || typeof(index) !== 'number' || isNaN(index)) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    
    let insertedNode = new Node(value)
    let previousNode = this.get(index - 1)
    let nextNode = previousNode.next

    insertedNode.previous = previousNode
    insertedNode.next = nextNode
    previousNode.next = insertedNode
    this.length++

    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length || typeof(index) !== 'number' || isNaN(index)) return false
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let removedNode = this.get(index)
    let beforeNode = removedNode.previous
    let afterNode = removedNode.next

    removedNode.previous = null
    removedNode.next = null

    beforeNode.next = afterNode
    afterNode.previous = beforeNode

    this.length--
    return removedNode
  }

  reverse() {
    // swap the head and the tail
    let current = this.head
    this.head = this.tail
    this.tail = current
    let previous = null
    let next
    // for each node, next should be swapped with previous
    for (let i = 0; i < this.length; i++) {
      next = current.next
      current.next = previous
      current.previous = next
      current.next = previous
      previous = current
      current = next
    }
  }

  print() {
    let array = []
    for (let i = 0; i < this.length; i++) {
      array.push(this.get(i).value)
    }
    console.log(array)
  }
}

let list = new DoublyLinkedList()
list.push('one')
list.push('two')
list.push('three')
list.push('four')
list.push('five')
list.push('six')
list.push('seven')
list.push('eight')

debugger
list.get(3)
list.get(5)
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())

debugger