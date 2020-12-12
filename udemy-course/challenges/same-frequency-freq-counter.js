// Write a function called sameFrequency that takes two positive integers and 
// return true if each has the same frequency of digits as the other
// The complexity should be O(n)

// Assume integers are always positive, no need to guard against negatives

const sameFrequency = (a, b) => {
  // return true if the numbers are exactly the same value
  if (a === b) { return true }
  a = a.toString()
  b = b.toString()
  // return false if the numbers are of different lengths
  if (a.length !== b.length) { return false }
  // instantiate a frequency counter object
  let digitCount = {}
  
  for (const digit of a) {
    // add frequency counts to object
    digitCount[digit] = ++digitCount[digit] || 1
  }

  for (const digit of b) {
    // if b[i] exists && greater than 0
    if (digitCount[digit] > 0) {
      digitCount[digit]--
    } else {
      return false
    }
  }

  return true
}

// Test cases/concrete examples
console.log(sameFrequency(182, 281))         // true
console.log(sameFrequency(34, 14))           // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222))          // false
console.log(sameFrequency(11, 11))           // true
console.log(sameFrequency(1001, 1100))       // true