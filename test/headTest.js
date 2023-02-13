const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["a", 2, "e", 4]), "a")