// Write a recursive function called someRecursive ehich accepts an array and a callback.
// the function returns true if a single value in the array returns true when passed the 
// callback. Otherwise it returns false.

const someRecursive = (array, callback) => {
  // base case is when the end of the array has been reached
  if (array.length === 0) return false

  return callback(array.pop()) || someRecursive(array, callback)
}

const isOdd = n => n % 2 !== 0

// Test cases 
console.log(someRecursive([2, 4, 6, 8, 9, 10], isOdd)) // true
console.log(someRecursive([2, 4], isOdd)) // false
console.log(someRecursive([1, 2, 3, 4, 5, 6], n => n > 10)) // false
console.log(someRecursive([4, 5, 6, 7, 10, 11], n => n > 10)) // true