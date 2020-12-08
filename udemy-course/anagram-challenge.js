// Given two strings, write a function to determine if the second string is an 
// anagram of the first. An anagram is a word, phrase, or name formed by 
// rearranging the letters of another such as 'cinema' and 'iceman'. 

// Assume that the inputs are always single words, no punctuation, always lowercase 

const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) { return false }
  // create an empty object to contain the frequency of the letters
  let letterFrequency = {}
  // loop over each char in the first string and record the frequency
  for (const char of string1) {
    letterFrequency[char] = ++letterFrequency[char] || 1
  }
  // loop over each char in the second string and decrement to 0
  for (const char of string2) {
    if (letterFrequency[char] > 0) {
      letterFrequency[char]--
    } else {
      return false
    }
  }
  return true
}

// Test with various cases
console.log(isAnagram('catnip', 'pitcan'))  // true
console.log(isAnagram('cat', 'rat'))        // false
console.log(isAnagram('iceman', 'cinema'))  // true
console.log(isAnagram('iceman', 'mince'))   // false
console.log(isAnagram('', ''))              // true
console.log(isAnagram('mississippi', 'simpisspisi')) // true
console.log(isAnagram('lol', 'olo'))                 // false
console.log(isAnagram('haha', 'ha'))                 // false
