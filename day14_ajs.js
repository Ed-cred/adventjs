function maxGifts(houses) {
  if (houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];
  let max = 0;
  let prev = 0;
  for (let i = 0; i < houses.length; ++i) {
    const tmp = Math.max(max, prev + houses[i]);
    prev = max;
    max = tmp;
  }
  return max;
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
console.log(maxGifts([1, 1, 1])); // 2 (1 + 1)
console.log(maxGifts([3, 4, 5])); // 8 (3 + 5)
