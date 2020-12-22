const insertionSort = (array) => {
  let sortedEnd = 1
  // loop through all elements starting from the end of the sorted array
  for (let i = sortedEnd; i < array.length; i++) {
    for (let j = 0; j < sortedEnd + 1; j++) {
      if (j === sortedEnd) {
        // item is in the right place
        sortedEnd++
        break
      } else if (array[i] <= array[j]) {
        // insert the item at this point
        swapItem(array, i, j)
        sortedEnd++
        break
      }
    }
  }
  return array
}

const swapItem = (array, from, to) => {
  let temp = array[from]
  array[from] = array[to]
  array[to] = temp
}

console.log(insertionSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(insertionSort([-1, 0, 3, 1, 2, 14, 31, 56]))
console.log(insertionSort([-1, 0, 1, 2, 3, 14, 31, 56]))