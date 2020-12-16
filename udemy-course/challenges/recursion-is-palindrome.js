// Write a recursive function called isPalindrome which returns true if
// the string passed to it is a palindrome (reads the same way forwards
// as backward). Otherwise return false.

const isPalindrome = (string) => {
  // base case 
  // if string.length is 1 or 0 return true
  if (string.length < 2) return true
  // simple check if first and last characters are the same
  if (string[0] !== string[string.length - 1]) {
    return false
  }
  // if they are, cut off the first and last characters and pass into isPalindrome
  return isPalindrome(string.substring(1, string.length - 1))
}

// Test cases
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('seventy')) // false
console.log(isPalindrome('reddit')) // false
console.log(isPalindrome('redder')) // true
console.log(isPalindrome('abcdecba')) // false