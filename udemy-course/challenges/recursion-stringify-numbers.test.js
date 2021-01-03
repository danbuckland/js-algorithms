const stringifyNumbers = require('./recursion-stringify-numbers')

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

let result = {
  num: '1',
  test: [],
  data: {
      val: '4',
      info: {
          isRight: true,
          random: '66'
      }
  }
}

test("Returns numbers as strings", () => {
  expect(stringifyNumbers(obj)).toStrictEqual(result);
});