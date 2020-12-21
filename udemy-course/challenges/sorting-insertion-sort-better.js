const insertionSort = (array) => {
  let moves = 0
  let comparisons = 0
  // loop through all elements starting from the end of the sorted array
  for (let i = 1; i < array.length; i++) {
    let j
    let unsortedValue = array[i]
    comparisons++
    for (j = i - 1; j >= 0 && unsortedValue < array[j]; j--) {
      comparisons++
      // each time, move the unsorted item
      array[j + 1] = array[j]
      moves++
    }
    array[j + 1] = unsortedValue
    moves++
  }
  console.log(`Made ${comparisons} comparisons`)
  console.log(`Made ${moves} moves`)
  return array
}

console.log(insertionSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(insertionSort([-1, 0, 3, 1, 2, 14, 31, 56]))
console.log(insertionSort([-1, 0, 1, 2, 3, 14, 31, 56]))