const assertEqual = function(actual, expected) {
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(objKeys, value) {
  let keyArray = (Object.keys(objKeys));
  for (let key of keyArray) {
    if (objKeys[key] === value ) {
      return key;
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");