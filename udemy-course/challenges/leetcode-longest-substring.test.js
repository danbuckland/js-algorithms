const lengthOfLongestSubstring = require('./leetcode-longest-substring')

test('string of "bbbbbbb" should return 1', () => {
  expect(lengthOfLongestSubstring("bbbbbbb")).toBe(1)
})