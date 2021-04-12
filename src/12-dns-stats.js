/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const revDomains = [];
  for (let i = 0; i < domains.length; i++) {
    revDomains.push(domains[i].split('.').reverse());
  }
  for (let j = 0; j < revDomains.length; j++) {
    let d = '';
    for (let m = 0; m < revDomains[j].length; m++) {
      d = `${d}.${revDomains[j][m]}`;
      if (d in result) {
        result[d]++;
      } else {
        result[d] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
// npm run test ./test/12-dns-stats-tests.js
