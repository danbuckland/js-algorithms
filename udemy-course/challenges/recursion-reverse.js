// Write a function called reverse which accepts a string and returns
// a new string in reverse

const reverse = (string) => {
 // base case
 // if you reach the start of the string, return it
 if (string.length <= 1) return string

 return string[string.length - 1] + reverse(string.substring(0, string.length - 1))
}

// Test cases
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'