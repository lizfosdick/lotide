const assertEqual = function(actual, expected) {
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const findKey = function(object, callback) {
  //scan object
  //return first key for which callback returns truthy value
  for (let element in object) {
    if (callback(object[element])) {
      return element;
    }
  }
}


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),
 "noma") // => "noma"

assertEqual(findKey(
  {
    "hello":    { letters: 5 },
    "goodbye":  { letters: 7 },
    "hi":       { letters: 2}
  }, x => x.letters % 2 === 0),
"hi"
)

assertEqual(findKey(
  {
    1: { vultures: "excellent" },
    2: { vultures: "ugly" },
    3: { vultures: "scary "},
    4: { vultures: "birdlike" }
  }, birds => birds.vultures === "birdlike"),
  "4"
)