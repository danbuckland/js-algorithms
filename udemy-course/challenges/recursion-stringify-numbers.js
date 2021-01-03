const stringifyNumbers = (obj) => {
    
  let newObj = {}
  
  if (typeof(obj) !== 'object' || Array.isArray(obj)) {
      if (typeof(obj) === 'number') {
          return obj.toString()
      } else {
          return obj
      }
  }
  
  for (const key in obj) {
      newObj[key] = stringifyNumbers(obj[key])
  }
  
  return newObj
}

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

module.exports = stringifyNumbers;