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

