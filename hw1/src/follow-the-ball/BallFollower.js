(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    this.start = start;
    var position = start;
    var count;
    var len = swaps.length;

    this.swap = function() {
        count = 0;
        while (count < len) {
            if (position === swaps[count][0]) {
                position = swaps[count][1];
            } else if (position === swaps[count][1]) {
                position = swpas[count][0];
            }
            count = count+1;
        }
        return position;
    }
    return this.start;
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
