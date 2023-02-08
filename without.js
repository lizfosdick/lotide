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

const without = function(source, itemsToRemove) {
  let removingArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[i]) {
        if (removingArray.includes(source[i])) {
          removingArray;
        } else {
          removingArray.push(source[i]);
        }
      }
    }
  }
  return console.log(removingArray);
};


