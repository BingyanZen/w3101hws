(function () {
  'use strict';

  var sentencify = function (words) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    var sentence = '';
    var len = words.length;
    var count = 0;
    if (len === 0) {
        return sentence;
    } else if (len === 1) {
        sentence = words[0];
        return sentence;
    } else {
        count = 1;
        sentence = words[0];
        while (count < len) {
            sentence = sentence + ' ' + words[count];
            count++;
        }
        return sentence;
    }
  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
