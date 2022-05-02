const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = []
    for (let i = 0; i < str.length; i++) {
        if(arr.length === 0) {
            arr.push([0, str[i]])
        }
        if(arr[arr.length - 1][1] !== str[i]) {
            arr.push([1, str[i]])
        } else {
            arr[arr.length - 1][0]++
        }        
    }
    return arr.join('').replace(/,/gi, '').replace(/1/gi, '')
}

module.exports = {
  encodeLine
};
