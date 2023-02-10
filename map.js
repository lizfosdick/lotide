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



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results2 = map(words, word => word[0]);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); //pass

const words3 = ["petey", "roger", "gordie"];
const results3 = map(words3, word => word + "hello");
assertArraysEqual(results3, ["peteyhello", "rogerhello", "gordiehello"]); //pass

const words4 = [1, 2, 3, 4, 5];
const results4 = map(words4, item => item * 2);
assertArraysEqual(results4, [2, 4, 6, 8, 10]); //pass

const words5 = [1, 2, 3, 4, 5];
const results5 = map(words5, item => item - 1 );
assertArraysEqual(results5, [1, 2, 3, 4, 5]); //pass