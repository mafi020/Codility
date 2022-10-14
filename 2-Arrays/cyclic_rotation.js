// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(arr, k) {
  // write your code in JavaScript (Node.js 14)
  const length = arr.length;

  const remainder = k % length;

  if (remainder === 0) return arr;

  const index = Math.abs(length - remainder);

  return [...arr.slice(index), ...arr.slice(0, index)];
}
