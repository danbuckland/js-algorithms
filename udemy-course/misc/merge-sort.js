const testArray = [4, 2, 1, 3, 2, 1, 3, 5];

const mergeSort = (unsortedArray) => {
  // if the array is of length 0, discard it!
  if (unsortedArray.length === 0) {
    return unsortedArray
  } else if (unsortedArray.length === 1) {
    return unsortedArray
  } else {
    // else the array is of length > 2 so it should be split
    const leftArray = unsortedArray.slice(0, Math.ceil(unsortedArray.length / 2))
    const rightArray = unsortedArray.slice(Math.ceil(unsortedArray.length / 2))
    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
  }
}

const mergeArrays = (leftArray, rightArray) => {
  let sortedArray = [], leftIndex = 0, rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    // console.log(`left array ${leftIndex} vs right array ${rightIndex}`)
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex])
      leftIndex++
    } else {
      sortedArray.push(rightArray[rightIndex])
      rightIndex++
    }
  }
  return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}

console.log(testArray);
console.log(mergeSort(testArray));