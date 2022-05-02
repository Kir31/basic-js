const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    if(Array.isArray(arr)) {
      arr.map(el => {
        let localDpth = this.calculateDepth(el)
        return localDpth > depth ? depth = localDpth : depth     
      })
      return depth +1      
    } else {
      return 0
    }
  }  
}

module.exports = {
  DepthCalculator
};
