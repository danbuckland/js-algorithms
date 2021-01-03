const capitaliseFirst = (array) => {
  // add whatever parameters you deem necessary - good luck!
  // base case must be reaching the end of the array
  if (typeof (array) === 'string') {
    return array[0].toUpperCase() + array.substr(1);
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = capitaliseFirst(array[i])
  }
  return array
}

console.log(capitaliseFirst(['taco', 'cat', 'lawnmower']))
console.log(capitaliseFirst(['taco']))
console.log(capitaliseFirst(['t']))
