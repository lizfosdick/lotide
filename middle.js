const eqArrays = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return false;
  }
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actualArray, expectedArray) {
  let equalResult = eqArrays(actualArray, expectedArray) 
    if (equalResult === true) {
      return console.log(`✅✅✅ Assertion Passed: ${(actualArray)} === ${(expectedArray)}`);
    }
  return console.log(`🛑🛑🛑 Assertion Failed: ${(actualArray)} !== ${(expectedArray)}`);
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
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])