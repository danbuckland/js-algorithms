class Node {
  constructor(priority, value) {
    this.priority = priority
    this.value = value
  }
}

export default class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(priority, value) {
    // create a node and add it to the end of the heap
    let node = new Node(priority, value)
    let pos = this.values.push(node) - 1

    if (pos !== 0) {
      this.bubbleUp()
    }

    return this
  }

  dequeue() {
    if (this.values.length < 2) return this.values.pop()
    
    this.swap(this.values.length - 1, 0)
    let dequeued = this.values.pop()
    this.sink()

    return dequeued
  }

  sink() {
    const value = this.values[0].priority
    let parent = 0
    while (parent < this.values.length - 1) {
      let swap = null
      const leftChildIndex = parent * 2 + 1
      const rightChildIndex = parent * 2 + 2
      const leftChild = this.values[leftChildIndex]
      const rightChild = this.values[rightChildIndex]

      if (leftChild && value > leftChild.priority) {
        swap = leftChildIndex
      }

      if (rightChild && value > rightChild.priority) {
        if (swap === null || rightChild.priority < leftChild.priority) {
          swap = rightChildIndex
        }
      }
      
      if (!swap) break
      this.swap(parent, swap)
      parent = swap
    }
  }

  bubbleUp() {
    let insertedIndex = this.values.length - 1
    let parentIndex = Math.floor((insertedIndex - 1) / 2)
    let insertedPriority = this.values[insertedIndex].priority
    let parentPriority = this.values[parentIndex].priority

    while(insertedPriority < parentPriority && insertedIndex > 0) {
      this.swap(insertedIndex, parentIndex)
      insertedIndex = parentIndex
      if (parentIndex > 0) {
        parentIndex = Math.floor((insertedIndex - 1) / 2)
        parentPriority = this.values[parentIndex].priority
      }
    }
  }

  swap(a, b) {
    let temp = this.values[a]
    this.values[a] = this.values[b]
    this.values[b] = temp
  }

  print() {
    let values = []
    for (let i = 0; i < this.values.length; i++) {
      values.push(this.values[i].priority)
    }
    console.log(values)
  }
}

// let pq = new PriorityQueue()
// pq.enqueue(5, 'Headache').enqueue(2, 'Concussion').enqueue(0, 'Gunshot').enqueue(4, 'The Sniffles').enqueue(8, 'Nerves').enqueue(1, 'Stabbing')
// // [0, 4, 1, 5, 8, 2]
// debugger
// pq.dequeue() // 0
// pq.print() // [1, 4, 2, 5, 8]
// pq.dequeue() // 1
// pq.print() // [2, 4, 8, 5]
// pq.dequeue() // 2
// pq.print() // [4, 5, 8]
// pq.dequeue() // 4
// pq.print() // [5, 8]
// pq.dequeue() // 5
// pq.print() // [8]
// pq.dequeue() // 8
// pq.print() // []
// pq.dequeue() // undefined

