var lengthOfLongestSubstring = function (s) {
  // Assume this is a private function and s will always be a string
  // Assume no spaces, numbers or special characters
  // first return early if string is 1 or 0 length
  if (s.length < 2) return s.length
  // this is a sliding window problem so initialise two pointers
  // create an object to track the positions of the characters
  const charPos = {}
  let left = 0, max = 1, count = 1
  charPos[s[left]] = left
  for (let right = 1; right < s.length && max <= s.length - left; right++) {
    // if the character is not in the object 
    if (!(s[right] in charPos) || charPos[s[right]] < left) {
      count++
      max = Math.max(count, max)
    } else {
      // left moves to 1 after the last time it was seen
      left = charPos[s[right]] + 1
      count = right - (left - 1)
    }
    charPos[s[right]] = right
  }
  return max
};

module.exports = lengthOfLongestSubstring

// debugger
// console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// console.log(lengthOfLongestSubstring('bbbbbbb')) // 1
// console.log(lengthOfLongestSubstring('typewriter')) // 7
// console.log(lengthOfLongestSubstring('abcdefgghijkl')) // 7