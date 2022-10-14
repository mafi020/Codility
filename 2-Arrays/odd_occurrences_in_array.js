// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(arr) {
  // write your code in JavaScript (Node.js 14)
  const hash = {};

  for (let numb of arr) hash[numb] = hash[numb] + 1 || 1;

  for (let key in hash) {
    if (hash[key] % 2 !== 0) return +key;
  }
}
