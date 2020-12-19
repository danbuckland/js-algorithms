const insertionSort = (array) => {
  // loop through all elements starting from the end of the sorted array
  for (let i = 1; i < array.length; i++) {
    let j
    let unsortedValue = array[i]
    for (j = i - 1; j >= 0 && unsortedValue < array[j]; j--) {
      // each time, move the unsorted item
      array[j + 1] = array[j]
    }
    array[j + 1] = unsortedValue
  }
  return array
}

console.log(insertionSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(insertionSort([-1, 0, 3, 1, 2, 14, 31, 56]))
console.log(insertionSort([-1, 0, 1, 2, 3, 14, 31, 56]))