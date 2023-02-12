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


const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (let obj of object1Array) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
     eqArrays((object1[obj]), (object2[obj]))
    } else if (object1[obj] !== object2[obj]) {
      return false;
    } 
  }
  return true;
};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let equalResult = eqObjects(object1, object2);
  if (equalResult === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);


