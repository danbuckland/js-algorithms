// Attempt to write quickSort from the breifest of descriptions

const quickSort = (array) => {
  // grab the pivot at any index
  // place the items either side in the array (virtually)

  // Base case if the array is technically sorted
  if (array.length <= 1) return array
  
  let p = 0
  for (let i = 1; i < array.length; i++) {
    // swap to before the greater than numbers
    if (array[i] <= array[p]) {
      moveItem(array, i, p)
      p++
    }
  }

  return quickSort(array.slice(0,p)).concat(array[p]).concat(quickSort(array.slice(p + 1, array.length)))

}

const moveItem = (array, from, to) => {
  let passenger = array.splice(from, 1) // Grab the item and remove it
  array.splice(to, 0, ...passenger) // put it back in the array
}

// Test cases:
console.log(quickSort([4, 3, 2, 1, 5]))
console.log(quickSort([1, 3, 5, 2, 1]))
console.log(quickSort([-1, 4, 3, 2, 5]))

let data = Array.apply(null, {length: 10000}).map(Function.call, Math.random)
console.log(quickSort(data))

