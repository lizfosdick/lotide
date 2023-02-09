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


const letterPositions = function(sentence) {
  const results = {};
  sentenceArray = Array.from(sentence);
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== " ") {
      if (results[sentenceArray[i]]) {
        results[sentenceArray[i]].push(i);
      } else {
        results[sentenceArray[i]] = [i];
      }
    }
  }
  return results;
};


assertArraysEqual(letterPositions("lighthouse").h, [3, 5])

