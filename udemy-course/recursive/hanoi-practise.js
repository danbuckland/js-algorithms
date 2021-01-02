let printMove = (a, b) => {
  console.log(`Move ${a} --> ${b}`)
}

let hanoi = (discs, origin = 1, target = 3) => {
  // Base case - if there's only 1 disc, it's simple!
  if (discs === 1) return printMove(origin, target)

  // Spare needs to be calculated dynamically as origin and target change
  let spare = 6 - origin - target
  
  hanoi(discs - 1, origin, spare)
  printMove(origin, target)
  hanoi(discs - 1, spare, target)
}

hanoi(3)
// hanoi(2, 1, 2)
        // hanoi(1, 1, 3)
                // Move 1 --> 3
        // Move 1 --> 2
        // hanoi(1, 3, 2)
                // Move 3 --> 2
// Move 1 --> 3
// hanoi(2, 2, 3)
        // hanoi(1, 2, 1)
                // Move 2 --> 1
        // Move 2 --> 3
        // hanoi(1, 1, 3)
                // Move 1 --> 3