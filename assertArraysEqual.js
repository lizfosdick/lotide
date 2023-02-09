const eqArrays = function(actualArray, expectedArray) {
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

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false