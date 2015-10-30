require('../src/string.js');

describe('String Class Extension Tests:', function() {
  'use strict';

  describe('hasVowels method ', function() {

    it('should be a prototype of the string object', function() {
      expect(String.prototype.hasVowels).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.hasVowels).toBe('function');
    });

    it('should return a Boolean value', function() {
      expect(typeof 'sample'.hasVowels()).toBe('boolean');
    });

    it('should return true for strings with vowels', function() {
      expect('Liverpool is awesome'.hasVowels()).toBe(true);
      expect('The best team '.hasVowels()).toBe(true);
      expect('You\'ll Never Walk Alone'.hasVowels()).toBe(true);
      expect('CHAMPIONS OF EUROPE'.hasVowels()).toBe(true);
    });

    it('should return false for strings without vowels', function() {
      expect('crwth'.hasVowels()).toBe(false);
      expect('crwth hym lylp'.hasVowels()).toBe(false);
    });

    it('should handle case sensitvity', function() {
      expect('ThE fOOd rOcks'.hasVowels()).toBe(true);
      expect('STEVEN GERRARD'.hasVowels()).toBe(true);
      expect('RSVP'.hasVowels()).toBe(false);
    });
  });

  describe('toUpper method ', function() {

    it('should be a prototype of the string object', function() {
      expect(String.prototype.toUpper).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.toUpper).toBe('function');
    });

    it('should have a string data type return value', function() {
      expect(typeof 'Liverpool'.toUpper() === 'string').toBe(true);
    });

    it('should return a correctly capitalized value', function() {
      expect('PREMIER LEAGUE'.toUpper()).toBe('PREMIER LEAGUE');
      expect('premier league'.toUpper()).toBe('PREMIER LEAGUE');
      expect('Premier League'.toUpper()).toBe('PREMIER LEAGUE');
    });

    it('should correctly handle punctuation', function() {
      expect('The world IS, rouND'.toUpper()).toBe('THE WORLD IS, ROUND');
      expect('leife\'jef~`!@#$%^&*()_-=+|}{:;\'"<>/?'.toUpper())
        .toBe('LEIFE\'JEF~`!@#$%^&*()_-=+|}{:;\'"<>/?');
    });
  });

  describe('toLower method ', function() {

    it('should be a prototype of the string object', function() {
      expect(String.prototype.toLower).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.toLower).toBe('function');
    });

    it('should have a string data type return value', function() {
      expect(typeof 'Liverpool'.toLower() === 'string').toBe(true);
    });

    it('should return a correctly capitalized value', function() {
      expect('PREMIER LEAGUE'.toLower()).toBe('premier league');
      expect('premier league'.toLower()).toBe('premier league');
      expect('Premier League'.toLower()).toBe('premier league');
    });

    it('should correctly handle punctuation', function() {
      expect('The world IS, rouND'.toLower()).toBe('the world is, round');
      expect('LEIFE\'JEF~`!@#$%^&*()_-=+|}{:;\'"<>/?'.toLower())
        .toBe('leife\'jef~`!@#$%^&*()_-=+|}{:;\'"<>/?');
    });
  });

  describe('ucFirst method ', function() {
    it('should be a prototype of the string object', function() {
      expect(String.prototype.ucFirst).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.ucFirst).toBe('function');
    });

    it('should return a value with string datatype', function() {
      expect(typeof 'world'.ucFirst()).toBe('string');
    });

    it('should return the String but with the first character uppercased', function() {
      // should return the string, but with the 1st character uppercased
      expect('liverpool'.ucFirst()).toBe('Liverpool');
      expect('Liverpool'.ucFirst()).toBe('Liverpool');
      expect('aRSENAL'.ucFirst()).toBe('ARSENAL');
      expect('europA LeAguE'.ucFirst()).toBe('EuropA LeAguE');
      expect('$ 10,000 Million'.ucFirst()).toBe('$ 10,000 Million');
    });

    it('should use the toUpper method declared in the string prototype', function() {
      // spyOn the `toUpper` method to ensure it is called when `ucFirst` is run
      spyOn(String.prototype, 'toUpper').and.callThrough();
      // Call the parent function
      'liverpool'.ucFirst();
      expect(String.prototype.toUpper).toHaveBeenCalled();
    });
  });

  describe('isQuestion method ', function() {

    it('should be a prototype of the string object', function() {
      expect(String.prototype.isQuestion).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.isQuestion).toBe('function');
    });

    it('should return a Boolean value', function() {
      expect(typeof 'sample'.isQuestion()).toBe('function');
    });

    it('should return true if the string is a question', function() {
      expect('Are you a scouser?'.isQuestion()).toBe(true);
      expect('Yes I am, it\'s the best team ever.'.isQuestion()).toBe(false);
      expect('Yeah, it definitely is!'.isQuestion()).toBe(false);
    });

  });

  describe('words method ', function() {

    it('should be a prototype of the string object', function() {
      expect(String.prototype.words).toBeDefined();
    });

    it('should return instance of an array which is a type of object', function() {
      // Detect object class using `Object.prototype.toString`
      // Detects typeof and instanceof with one function call
      var toString = Object.prototype.toString;

      expect(toString.call('test string'.words())).toBe('[object Array]');
    });

    it('Should returns an Array of the words in the string', function() {
      expect('Are you a scouser?'.words())
        .toEqual(['Are', 'you', 'a', 'scouser']);
      expect('It can be used with every object??!!'.words())
        .toEqual(['It', 'can', 'be', 'used', 'with', 'every', 'object']);
      expect('I\'ve been telling that joke for YEARS!'.words())
        .toEqual(['I\'ve', 'been', 'telling', 'that', 'joke', 'for', 'YEARS']);
    });

  });

  describe('wordCount method ', function() {

    var quote = 'The lower you fall, the higher you\'ll fly.';

    it('should be a prototype of the string object', function() {
      expect(String.prototype.wordCount).toBeDefined();
    });

    it('should return a number', function() {
      expect(typeof quote.wordCount()).toBe('number');
    });

    it('should be a function', function() {
      expect(typeof String.prototype.wordCount).toBe('function');
    });

    it('should return 8 for the test sentence', function() {
      expect(quote.wordCount()).toBe(8);
    });

    it('should use the words method declared in the string prototype', function() {
      // spyOn the `words` method to ensure it is called when `wordCount` is run
      spyOn(String.prototype, 'words').and.callThrough();
      // Call the parent function
      quote.wordCount();
      expect(String.prototype.words).toHaveBeenCalled();
    });

  });

  describe('toCurrency Method', function() {
    it('should be a prototype of the string object', function() {
      expect(String.prototype.toCurrency).toBeDefined();
    });

    it('hasVowels should be a function', function() {
      expect(typeof String.prototype.toCurrency).toBe('function');
    });

    it('should return a Datatype of string', function() {
      expect(typeof '11111.11'.toCurrency()).toBe('string');
    });

    it('should return formated currency, taking care of cents', function() {
      expect('111.11'.toCurrency()).toBe('111.11');
      expect('1111.11'.toCurrency()).toBe('1,111.11');
      expect('11111.11'.toCurrency()).toBe('11,111.11');
      expect('111111.11'.toCurrency()).toBe('111,111.11');
      expect('111111111.11'.toCurrency()).toBe('111,111,111.11');
      expect('5689896.89'.toCurrency()).toBe('5,689,896.89');
    });
  });

  describe('fromCurrency Method', function() {
    it('should be a prototype of the string object', function() {
      expect(String.prototype.fromCurrency).toBeDefined();
    });

    it('should be a function', function() {
      expect(typeof String.prototype.fromCurrency).toBe('function');
    });

    it('should return a number', function() {
      expect(typeof '11111.11'.fromCurrency()).toBe('number');
    });

    it('should return 11111.11 for 11,111.11', function() {
      expect('11'.fromCurrency()).toBe(11);
      expect('11.11'.fromCurrency()).toBe(11.11);
      expect('1,111.11'.fromCurrency()).toBe(1111.11);
      expect('2,111,233.11'.fromCurrency()).toBe(2111233.11);
      expect('5,689,896.89'.fromCurrency()).toBe(5689896.89);
    });
  });

});
