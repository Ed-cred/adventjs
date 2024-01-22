function revealSabotage(store) {
  for (let i = 0; i < store.length; ++i) {
    for (let j = 0; j < store[0].length; ++j) {
      const element = store[i][j];
      //turn the booleans into numbers for computing the count
      const x = +(store[i - 1]?.[j - 1] === "*") + +(store[i - 1]?.[j] === "*");
      const y = +(store[i - 1]?.[j + 1] === "*") + +(store[i]?.[j - 1] === "*");
      const z = +(store[i]?.[j + 1] === "*") + +(store[i + 1]?.[j - 1] === "*");
      const k = +(store[i + 1]?.[j] === "*") + +(store[i + 1]?.[j + 1] === "*");

      const sum = `${x + y + z + k}`;
      const shouldUpdate = x + y + z + k > 0 && element === " ";
      store[i][j] = shouldUpdate ? sum : element;
    }
  }
  return store;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
