# JavaScript String Class Extension

This library extends the functionality of the string class by adding a few utility methods.

# Running tests
The tests are run using `jasmine` on the command line

To run the tests, use the following steps:

 - Clone the repo locally and navigate to the newly created folder

    `$ git clone https://github.com/kevgathuku/string-class`
    `$ cd string-class`

 - Install the packages specified in the `package.json` file

    `$ npm install`

 - The tests can now be run through the following command:

    `$ npm test`


# Methods Included

This library consist of nine custom methods:
- `hasVowels()`
 - `toUpper()`
 - `toLower()`
 - `isQuestion()`
 - `words()`
 - `wordCount()`
 - `toCurrency()`
 - `fromCurrency`

1. **Method `hasVowels()`**

    This method can be used to check if a string contains vowels.
    It will return a boolean datatype of `true` if vowels exist and `false` if they don't.

    ``` JavaScript
        "feeling".hasVowels(); // returns true
        "blyth".hasVowels(); // returns false
    ```
2.  **Method `toUpper()`**

    Calling this method on a string returns the string, but with all characters in uppercase as applicable

    ``` JavaScript
        "Kevin".toUpper(); // returns "KEVIN"
    ```
3. **Method `toLower()`**

    Calling this method on a string returns the string, but with all characters in lowercase as applicable

    ``` JavaScript
        var myVar = "WE ALL LOVE JAVASCRIPT";
            myVar.toLower(); // returns "we all love javascript"
    ```
4. **Method `ucFirst()`**

    Calling this method on a string returns the string, but with the first character 
    converted to uppercase.

    ``` JavaScript
        var sentence = "welcome to the Dojo";
            sentence.ucFirst(); // returns "Welcome to the Dojo"
    ```
5.  **Method `isQuestion()`**

    This method returns `true` if the string is a question and `false` otherwise

    ``` JavaScript
        var myVar = "Are you serious?", mySecondVar = "yes i am";
            myVar.isQuestion(); // returns true
            mySecondVar.isQuestion(); // returns false
    ```
6.  **Method `words()`**

    This method returns the all the words in sentence in form of an array
    e.g `['me', 'and', 'myself']`

    ``` JavaScript
        var sentence = "me and myself";
            sentence.words(); // returns ['me', 'and', 'myself']
    ```
7.  **Method `WordCount()`**

    This method returns the number of words words in a sentence.  
    It utilizes the method `words` above
    ``` JavaScript
        var sentence = "me and myself";
            sentence.wordCount(); // returns 3
    ```
8.  **Method `toCurrency()`**

    This method can be used to format a string to currency.
    ``` Javascript
        var money = "234456789.123"
            money.toCurrency(); // returns 234,456,789.123
    ```
9.  **Method `fromCurrency()`**

    This method can be used to convert a currency format back to nummber.
    Its return type is a number.
    ``` JavaScript
        var currency = "12,345,678.12";
            currency.fromCurrency(); // returns 12345678.12
    ```
