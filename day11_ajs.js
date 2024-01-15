function getIndexsForPalindrome(word) {
  const isPalindrome = (s) => s === s.split("").reverse().join("");
  if (isPalindrome(word)) return [];
  for (let i = 0; i < word.length; ++i) {
    for (let j = i + 1; j < word.length; ++j) {
        const swapWord = word.substring(0, i)
        + word[j] + word.substring(i + 1, j) +
        word[i] + word.substring(j + 1);
        if (isPalindrome(swapWord)) {
            return [i, j]
        }
    }
  }
  return null;
}

console.log(getIndexsForPalindrome('rotaratov')); // [4, 8]
console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("abab"));
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
