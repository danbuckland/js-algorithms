const selectionSort = (array) => {
  let count = 0

  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        minIndex = j
        min = array[j]
      }
      count++
    }
    if (i !== minIndex) {
      swap(array, i, minIndex)
    }
  }
  console.log(`Took ${count} comparisons`)
  return array
}

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]]

console.log(selectionSort([1, 31, 14, 2, 3, 56, 0, -1]))
console.log(selectionSort([-1, 0, 3, 1, 2, 14, 31, 56]))
console.log(selectionSort([-1, 0, 1, 2, 3, 14, 31, 56]))