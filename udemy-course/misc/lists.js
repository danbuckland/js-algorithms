l1 = [2,4,3];
l2 = [5,6,4];

let expected = 708;
// reverse the array
l1.reverse();
l2.reverse();
// convert the array to single number
let l1string = l1.join('');
let l2string = l2.join('');
// add both together
let sum = parseInt(l1string) + parseInt(l2string);
// take each digit and put it into an array 
let sumArray = sum.toString().split('')
// reverse the array again
sumArray.reverse();
// return list
console.log(sumArray);