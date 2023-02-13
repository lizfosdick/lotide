const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
const arrayLength = array.length;
const arrayDividedByTwo = arrayLength / 2;
let middleArray = []
  if ((arrayLength === 1) || (arrayLength === 2)){
    return middleArray;
  }
   if (arrayLength % 2 === 0) {
    middleArray.push(array[arrayDividedByTwo - 1])
    middleArray.push(array[arrayDividedByTwo])
  }
  if (arrayLength % 2 !== 0) {
    middleArray.push(array[Math.floor(arrayDividedByTwo)])
  }
  return middleArray;
}

module.exports = middle;
