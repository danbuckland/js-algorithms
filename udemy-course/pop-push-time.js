const { create } = require('domain');
const {performance} = require('perf_hooks');

// Show that array.push() is O(1)
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

let t1;
const pushToArray = (n) => {
  t1 = performance.now();
  let array = []
  times(n)(() => { array.push(1) } );
  
  return array
}

// Show that array.pop() is 0(1)
const popFromArray = (array) => {
  t1 = performance.now();

  for (let i = array.length; i > 1; i--) {
    array.pop();
  }
  return array;
}

let testArray = pushToArray(10000);
console.log(`Time taken to push: ${performance.now() - t1}`);

console.log(popFromArray(testArray));
console.log(`Time taken to pop: ${performance.now() - t1}`);


