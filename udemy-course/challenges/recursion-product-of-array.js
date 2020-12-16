// Write a function called productOfArray which takes an array of numbers
// and returns the product of them all

const productOfArray = (array) => {
  // Base case when array length === 1
  if (array.length === 1) {
    return array[0]
  }

  // return the last item on the array * product
  return array.pop() * productOfArray(array)
}

// Test cases

console.log(productOfArray([1,2,3]) === 6)
console.log(productOfArray([1,2,3,10]) === 60) // 60