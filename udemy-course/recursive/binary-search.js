// Take a sorted array of ints and search for a number
// e.g. take [1, 1, 2, 4, 5, 8, 11, 12, 14, 15] and find 12
// This should be solvable recursively, halving the array each time
// Return the position of the item or -1 if not found

let array = [-2003, -3, 0, 1, 2, 4, 5, 8, 10, 11, 12, 14, 150, 2004]

const binarySearch = (array, target, low, high) => {
  low !== undefined ? low : low = 0
  high !== undefined ? high : high = array.length - 1
  if (low > high) { return `${target} does not exist in array` }
  guess = Math.ceil((low + high)/2);
  if (array[guess] === target ) {
    return `${target} is in position ${guess}`;
  } else if (array[guess] > target) {
    return binarySearch(array, target, low, guess - 1)
  } else {
    return binarySearch(array, target, guess + 1, high)
  }
}

console.log(binarySearch(array, 2004));
console.log(binarySearch(array, -2003));
console.log(binarySearch(array, -2));
console.log(binarySearch(array, 10));

