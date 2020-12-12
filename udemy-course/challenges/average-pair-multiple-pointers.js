// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals 
// the target average. There may be more than one pair that matches the average target.

// Assume positive and negative integers
// Assume the target average can be a float
// Assume pairs don't have to be consecutive
// Return true if a pair matches the average, false if not

// Target O(n) complexity using multiple pointers
const averagePair = (array, target) => {
  // short circuit if array.length < 2
  if (array.length < 2 ) { return false }
  // start with two pointers, left and right at the start and end of the array
  let left = 0, right = array.length - 1
  // return if the smallest value is greater than target, or biggest is smaller
  if (array[left] > target || array[right] < target) { return false }

  while (left < right) {
    // short circuit if the left value is higher than the target
    // check the average of the values
    let average = (array[left] + array[right])/2
    if (average > target) {
      // if the average is higher than target shift right down
      right--
    } else if (average < target) {
      // else shift left up
      left++
    } else {
      // else return true
      return true
    }
  }
  return false
}

// Test cases
console.log(averagePair([1, 2], 1.5)) // true
console.log(averagePair([0, 2], 2)) // false
console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
console.log(averagePair([100, 102, 104, 105, 106], 99)) // false
console.log(averagePair([-100, 11, 23], 24)) // false

