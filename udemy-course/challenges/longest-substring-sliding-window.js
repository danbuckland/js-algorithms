// Write a function called findLongestSubstring, which accepts a string and 
// returns the length of the longest substring with all distinct characters

// Assume no spaces or punctuation
// Assume string will always be lowercase

const findLongestSubstring = (string) => {
  if (!string) { return 0 }
  // create an object to store the character and position
  let charPositions = {}
  // add a left and right marker starting at 0 and 1
  let left = 0
  // store a count starting at 1
  let count = 1
  let maxLength = 1
  // store left value with position
  charPositions[string[left]] = 0

  for (let right = 1; right < string.length; right++) {
    // if right does not exist
    debugger
    if (!(string[right] in charPositions) || charPositions[string[right]] < left) {
      // increment count
      count++
      // add right to object as key with position
      charPositions[string[right]] = right
      maxLength = Math.max(maxLength, count)
    } else {
      // get the value stored for the key
      // move left to value + 1
      left = charPositions[string[right]] + 1
      // set the new count to the length of the current substring
      count = right - (left - 1);
      // set value to right
      charPositions[string[right]] = right
    }
  }
  return maxLength;
}

// Test cases
console.log(findLongestSubstring('no')) // 2
console.log(findLongestSubstring('moon')) // 2
console.log(findLongestSubstring('abracadabra')) // 4
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('aaaaaaaaa')) // 1
console.log(findLongestSubstring('findlongestsubstring')) // 8
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6



// 'findlongestsubstring'
//  --x---x