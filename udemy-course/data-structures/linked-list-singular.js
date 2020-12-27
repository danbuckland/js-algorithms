class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
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
    // if this list is empty, just return
    if (this.length === 0) return undefined
    // if there's only one item in the list, set head and tail to null
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    // if there are more than one, traverse the list to length - 1
    if (this.length > 1) {
      let penultimate = this.getPenultimate()      
      this.tail = penultimate
      penultimate.next = null
    }
    this.length--
    return poppedNode
  }
  getPenultimate(){
    let penultimate = this.head
    while(penultimate.next !== this.tail) {
      penultimate = penultimate.next
    }
    return penultimate
  }
}

let list = new SinglyLinkedList()
list.push('Hi')
list.push('there')
list.push('friend')
list.push('how')
list.push('are')
list.push('you?')
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list)


// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("Dave")