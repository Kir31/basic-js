const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) { 
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const newArr = [...arr]  
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] === '--discard-next') {      
      newArr[newArr.indexOf(newArr[i]) + 1] && arr.indexOf(newArr[i]) + 1 === newArr.indexOf(newArr[i]) + 1 ? newArr.splice(arr.indexOf(newArr[i]), 2) : newArr.splice(newArr.indexOf(newArr[i]), 1)       
    }
    if (newArr[i] === '--discard-prev') {         
      newArr[newArr.indexOf(newArr[i]) - 1] && arr.indexOf(newArr[i]) - 1 === newArr.indexOf(newArr[i]) - 1 ? newArr.splice((arr.indexOf(newArr[i]) - 1), 2) : newArr.splice(newArr.indexOf(newArr[i]), 1)       
    } 
    if (newArr[i] === '--double-next') {
      newArr[newArr.indexOf(newArr[i]) + 1] && arr.indexOf(newArr[i]) + 1 === newArr.indexOf(newArr[i]) + 1 ?  newArr.splice(arr.indexOf(newArr[i]), 1, arr[arr.indexOf(newArr[i]) + 1]) : newArr.splice(newArr.indexOf(newArr[i]), 1)      
    } 
    if (newArr[i] === '--double-prev') {
      console.log(newArr.indexOf(newArr[i]))
      newArr[newArr.indexOf(newArr[i]) - 1] && arr.indexOf(newArr[i]) - 1 === newArr.indexOf(newArr[i]) - 1 ? newArr.splice(arr.indexOf(newArr[i]), 1, arr[arr.indexOf(newArr[i]) - 1]) : newArr.splice(newArr.indexOf(newArr[i]), 1)    
    }    
  }  
  return newArr
}

module.exports = {
  transform
};
