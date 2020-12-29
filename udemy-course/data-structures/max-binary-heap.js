class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    let pos = this.values.push(value) - 1
    if (pos === 0) return this
    
    let parentPos = Math.floor((pos - 1) / 2)

    while (this.values[parentPos] < value && pos > 0) {
      this.swap(parentPos, pos)
      pos = parentPos
      parentPos = Math.floor((pos - 1) / 2)
    }

    return this
  }

  extractMax() {
    if (this.values.length < 2) return this.values.pop()
    
    this.swap(this.values.length - 1, 0)
    let popped = this.values.pop()
    this.sink()
    
    return popped
  }

  sink() {
    let parent = 0
    let value = this.values[0]
    let leftChild = parent * 2 + 1
    let rightChild = parent * 2 + 2
    while (
      this.values[leftChild] && 
      value < this.values[leftChild] || 
      value < this.values[rightChild]
      ) {
      // swap with the higher of the two children
      if (this.values[rightChild] > this.values[leftChild]) {
        this.swap(parent, rightChild)
        parent = rightChild
      } else {
        this.swap(parent, leftChild)
        parent = leftChild
      }
      leftChild = parent * 2 + 1
      rightChild = parent * 2 + 2
    }
  }

  // Helpers
  swap(a, b) {
    let temp = this.values[a]
    this.values[a] = this.values[b]
    this.values[b] = temp
  }
}

let heap = new MaxBinaryHeap()
heap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55)
console.log(heap.values)
debugger
heap.extractMax()
console.log(heap.values)
heap.extractMax()
console.log(heap.values)
heap.extractMax()
console.log(heap.values)

debugger