function solution(N) {
  // write your code in JavaScript (Node.js 14)
  let [i, max] = [0, Number.MIN_SAFE_INTEGER];

  const str = N.toString(2);

  while (i < str.length) {
    if (str[i] === '1') {
      i++;
      let count = 0;
      while (str[i] !== '1' && i < str.length) {
        count++;
        i++;
      }
      if (str[i] === '1') {
        max = Math.max(max, count);
      }
    } else {
      i++;
    }
  }

  return max === Number.MIN_SAFE_INTEGER ? 0 : max;
}
