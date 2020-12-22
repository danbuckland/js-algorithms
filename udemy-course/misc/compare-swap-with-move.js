const {performance} = require('perf_hooks');

const moveItem = (array, from, to) => {
  let passenger = array.splice(from, 1) // Grab the item and remove it
  array.splice(to, 0, ...passenger) // put it back in the array
}

const swapItem = (array, from, to) => {
  let temp = array[from]
  array[from] = array[to]
  array[to] = temp
}

let swapArray = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
const t1 = performance.now()
for (let i = 0; i < swapArray.length - 1; i++) {
  swapItem(swapArray, i, i + 1)
}
const t2 = performance.now()
console.log(`Swap calculation took ${(t2-t1)/1000} seconds`)

let moveArray = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
const t3 = performance.now()
for (let i = 0; i < moveArray.length - 1; i++) {
  moveItem(moveArray, i, i + 1)
}
const t4 = performance.now()
console.log(`Move calculation took ${(t4-t3)/1000} seconds`)