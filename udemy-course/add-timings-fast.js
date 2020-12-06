const {performance} = require('perf_hooks');

// Add numbers 1 to n incrementing 1 each time
const addUpTo = (n) => {
  return (n * (n+1))/2;
}

const t1 = performance.now()
console.log(addUpTo(1000000000));
const t2 = performance.now()
console.log(`This calculation took ${(t2-t1)/1000} seconds`)