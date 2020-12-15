// Write a function called fib which accepts a number and returns the nth number
// in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence
// of whole numbers 1, 1, 2, 3, 5, 8 ... which starts with 1 and 1, and where every
// number thereafter is equal to the sum of the previous two numbers.

const fib = (n) => {
 if (n <= 2) { return 1 }

 return fib(n - 1) + fib(n - 2)
}

// Test cases
console.log(fib(3)) // 2
// 1 + 1 + 2
console.log(fib(4)) // 3
// fib(3) + fib(2)
// fib(2) + fib(1) + 1
    // 1  +     1  + 1
console.log(fib(5)) // 5
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465