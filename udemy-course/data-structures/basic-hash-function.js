const hash = (key, arrayLength) => {
  let total = 0
  const WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(100, key.length); i++) {
    let value = key[i].charCodeAt(0) - 96
    total = total * WEIRD_PRIME + value
  }
  return total % arrayLength
}

debugger