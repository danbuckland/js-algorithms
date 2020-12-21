const mergeSort = (array) => {
  // base case is when array length is 1 or 0
  if (array.length <= 1) return array

  // split the array and pass it to merge via sort
  let halfIndex = Math.ceil(array.length / 2)
  let leftArray = array.splice(0, halfIndex)

  return merge(mergeSort(leftArray), mergeSort(array))
}

const merge = (arr1, arr2) => {
  let i = 0, j = 0
  let resultArray = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resultArray.push(arr1[i])
      i++
    } else {
      resultArray.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    resultArray.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    resultArray.push(arr2[j])
    j++
  }

  return resultArray
}

// Test cases
console.log(merge([0, 2, 14, 20], [2, 3, 5, 8]))
console.log(mergeSort([4,3,2,1]))
console.log(mergeSort([10, 9, 9, 7, 4, 5, 2, 1, 7]))

let data = Array.apply(null, {length: 10000}).map(Function.call, Math.random)
console.log(mergeSort(data))