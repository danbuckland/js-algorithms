fs = require('fs');

const arrayOfUniqueValues = (n) => {
  let start = 10
  let array = []
  times(n)(() => { array.push(start++) })
  return array
}

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

fs.writeFile('testdata.txt', arrayOfUniqueValues(10000).toString(), function (err) {
  if (err) return console.log(err);
  console.log('done');
});