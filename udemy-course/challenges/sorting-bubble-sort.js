const bubbleSort = (array) => {
  let comparisons = 0
  let swaps = 0 
  let swapNeeded = true
  let j = array.length
  while (swapNeeded) {
    let swapIndex = 0
    swapNeeded = false
    for (let i = 1; i < j; i++) {
      if (array[i] < array[i - 1]) {
        swap(array, i - 1, i)
        swapNeeded = true
        swaps++
        swapIndex = i
      }
      comparisons++
    }
    j = swapIndex
  }
  console.log(`Made ${comparisons} comparisons`)
  console.log(`Made ${swaps} swaps`)
  return array
}

const swap = (array, a, b) => {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

console.log(bubbleSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(bubbleSort([-1, 0, 3, 1, 2, 14, 31, 56]))
console.log(bubbleSort([-1, 0, 1, 2, 3, 14, 31, 56]))