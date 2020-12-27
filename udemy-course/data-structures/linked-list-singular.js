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
    return list
  }
}

let list = new SinglyLinkedList()
console.log(list.unshift('!'))
console.log(list.unshift('world'))
console.log(list.unshift('hello'))
debugger

// list.push('Hi')
// list.push('there')
// list.push('friend')
// list.push('how')
// list.push('are')
// list.push('you?')
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