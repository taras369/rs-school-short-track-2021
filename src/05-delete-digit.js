/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n), Number);
  const lowest = Math.min.apply(null, arr);
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === lowest) {
      arr.splice(i, 1);
      break;
    }
  }
  return (Number(arr.join('')));
}

module.exports = deleteDigit;
// npm run test ./test/05-delete-digit-tests.js
