const bubbleSort = (array) => {
  let swapNeeded = true
  while (swapNeeded) {
    swapNeeded = false
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        const temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
        swapNeeded = true
      }
    }
    console.log(array.toString())
  }

  return array
}

console.log(bubbleSort([1, 31, 14, 2, 3, 56, 0, -1]))
//                     [1, 14, 2, 3, 31, 0, -1, 56]
//                     [1, 2, 3, 14, 0, -1, 31, 56]
//                     [1, 2, 3, 0, -1, 14, 31, 56]
//                     [1, 2, 0, -1, 3, 14, 31, 56]
//                     [1, 0, -1, 2, 3, 14, 31, 56]
//                     [0, -1, 1, 2, 3, 14, 31, 56]
//                     [-1, 0, 1, 2, 3, 14, 31, 56]
//                     [-1, 0, 1, 2, 3, 14, 31, 56]