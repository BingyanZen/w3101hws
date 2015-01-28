(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    // IMPLEMENT YOUR FUNCTION HERE
    // MAKE SURE TO USE ARRAY'S MAP METHOD!
    var doubles = arrayToDouble.map(function(value)	{
		return value*2;
	});
	return doubles;
};

  module.exports = doubleArray;
})();
