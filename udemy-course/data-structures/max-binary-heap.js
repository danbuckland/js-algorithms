class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    const swap = (a, b) => {
      const temp = this.values[a]
      this.values[a] = this.values[b]
      this.values[b] = temp
    }

    const getParentPos = (position) => {
      if (position % 2 === 0) {
        return Math.floor(position / 2 - 1)
      } else {
        return Math.floor(position / 2 - 2)
      }
    }
    // insert the value at the end
    let position = this.values.push(value) - 1
    if (position === 0) return this
    // then check if the parent is greater than value
    let parentPosition = getParentPos(position)
    
    while (this.values[parentPosition] < value) {
      swap(parentPosition, position) 
      position = parentPosition
      parentPosition = getParentPos(position)
    }

    return this
  }
}

let mbh = new MaxBinaryHeap()
mbh.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55)
console.log(mbh.values)