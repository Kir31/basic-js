const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!')
  } else if (arguments.length > 0) {
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
      return 'winter'
    }
    if (date.getMonth() > 1 && date.getMonth() < 5) {
      return 'spring'
    }
    if (date.getMonth() > 4 && date.getMonth() < 8) {
      return 'summer'
    }
    if (date.getMonth() > 7 && date.getMonth() < 11) {          
      return 'autumn'
    }
  } else {
    return 'Unable to determine the time of year!'
  } 
}

module.exports = {
  getSeason
};
