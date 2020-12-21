fs = require('fs');

// in one line
let data = Array.apply(null, {length: 10000}).map(Function.call, Math.random)
fs.writeFile('randomArray.txt', data.toString(), function(err) {
  if (err) return console.log(err);
  console.log('done');
});