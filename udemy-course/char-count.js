// Count the number of letters and numbers in a string and return as an object

// Questions: 
// How should this handle accented characters? NO/ignore them
// What about emojis? NO/ignore them
// what about other alphabets like arabic, greek etc.? NO/ignore them

const charCount = (string) => {
  // create chars object {}
  let charsObject = {}
  // if the string is empty or not a string, return {}
  if (!string || typeof (string) !== 'string') { return charsObject }
  // loop through the chars in the string array
  string = string.toLowerCase();
  for(let char of string ) {
    // if char is a letter or number
    if ((/['0-z']/).test(char)) {
      // if char key exists in object, increment count
      if (charsObject[char]) {
        charsObject[char] += 1
      } else { // else add char as new key with value 1
        charsObject[char] = 1
      }
    }
  }
  // return chars object
  return charsObject
}

console.log(charCount("Hello world!")) // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(charCount("array")) // {a: 2, r: 2, y: 1}
console.log(charCount("My PIN is 432100")) // {m: 1, y: 1 p: 1 i: 2, n: 1, s: 1, 4: 1, 3: 1, 2: 1, 0: 2 }
console.log(charCount("")) // {}
console.log(charCount(43)) // {}
console.log(charCount(["a", "b", "c"])) // {}

// As numbers can't be used as keys, they are automatically coerced into strings.
// Forunately this approach still works as the same is true for both setting and getting!