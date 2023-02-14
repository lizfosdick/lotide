const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });
  it("returns [6,7] for [5,6,7,8]", () => {
    assert.deepEqual(middle([5,6,7,8]), [6,7]);
  });
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
  it("returns [2, 'e'] for ['a', 2, 'e', 4]", () => {
    assert.deepEqual(middle(['a', 2, 'e', 4]), [2, 'e']);
  });
});

/*
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([2, 4, 6, 8, 10]), [6])
*/