const bubbleSort = (array) => {
  let count = 0
  for (let i = array.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j)
      }
      count++
    }
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
//                     [1, 14, 2, 3, 31, 0, -1, 56]
//                     [1, 2, 3, 14, 0, -1, 31, 56]
//                     [1, 2, 3, 0, -1, 14, 31, 56]
//                     [1, 2, 0, -1, 3, 14, 31, 56]
//                     [1, 0, -1, 2, 3, 14, 31, 56]
//                     [0, -1, 1, 2, 3, 14, 31, 56]
//                     [-1, 0, 1, 2, 3, 14, 31, 56]
//                     [-1, 0, 1, 2, 3, 14, 31, 56]