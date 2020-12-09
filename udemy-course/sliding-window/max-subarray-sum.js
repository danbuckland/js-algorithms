// Write a function called 'maxSubarraysum' which accepts an array of integers and a number 'n'.
// The function should calculate the maximum sum of n consecutive elements in the array.
// The complexity should be O(n)

// Assumes the array could be mutated
// Assumes the array could be unsorted
// Empty array should return null
// n = 0 should return null
// Array can contain negative numbers

const maxSubarraySum = (array, n) => {
  // short circuit if array is empty, n < 1 or n > array length
  if (array.length === 0 || n < 1 || n > array.length) { return null }
  // get the sum of the first n numbers in array
  let windowTotal = 0
  for (let i = 0; i < n; i++) {
    windowTotal += array[i]
  }
  // set max to initial total
  let max = windowTotal
  // loop through array until window reaches end of the array
  for (let j = n; j < array.length; j++) {
    // delete first item in the window and add the last
    windowTotal = windowTotal - array[j - n] + array[j]
    max = Math.max(windowTotal, max)
    // slide the window along
  }
  return max
}

// Test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17)
console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6)
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13)
console.log(maxSubarraySum([], 4) === null)
console.log(maxSubarraySum([1, 2, 3], 0) === null)
console.log(maxSubarraySum([1, 2, 99, -1, -100, 1000], 2) === 900)
console.log(maxSubarraySum([-5, -2, -4, -1, -1, -9], 2) === -2)