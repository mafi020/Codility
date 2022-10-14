// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(arr) {
  // write your code in JavaScript (Node.js 14)
  const max = Math.max(...arr);
  if (max <= 0) return 1;
  const hash = {};
  for (let numb of arr) hash[numb] = true;

  for (let i = 1; i <= max + 1; i++) {
    if (!(i in hash)) return i;
  }
}
