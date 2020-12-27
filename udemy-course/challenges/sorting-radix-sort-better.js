const { performance } = require('perf_hooks');

const radixSort = (array) => {
  // get maximum length of a single number in the array
  let maxDigits = mostDigits(array)

  // loop through the array maxDigits number of times
  for (let k = 0; k < maxDigits; k++) {
    let bucket = Array.from({length: 10}, () => [])
    // put all the numbers in the array into the correct buckets array arrays
    for (let i = 0; i < array.length; i++) {
      let digit = getDigit(array[i], k)
      bucket[digit].push(array[i])
    }

    // put all the numbers back into the array in bucket order
    array = [].concat(...bucket)
  }

  return array
}

const getDigit = (num, i) => {
  // assumes base 10
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (array) => {
  let most = 0
  for (num of array) {
    most = Math.max(digitCount(num), most)
  }
  return most
}

const randomInt = () => {
  return Math.floor(Math.random() * 100000)
}
console.log(randomInt())
console.log(radixSort([2, 34, 0, 740, 987, 91235, 309, 1, 3097, 2000, 8092, 7, 17, 12]))

let data = Array.apply(null, {length: 100000}).map(Function.call, randomInt)
const t1 = performance.now()
console.log(radixSort(data))
const t2 = performance.now()

console.log(`This calculation took ${(t2-t1)/1000} seconds`)