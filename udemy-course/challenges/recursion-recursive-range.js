// Write a function called recursiveRange which accepts a number and adds up all
// the numbers from 0 to the number passed to the function

// Assume only positive integers 

const recursiveRange = (n) => {
  if (n === 1) return 1
  return n + recursiveRange(n - 1)
}

// Test cases
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
console.log(recursiveRange(1)) // 1
console.log(recursiveRange(100)) // 5050