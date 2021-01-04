// Write a recursive function called nestedEvenSum. Return the sum of all even 
// numbers in an object which may contain nested objects.
const nestedEvenSum = (object) => {
  let sum = 0
  // for each element in the object recursively call and add to sum
  for (const key in object) {
    if (typeof(object[key]) === 'object') {
      sum += nestedEvenSum(object[key])
    } else if (typeof(object[key]) === 'number' && object[key] % 2 === 0) {
      sum += object[key]
    }
  }
  
  return sum
}


// e.g:
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

console.log(nestedEvenSum(obj1))
            // nestedEvenSum(2, 0)

