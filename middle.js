const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) return console.log("✅✅✅Assertion Passed: arrays are equal");
  if (eqArrays(array1, array2) === false) return console.log("🛑🛑🛑 Assertion Failed: arrays are not equal");
};

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
