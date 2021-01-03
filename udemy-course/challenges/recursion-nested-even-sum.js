// Write a recursive function called nestedEvenSum. Return the sum of all even 
// numbers in an object which may contain nested objects.
const nestedEvenSum = (object) => {
  // base case when reaching an inner object
  if (typeof(object) !== 'object') {
    if (typeof(object) === 'number' && object % 2 === 0) {
      return object
    }
    return 0
  }

  let sum = 0
  // for each element in the object recursively call and add to sum
  for (const key in object) {
    sum += nestedEvenSum(object[key])
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
