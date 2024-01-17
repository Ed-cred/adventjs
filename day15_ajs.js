function autonomousDrive(store, movements) {
  const blocker = "*";
  const robotMark = "!";
  let y = store.findIndex((row) => row.includes(robotMark));
  let x = store[y].indexOf(robotMark);
  for (let i = 0; i < movements.length; ++i) {
    switch (movements[i]) {
      case "R":
        if (x < store[y].length - 1 && store[y][x + 1] !== blocker) {
          store[y] = store[y].substring(0, x) + ".!" + store[y].substring(x+2)
          x += 1;
        }
        break;
      case "L":
        if (x > 0 && store[y][x - 1] !== blocker) {
          store[y] = store[y].substring(0, x - 1) + "!." + store[y].substring(x+1)
          x -= 1;
        }
        break;
      case "U":
        if (y > 0 && store[y - 1][x] !== blocker) {
          store[y] = store[y].replace(robotMark, ".")
          store[y-1] = store[y-1].substring(0, x) + "!" + store[y-1].substring(x + 1);
          y -= 1;
        }
        break;
      case "D":
        if (y < store.length - 1 && store[y + 1][x] !== blocker) {
          store[y] = store[y].replace(robotMark, ".")
          store[y+1] = store[y+1].substring(0, x) + "!" + store[y+1].substring(x + 1);
          y += 1;
        }
        break;
      default:
        break;
    }
  }
  return store;
}

const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/
console.log(autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"]));
/*
[
  "***",
  "..!",
  "***"
]
*/
