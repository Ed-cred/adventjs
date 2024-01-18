function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = intervals.reduce((acc, interval) => {
    console.log("acc and interval", acc, interval);
    const lastInterval = acc[acc.length - 1];

    if (lastInterval && lastInterval[1] >= interval[0]) {
        lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    } else {
        acc.push(interval);
    }
    return acc
  }, []);
  return mergedIntervals;
}
console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
); // [[2, 8]]
console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [[1, 6], [8, 10]]

console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
); // [[1, 2], [3, 4], [5, 6]]

console.log(
  optimizeIntervals([
    [1, 15],
    [8, 12],
    [4, 7],
  ])
);
