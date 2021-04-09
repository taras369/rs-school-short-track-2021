/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const negativeI = [];
  arr.forEach((element, index) => {
    if (element === -1) {
      negativeI.push(index);
    }
  });
  const positiveN = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  negativeI.forEach((element) => {
    positiveN.splice(element, 0, -1);
  });
  return positiveN;
}

module.exports = sortByHeight;
// npm run test ./test/03-sort-by-height-tests.js
