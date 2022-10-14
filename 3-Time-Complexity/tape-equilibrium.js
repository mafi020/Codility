// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(arr) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  //   console.log('sum ===>', sum);
  let min = Number.MAX_SAFE_INTEGER,
    total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    total += arr[i];
    // console.log('TOTAL ===>', total);
    const newTotal = sum - total;
    // console.log('newTotal ==>', newTotal);
    const diff = Math.abs(total - newTotal);
    // console.log('diff ==>', diff);

    min = Math.min(min, diff);
  }
  return min;
}
