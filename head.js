const assertEqual = require('./assertEqual');


const head = function(array) {
  let firstElement = array.shift();
  return firstElement;
}

module.exports = head;

