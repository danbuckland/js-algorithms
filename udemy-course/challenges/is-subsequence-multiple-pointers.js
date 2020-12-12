// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters 
// in the second string. In other words, the function should check whether the 
// characters in the first string appear somewhere in the seconds string, without
// their order changing.

// Assume empty strings are not counted
// Assume all characters including spaces and punctuation are allowed
// Assume string 1 is always the search string
// Assume strings are always lowercase
// The letters do not have to be consecutive/uninterrupted but they should appear in order

const isSubsequence = (string1, string2) => {
  // short circuit if the strings are indentical length, they should be identical
  if (string1.length === string2.length) { return string1 === string2 }
  // return false if string 1 length > string 2 length or string 1 is empty
  if (string1.length > string2.length || string1.length === 0) { return false }

  // loop through string2 looking for string1[0], string1[1]
  // each time a letter is found start the search for the next letter from that index
  // if reaching the end of string 2 return false
  // if reaching the end of string 1 return true
  let j = 0
  for (let i = 0; i < string1.length; i++) {
    for (j; j < string2.length; j++) {
      if (string2[j] === string1[i]) {
        j++
        break 
      } else if (j === string2.length - 1) {
        return false
      }
    }
  }
  return true
}

// Test cases
console.log(isSubsequence('hello', 'hello world!')) // true
console.log(isSubsequence('lol!', 'hello world!')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('same', 'same')) // true
console.log(isSubsequence('same', 'nope')) // false
console.log(isSubsequence('abc', 'acbd')) // false
console.log(isSubsequence('', 'hello world!')) // false 
console.log(isSubsequence('hello world!', 'hello')) // false