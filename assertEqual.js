const assertEqual = function(actual, expected) {
  if (actual === expected) return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected)
  if (actual !== expected) return console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected)
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello")
assertEqual(15, 60)