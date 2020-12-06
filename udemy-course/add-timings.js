const {performance} = require('perf_hooks');

// Add numbers 1 to n incrementing 1 each time
const addUpTo = (n) => {
  
  let total = 0
  for (i =1; i <= n; i++) {
    total += i
  }
  
  return total
}

const t1 = performance.now()
console.log(addUpTo(1000000000));
const t2 = performance.now()
console.log(`This calculation took ${(t2-t1)/1000} seconds`)