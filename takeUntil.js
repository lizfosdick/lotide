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


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }    
  return results;
}


const words = ["g", "r", "o", "u", "n", "d"];
const results2 = takeUntil(words, word => word === "n");
assertArraysEqual(results2, ['g', 'r', 'o', 'u']); //pass

const words5 = [1, 2, 3, 4, 5];
const results5 = takeUntil(words5, item => item > 4 );
assertArraysEqual(results5, [1, 2, 3, 4]); //pass

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/