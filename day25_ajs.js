function travelDistance(map) {
  const roadmapArr = map.split("\n");
  const roadmap = roadmapArr.join("");// Get rid of the \n
  const cols = roadmapArr[0].length;
  const santaPos = roadmap.indexOf("S");

  let child = 1;
  let movements = 0;
  let santaCol = santaPos % cols;
  let santaRow = Math.floor(santaPos / cols);

  const numbers = roadmap.replace(/\.|S/g, "");

  for (const _number of numbers) {
    const childPos = roadmap.indexOf(`${gift}`);
    const childCol = childPos % cols;
    const childRow = Math.floor(childPos / cols);

    movements += Math.abs(santaRow - childRow) + Math.abs(santaCol - childCol);

    santaCol = childCol;
    santaRow = childRow;

    child++;
  }

  return movements;
}
const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result); // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/
const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2
