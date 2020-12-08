const printMove = (start, end) => {
  return console.log(`Move ${start} --> ${end}`);
}

const hanoi = (n, start = 1, end = 3) => {
  if (n === 1) {
    printMove(start, end);
  } else {
    let other = 6 - start - end;
    hanoi(n - 1, start, other)
    printMove(start, end)
    hanoi(n - 1, other, end)
  }
}

hanoi(6);