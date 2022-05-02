const { NotImplementedError } = require('../extensions/index.js');

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
  let obj = {} 

 domains.map(str => {
  let key = ''
  return str.split('.').reverse().map(el => {
    key += `.${el}`
   return !obj[key] ? obj[key] = 1 : obj[key]++
  })
})
return obj
}

module.exports = {
  getDNSStats
};
