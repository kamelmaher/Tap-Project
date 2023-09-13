/** @format */

let isFinish = false;
function Solution(x, target) {
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] + x[j] == target) {
        console.log([i, j]);
        isFinish = true;
        break;
      }
    }
    if (isFinish) break;
  }
}
Solution([2, 4, 3, 4], 7);
