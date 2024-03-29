function drawClock(time) {
  const digitMapping = {
    0: ["***", "* *", "* *", "* *", "* *", "* *", "***"],
    1: ["  *", "  *", "  *", "  *", "  *", "  *", "  *"],
    2: ["***", "  *", "  *", "***", "*  ", "*  ", "***"],
    3: ["***", "  *", "  *", "***", "  *", "  *", "***"],
    4: ["* *", "* *", "* *", "***", "  *", "  *", "  *"],
    5: ["***", "*  ", "*  ", "***", "  *", "  *", "***"],
    6: ["***", "*  ", "*  ", "***", "* *", "* *", "***"],
    7: ["***", "  *", "  *", "  *", "  *", "  *", "  *"],
    8: ["***", "* *", "* *", "***", "* *", "* *", "***"],
    9: ["***", "* *", "* *", "***", "  *", "  *", "***"],
    ":": [" ", " ", "*", " ", "*", " ", " "],
  };
  const res = [];
  digitMapping[time[0]].forEach((row, pos) => {
    const combinedString =
      row +
      " " +
      digitMapping[time[1]][pos] +
      " " +
      digitMapping[":"][pos] +
      " " +
      digitMapping[time[3]][pos] +
      " " +
      digitMapping[time[4]][pos];

    res.push([...combinedString]);
  });
  return res;
}
console.log(drawClock("01:30")); // ️
/*
[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
*/
