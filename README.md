# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lizf/lotide`

**Require it:**

`const _ = require('@lizf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checks that the actual array resulting from a function is equal to the expected array
* `assertEqual`: checks that the actual primitive resulting from a function is equal to the expected primitive
* `assertObjectsEqual`: checks that the actual object resulting from a function is equal to the expected object
* `countLetters`: counts the number of times a letter shows up in a given string
* `countOnly`: counts the number of times an item shows up in an array
* `eqArrays`: checks that two arrays are equal
* `eqObjects`: checks that two objects are equal
* `findKey`: finds a key in an object that matches specified criteria
* `findKeyByValue`: finds a key in an object that matches a specified value
* `head`: returns the first element in an array
* `letterPositions`: returns the inidices of a specified letter in a string
* `map`: performs a callback function on each item in an array
* `middle`: returns the single middle value of an array with an odd number of elements, or the two middle values of an array with an even number of elements
* `tail`: returns an array minus the first element
* `takeUntil`: performs a callback function on each element of an array until a certain condition is met
* `without`: removes specified elements from an array and returns the array with the remaining elements