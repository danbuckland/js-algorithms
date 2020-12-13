// Write a function called minSubArrayLen which accepts two parameters - an array 
// of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there
// isn't one, return 0 instead.

// Assume the minimum length could be 1
// Assume the array is unsorted
// Assume the array cannot be mutated

const minSubArrayLen = (array, target) => {
  let left = 0
  let windowSize = 1

  // first, loops through each item individually and check
  for (let num of array) {
    if (num >= target) { return 1 }
  }

  // then, starting with a window of increasing size starting at 2
  for (let subArrayLength = 2; subArrayLength <= array.length; subArrayLength++) {
    // get an initial total to work with by summing the first n numbers
    let total = 0
    for (let i = 0; i < subArrayLength; i ++) {
      total += array[i]
    }
    if (total >= target) { 
      return subArrayLength
    }
    // slide the window up and down checking the total each time
    for (let right = subArrayLength; right <= array.length; right++) {
      total = total - array[right - subArrayLength] + array[right]
      if (total >= target) { 
        return subArrayLength 
      }
    }
  }
  return 0
}

// Test cases
console.log(minSubArrayLen([1, 2, 4, 1, 3, 1], 6)) // 2
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2
console.log(minSubArrayLen([200, 3, 4, 1], 200)) // 1
console.log(minSubArrayLen([15, 3, 17, 11, 1], 17)) // 1
console.log(minSubArrayLen([1, 2, 3, 4], 11)) // 0
console.log(minSubArrayLen([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100)) // 10
