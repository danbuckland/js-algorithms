class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    let pos = this.values.push(value) - 1
    if (pos === 0) return this
    
    let parentPos = Math.floor((pos - 1) / 2)

    while (this.values[parentPos] < value) {
      [this.values[parentPos],this.values[pos]] = [this.values[pos],this.values[parentPos]]
      pos = parentPos
      parentPos = Math.floor((pos - 1) / 2)
    }

    return this
  }
}

let mbh = new MaxBinaryHeap()
mbh.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55)
console.log(mbh.values)