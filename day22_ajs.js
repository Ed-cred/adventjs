function compile(code) {
  let counter = 0;
  let lastReturnPoint;
  let isPrevious = false;
  for (let i = 0; i < code.length; ++i) {
    switch (code[i]) {
      case "+":
        counter += 1;
        break;
      case "*":
        counter *= 2;
        break;
      case "-":
        counter -= 1;
        break;
      case "%":
        lastReturnPoint = i;
        break;
      case "<":
        if (lastReturnPoint && !isPrevious) {
          isPrevious = true;
          i = lastReturnPoint;
          break;
        } 
        isPrevious = false;
        break;
      case "¿":
        if (counter <= 0) {
          i = code.indexOf("?", i);
        }
        break;
      default:
        break;
    }
  }
  return counter;
}
console.log(compile("++*-")); // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile("++%++<")); // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile("++<--")); // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile("++¿+?")); // 3
// 1 + 1 + 1 = 3

console.log(compile("--¿+++?")); // -2
// - 1 - 1 = -2
