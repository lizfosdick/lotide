const assertEqual = function(actual, expected) {
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const sentenceNoSpaces = sentence.replaceAll(' ', '');
  const countObject = {}
  for (const letters of sentenceNoSpaces) {
    if(countObject[letters]) {
      countObject[letters] += 1;
    } else {
      countObject[letters] = 1;
      }
    } 
    return countObject;
}

const result1 = countLetters("lighthouse in the house");
console.log(result1);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["z"], undefined);