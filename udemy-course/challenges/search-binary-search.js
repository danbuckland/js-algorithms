const binarySearch = (sortedArray, target) => {
  let left = 0
  let right = sortedArray.length - 1

  while (right >= left) {
    let middle = Math.ceil((left + right) / 2)
    debugger
    if (sortedArray[middle] === target) return middle

    if (sortedArray[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}

// Test cases 
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))
                                                                                    //  lr   