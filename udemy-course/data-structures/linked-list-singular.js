class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let node = new Node(val)
    if (this.length === 0) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
    this.length++

    return this
  }

  pop() {
    if (this.length === 0) return undefined

    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) { this.head = null, this.tail = null }
    return current
  }

  shift() {
    if (this.length === 0) return undefined
    let shifted = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {this.tail = null}
    return shifted
  }

  unshift(value) {
    let node = new Node(value)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof(index) !== 'number' || isNaN(index)) return null
    if (index === this.length - 1) return this.tail

    let value = this.head
    for (let i = 0; i < index; i++) {
      value = value.next
    }

    return value
  }

  set(index, value) {
    let node = this.get(index)
    if (!node) {
      return false
    }
      
    node.val = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length || typeof(index) !== 'number' || isNaN(index)) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    
    let newNode = new Node(value)
    let previous = this.get(index - 1)
    let next = this.get(index)
    previous.next = newNode
    newNode.next = next
    this.length++

    return true
  }

  remove(index) {
    console.log(index)
    if (index < 0 || index >= this.length || typeof(index) !== 'number' || isNaN(index)) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    
    let previous = this.get(index - 1)
    let removed = previous.next
    previous.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    // 13(H) -> 15 -> 18 -> 1(T)
    // 13(T) -> 15 -> 18 -> 1(H)
    // 13(T) <- 15 <- 18 <- 1(H)
    // c
    // swap the head and tail
    let current = this.head
    this.head = this.tail
    this.tail = current

    let previous = null
    let next

    // loop through
    for (let i = 0; i < this.length; i++) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    return list
  }

  print() {
    let arr = []
    let current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList()
list.push('Hi')
list.push('there')
list.push('friend')
list.push('how')
list.push('are')
list.push('you?')
debugger
list.reverse()
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list)
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)


// // let first = new Node("Hi")
// // first.next = new Node("there")
// // first.next.next = new Node("Dave")