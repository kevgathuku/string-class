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

  String.prototype.ucFirst = function() {
    // Return a new string formed by replacing the
    // first element of the string with its uppercase version
    return this.replace(/^[a-z]/, this[0].toUpper());
  };

  String.prototype.isQuestion = function() {
    // Return true if the string ends in a question mark
    return /\?$/.test(this);
  };

  String.prototype.words = function() {
    // Remove all punctuation first, except apostrophes
    // Apostrophes are considered to be part of the word
    // Then return the string split based on whitespace
    return this.replace(/[.,-\/#!$%?!\^&\*;:{}=\-_`~()]/g, '').split(/\s/);
  };

  String.prototype.wordCount = function() {
    // Return the length of the array returned
    // When .words() is called
    return this.words().length;
  };

  String.prototype.fromCurrency = function() {
    // Remove all commas in the string
    return parseFloat(this.replace(/\,/g, ''));
  };

})();
