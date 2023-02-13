const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([2, 4, 6, 8, 10]), [6])