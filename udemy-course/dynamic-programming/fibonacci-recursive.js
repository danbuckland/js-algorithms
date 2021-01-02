// Standard recursive implementation – O(2^n)
const fibrec = (n) => {
  if (n <= 2) return 1
  return fibrec(n - 1) + fibrec(n - 2)
}

// Iterative implementation - O(n)
const fibit = (n) => {
  // if n is 5 it would be:
  if (n <= 2) return 1
  let previous = 1
  let current = 2
  let temp
  for (let i = 3; i < n; i++) {
    temp = current
    current = current + previous
    previous = temp
  }
  return current
}

// Dynamic Programming recursive solution with memoization - O(n)
// Space complexity is not good - leading to a stack overflow eventually 
const fibmem = (n, memo = [0, 1, 1]) => {
  return memo[n] = memo[n] || fibmem(n - 1, memo) + fibmem(n - 2, memo)
}

// Dynamic programming iterative solution with tabulation - O(n)
// Space complexity is not an issue even with the largest numbers
const fibtab = (n) => {
  if (n <= 2) return 1
  const fibs = [0,1,1]
  for (let i = 3; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
  }
  return fibs[n]
}

// Test cases 
console.log(fibmem(1)) // 1
console.log(fibmem(2)) // 1
console.log(fibmem(45)) // 3
console.log(fibtab(45))

// console.log(fib(5))    // 5
// console.log(fibit(5))  // 5
// console.log(fib(6))    // 8
// console.log(fibit(6))  // 8
// console.log(fib(27))   // 196418
// console.log(fibit(27)) // 196418
// // console.log(fib(45))   // 1134903170 <-- This is insanely slow!
// console.log(fibit(45)) // 1134903170 <-- This is not!