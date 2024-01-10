function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;
  let index = 0;
  let validCopy = true;
  const symbolSequence = "#+:. ";
  for (const letter of original) {
    const copyLetter = copy[index++];
    const symbolIdx = symbolSequence.indexOf(letter);
    const symbols = symbolIdx !== -1 
    ? symbolSequence.slice(symbolIdx, symbolSequence.length) : symbolSequence;
    const validLetter = `${letter}${letter.toLowerCase()}${symbols}`.includes(copyLetter);
    const isLetterBlank = letter === " ";
    const isCopyLetterBlank = copyLetter === " ";
    const validChar = isLetterBlank ? isCopyLetterBlank : validLetter;
    validCopy = validCopy ? validChar : validCopy;
  }
  return validCopy;
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#")); // true
console.log(checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#")); // false (due to the initial p)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'));
