// Implement a function, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Assume the arguments are either strings or integers
// Assume the arguments can be mixed e.g. 'a', 1, 'dog'

// As a frequency counter with O(n) complexity
const areThereDuplicates = (...args) => {
  // return if there is only one argument or no arguments
  if (args.length < 2) { return false }
  let argumentCount = {}
  // loop through all args adding each to a frequency counter
  for (const arg of args) {
    if (argumentCount[arg] === 1) {
      return true
    } else {
      argumentCount[arg] = ++argumentCount[arg] || 1
    }
  }
  return false
}

// Test cases
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicates('cat', 'dog', 'camel', 'cat')) // true
console.log(areThereDuplicates('a', 1, 'dog', 1, 'b', 5, 100)) //true
console.log(areThereDuplicates(5)) // false
console.log(areThereDuplicates()) // false