const stringifyNumbers = (obj) => {
  let newObj = {}

  for (const key in obj) {
    if (typeof (obj[key]) === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof (obj[key]) === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
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