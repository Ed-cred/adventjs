function findBalancedSegment(message) {
  if (!message.includes(0) || !message.includes(1)) {
    return [];
  }
  let max = 0;
  let balancedSegment = [];
  for (let i = 0; i < message.length - 1; ++i) {
    let countOne = 0;
    let countZero = 0;
    for (let j = i; j < message.length; ++j) {
      message[j] === 0 ? countZero++ : countOne++;
      if (countOne === countZero && max < countZero) {
        balancedSegment = [i, j];
        max = countZero;
      }
    }
  }
  return balancedSegment;
}
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                                     |________|
// position of segment:    [2, 5]
// longest balanced
// of 0s and 1s

console.log(findBalancedSegment([1, 1, 0]));
//                                  |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]));
// no balanced segments: []
