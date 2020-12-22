// Follow the Udemy pseudocode to attempt an implementation
const {performance} = require('perf_hooks');

const pivot = (array, start = 0, end = array.length - 1) => {
  let swapIndex = start
  let pivot = array[start]
  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++
      swapItem(array, i, swapIndex)
    }
  }

  swapItem(array, start, swapIndex)

  return swapIndex
}

const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    let pivotIndex = pivot(array, start, end)
    quickSort(array, start, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, end)
  }
  
  return array
}

const swapItem = (array, from, to) => {
  let temp = array[from]
  array[from] = array[to]
  array[to] = temp
}

// Test cases:
console.log(quickSort([1]))
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
console.log(quickSort([4, 3, 2, 1, 5]))
console.log(quickSort([1, 3, 5, 2, 1]))
console.log(quickSort([-1, 4, 3, 2, 5]))

let data = Array.apply(null, {length: 10000}).map(Function.call, Math.random)
const t1 = performance.now()
console.log(quickSort(data))
const t2 = performance.now()

console.log(`This calculation took ${(t2-t1)/1000} seconds`)

