// Write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the
// integers below it.
// e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// 0! is always 1.

const factorial = (n) => {
  // base case when n === 0
  if (n < 2) return 1
  if (n === 2) return 2

  return n * factorial(n - 1)
}

// Test cases
console.log(factorial(0) === 1)
console.log(factorial(1) === 1)
console.log(factorial(4) === 24)
console.log(factorial(7) === 5040)

// e.g.
// factorial(4) = 4 * factorial(3)
//                    3 * factorial(2)
//                        2
