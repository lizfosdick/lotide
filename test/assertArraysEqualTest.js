const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual(["a", "b", "canada"], ["a", "b", "canada"]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false