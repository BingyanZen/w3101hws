(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
    var total = values.reduce(function(a, b) {
    return a + b;
    });
    return total;
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
