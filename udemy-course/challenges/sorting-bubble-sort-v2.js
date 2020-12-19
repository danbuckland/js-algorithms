const bubbleSort = (array) => {
  let comparisons = 0
  let swaps = 0
  for (let i = array.length; i > 0; i--) {
    let swapNeeded = false
    for (let j = 1; j < i; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j)
        swapNeeded = true
        swaps++
      }
      comparisons++
    }
    if (!swapNeeded) break
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