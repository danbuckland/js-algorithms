// Implement a function called countUniqueValues which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers 
// in the array, but it will always be sorted.

// Assume the values are all integers
// Assume 0 is a unique value
// Assume the array can be mutated

const countUniqueValues = (array) => {
  if (array.length === 0) { return 0 }
  // create an empty object to contain frequency counts
  let frequencyCount = {}
  // create a counter of unique values
  let count = 0
  // create pointers 'i' and 'j' at 0 and array.length -1
  let left = 0, right = array.length - 1
  // loop through the array comparing values at pointer
  // while i <= j 
  while (left <= right) {
    if (array[left] === array[right]) {
      if (frequencyCount[array[left]]) {
        return count
      } else {
        return count + 1
      }
    } else {
      // increment counter or add new key for both
      if (!frequencyCount[array[left]]) {
        frequencyCount[array[left]] = 1
        count++
      }
      if (!frequencyCount[array[right]]) {
        frequencyCount[array[right]] = 1
        count++
      }
      left++
      right--
    }
  }
  return count
}

// Solving the same problem, but assuming array can be mutated
const countUniqueValuesDestructive = (array) => {
  if (array.length === 0) { return 0 }
  if (array.length === 1) { return 1 }
  let i = 0, j = 1
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++
    } else {
      i++
      array[i] = array[j]
      j++
    }
  }
  return i + 1
}

// Another alternative with same complexity and space
const countUniqueAlternative = (array) => {
  if (array.length === 0) { return 0 }
  let i = 0
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues([0, 0, 1])) // 2
console.log(countUniqueValues([0, 0])) // 1
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([-1, 1, 2])) // 3
console.log('\n')

console.log(countUniqueValuesDestructive([0, 0, 1])) // 2
console.log(countUniqueValuesDestructive([0, 0])) // 1
console.log(countUniqueValuesDestructive([])) // 0
console.log(countUniqueValuesDestructive([1, 1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValuesDestructive([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValuesDestructive([-1, 1, 2])) // 3
console.log('\n')

console.log(countUniqueAlternative([0, 0, 1])) // 2
console.log(countUniqueAlternative([0, 0])) // 1
console.log(countUniqueAlternative([])) // 0
console.log(countUniqueAlternative([1, 1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueAlternative([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueAlternative([-1, 1, 2])) // 3
