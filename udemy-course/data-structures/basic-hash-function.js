const hash = (key, arrayLength) => {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total += value
  }
  return total % arrayLength
}

debugger