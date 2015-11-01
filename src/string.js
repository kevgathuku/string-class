(function() {
  'use strict';

  // Returns true if the string contains vowels
  String.prototype.hasVowels = function() {
    return /[aeiouAEIOU]/.test(this);
  };

  String.prototype.toUpper = function() {
    var _final = '';
    for (let i = 0; i < this.length; i++) {
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(this[i])) {
        // Get the uppercase version of the letter (current  - 32)
        // and append it to the output string
        _final += String.fromCharCode(this.charCodeAt(i) - 32);
      } else {
        _final += this[i];
      }
    }
    return _final;
  };

})();
