/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = 0;
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) {
        if (result[r][c + 1] !== undefined) {
          result[r][c + 1] += 1;
        }
        if (result[r][c - 1] !== undefined) {
          result[r][c - 1] += 1;
        }
        if (result[r + 1][c] !== undefined) {
          result[r + 1][c] += 1;
        }
        if (result[r + 1][c + 1] !== undefined) {
          result[r + 1][c + 1] += 1;
        }
        if (result[r + 1][c - 1] !== undefined) {
          result[r + 1][c - 1] += 1;
        }
        if (r > 0) {
          if (result[r - 1][c] !== undefined) {
            result[r - 1][c] += 1;
          }
          if (result[r - 1][c + 1] !== undefined) {
            result[r - 1][c + 1] += 1;
          }
          if (result[r - 1][c - 1] !== undefined) {
            result[r - 1][c - 1] += 1;
          }
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;
// npm run test ./test/04-mine-sweeper-tests.js
