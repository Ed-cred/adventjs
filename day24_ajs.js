function getStaircasePaths(step, maxJump) {
  const result = [];

  function generateJumps(sequence, remainingSteps) {
    if (remainingSteps === 0) {
      result.push([...sequence]); // Found a valid sequence
      return;
    }
    for (let jump = 1; jump <= Math.min(maxJump, remainingSteps); jump++) {
      sequence.push(jump); // Try jumping
      generateJumps(sequence, remainingSteps - jump);
      sequence.pop(); // Backtrack for the next iteration
    }
  }

  generateJumps([], step);
  return result;
}
console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
