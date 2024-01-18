function drawClock(time) {
    const digitMappings = [
      ['***', '* *', '* *', '* *', '***'],  // 0
      [' * ', '** ', ' * ', ' * ', '***'],  // 1
      ['***', '  *', '***', '*  ', '***'],  // 2
      ['***', '  *', '***', '  *', '***'],  // 3
      ['* *', '* *', '***', '  *', '  *'],  // 4
      ['***', '*  ', '***', '  *', '***'],  // 5
      ['***', '*  ', '***', '* *', '***'],  // 6
      ['***', '  *', '  *', '  *', '  *'],  // 7
      ['***', '* *', '***', '* *', '***'],  // 8
      ['***', '* *', '***', '  *', '***'],  // 9
    ];
  
    const padAndSplitDigits = number => String(number).padStart(2, '0').split('').map(Number);
    // Construct the clock array directly
    const clock = Array.from({ length: 7 }, () => Array(17).fill(' '));
    const [hours, minutes] = time.split(':').map(Number);
  
    const placeDigits = (digits, startColumn) => {
      digits.forEach((digit, digitIndex) => {
        digitMappings[digit].forEach((row, rowIndex) => {
          clock[rowIndex][startColumn + digitIndex * 4] = row[0];
          clock[rowIndex][startColumn + digitIndex * 4 + 1] = row[1];
          clock[rowIndex][startColumn + digitIndex * 4 + 2] = row[2];
        });
      });
    };
  
    placeDigits(padAndSplitDigits(hours), 0);
  
    clock[1][8] = clock[3][8] = '*';
  
    placeDigits(padAndSplitDigits(minutes), 10);
  
    return clock;
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
