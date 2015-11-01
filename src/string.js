(function() {
  'use strict';

  // Returns true if the string contains vowels
  String.prototype.hasVowels = function() {
    return /[aeiouAEIOU]/.test(this);
  };

  String.prototype.toUpper = function() {
    var _upper = '';
    for (let i = 0; i < this.length; i++) {
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(this[i])) {
        // Get the uppercase version of the letter (current - 32)
        // and append it to the output string
        _upper += String.fromCharCode(this.charCodeAt(i) - 32);
      } else {
        _upper += this[i];
      }
    }
    return _upper;
  };

  String.prototype.toLower = function() {
    var _lower = '';
    for (let i = 0; i < this.length; i++) {
      // Check if the character is an uppercase letter
      if (/[A-Z]/.test(this[i])) {
        // Get the lowercase version of the letter (current + 32)
        // and append it to the output string
        _lower += String.fromCharCode(this.charCodeAt(i) + 32);
      } else {
        _lower += this[i];
      }
    }
    return _lower;
  };

})();
