const { performance } = require('perf_hooks');
// Attempt to write quickSort from the breifest of descriptions

const quickSort = (array, left = 0, right = array.length) => {
  if (right > left) {
    let p = left
    for (let i = left + 1; i < right; i++) {
      // swap to before the greater than numbers
      if (array[i] <= array[left]) {
        p++
        moveItem(array, i, p)
      }
    }
    moveItem(array, left, p)

    quickSort(array, left, p)
    quickSort(array, p + 1, right)
  }

  return array

}

const moveItem = (array, from, to) => {
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
