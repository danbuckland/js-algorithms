const bubbleSort = (array) => {
  let count = 0
  let swapNeeded = true
  let j = array.length
  while (swapNeeded) {
    swapNeeded = false
    for (let i = 1; i < j; i++) {
      if (array[i] < array[i - 1]) {
        swap(array, i - 1, i)
        swapNeeded = true
      }
      count++
    }
    j--
  }
  console.log(`Took ${count} comparisons`)
  return array
}

const swap = (array, a, b) => {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

console.log(bubbleSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(bubbleSort([-1, 0, 3, 1, 2, 14, 31, 56]))