// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. Return an array 
// that includes both values that sum to 0 or undefined if a pair does not exist

const sumZero = (sortedArray) => {
  if (sortedArray[0] > 0) { return undefined }
  // create two pointers 'left' and 'right' starting at 0 and length - 1
  let left = 0
  let right = sortedArray.length - 1

  while (right > left) {
    let result = sortedArray[left] + sortedArray[right]
    if (result === 0) {
      return [sortedArray[left], sortedArray[right]] // **
    } else if (result > 0) {
      right--
    } else {
      left++
    }
  }

  return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))  // [-3, 3]
console.log(sumZero([-2, 0, 1, 3]))             // undefined
console.log(sumZero([1, 2, 3]))                 // undefined
console.log(sumZero([0, 0]))                    // [0, 0]
console.log(sumZero([-2, 2, 10, 10, 10, 10]))   // [-2, 2]