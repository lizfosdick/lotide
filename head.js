const assertEqual = function(actual, expected) {
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const head = function(array) {
  let firstElement = array.shift();
  return firstElement;

}
