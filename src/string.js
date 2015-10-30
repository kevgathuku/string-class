(function() {
  'use strict';

  // Returns true if the string contains vowels
  String.prototype.hasVowels = function() {
    return /[aeiouAEIOU]/.test(this);
  };
})();
