// write a function called same() which accepts two arrays and returns 
// true if every value in the first array has its corresponding value 
// squared in the second array. The frequency of values must be the same.

// Assume arrays can be mutated
// Assume arrays contain only integers

// First solve with O(n^2) complexity
const same = (array1, array2) => {
  if (array1.length !== array2.length || !array1.length) { return false }
  // loop through every item in the array
  for (const f of array1) {
    let found = false;
    for (let i = 0; i < array2.length; i++) {
      if (f * f === array2[i]) {
        array2[i] = -1
        found = true;
        break
      }
    }
    if (!found) { return false }
  }
  return true
}

// Then solve with O(n) complexity
const sameFaster = (array1, array2) => {
  if (array1.length !== array2.length || !array1.length) { return false }
  // create an an empty object to count the number of instances of square
  let squaresFound = {}
  // loop through the first array
  for (const a of array1) {
    // add the squares as coerced object keys e.g. '4': 1
    let key = a * a
    // increment for each or set to 1
    squaresFound[key] = ++squaresFound[key] || 1
  }
  debugger
  // loop through the second array
  for (const b of array2) {
    // if object key exists and is greater than 0
    if (squaresFound[b] > 0) {
      // decrement
      squaresFound[b]--  
    // else return false
    } else {
      return false
    }
  }
  // return true
  return true
}

console.log(same([1, 2, 3], [1, 4, 9]))       // true
console.log(same([1, 2, 3], [1, 4, 9, 9]))    // false
console.log(same([], []))                     // false
console.log(same([2, 2, 1], [4, 4, 2]))       // false
console.log(same([1, 2, 4], [4, 16, 1]))      // true
console.log(same([2, 2, 2], [4, 4, 4]))       // true

console.log('\n')

console.log(sameFaster([1, 2, 3], [1, 4, 9]))       // true
console.log(sameFaster([1, 2, 3], [1, 4, 9, 9]))    // false
console.log(sameFaster([], []))                     // false
console.log(sameFaster([2, 2, 1], [4, 4, 2]))       // false
console.log(sameFaster([1, 2, 4], [4, 16, 1]))      // true
console.log(sameFaster([2, 2, 2], [4, 4, 4]))       // true