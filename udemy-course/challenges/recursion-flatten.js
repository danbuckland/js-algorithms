// Write a recursive function called flatten which accepts an array of arrays and returns
// a new array with all values flattened.

const flatten = (a, results = []) => {
  // Base case is when the object passed in is not an array
  if (!Array.isArray(a)) return results.push(a)

  a.forEach(element => { flatten(element, results) })

  return results
}

// Test cases
console.log(flatten([1, 2, 3, [4, 5], 6])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]