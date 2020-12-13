// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() – do not
// worry about negative bases and exponents.

// Using recursion
const power = (base, exp) => {
  // define the base case
  if (exp === 0) return 1
  // do the actual maths and decrement the function
  return base * power(base, exp - 1)
}

// Test cases
console.log(power(2, 0) === 1)
console.log(power(2, 2) === 4)
console.log(power(2, 4) === 16)
console.log(power(3, 8) === 6561)

// e.g. power(2, 4) === 16
//      2 * power(2, 3) === 2 * 8 === 16
//          2 * power(2, 2) === 2 * 4 === 8
//              2 * power(2, 1) === 2 * 2 === 4
//                  2 * power(2, 0) === 2 * 1 === 2