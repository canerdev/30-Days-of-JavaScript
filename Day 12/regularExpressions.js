// a regular expression  or RegExp is a small preogramming language that helps to find pattern in data.
// a RegExp can be used to check if some pattern exists in different data types. we can create a pattern in twho ways.

// a RegExp takes two parameters. one required search pattern and an optional flag

// a pattern could be a text or any form of pattern which some sort of similarity.

// flags are optional parameters in a regular expression which determine the type of searching. examples:
// g: is a global flag which means looking for a pattern in whole text
// i: case insensitive (it searches for both lowercase and uppercase)
// m: multiline 

// declaring regular expression without global flag and case insensitive flag
let pattern = 'love'
let regEx = new RegExp(pattern);
console.log(regEx); // /love/

// declaring regular expression with global flag and case insensitive flag
let flag = 'gi';
let regEx2 = new RegExp(pattern, flag);
console.log(regEx2); // /love/gi

// declaring a regex pattern using RegExp object
let regEx3 = new RegExp('love', 'gi'); 
console.log(regEx3); // /love/gi

// OR
let regEx4 = /love/gi;
console.log(regEx4) // /love/gi


// RegExp Object Methods

// test(): tests for a match in a string. it returns true or false
let str = 'i love javascript'
const pattern2 = /love/;
console.log(pattern2.test(str)); // true 

// match(): returns an array containing all of the matches, including capturing groups, or null if no match is found.
// if we do not use a global flag, match() returns an array containing the pattern, index, input and group.
console.log(str.match(pattern2)); // [ 'love', index: 2, input: 'i love javascript', groups: undefined ]
console.log(str.match(/love/g)); // [ 'love' ]

// search(): tests for a match in a string. it returns the index of the match, or -1 if the search fails
console.log(str.search(/love/)); // 2

// replace(): executes a search for a match in a string, and replaces the matched substring with a replacement substring 
console.log(str.replace(/javascript/gi, 'flutter')); // i love flutter

// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

// \d mean:match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits

// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.

// r'substring$' eg r'love$', sentence ends with a word love

// {3}: Exactly 3 characters
// {3,}: At least 3 character
// {3,8}: 3 to 8 characters
// |: Either or

// square bracket []
let txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'
console.log(txt.match(/[Aa]pple|[Bb]anana/g)); // [ 'Apple', 'banana', 'apple', 'banana' ] ---> the first square brackets mean either A or a

// escape character (\) in RegExp
let text = 'this regular expression example was made in january 12, 2020.'
console.log(text.match(/\d/g)); // [ '1', '2', '2', '0', '2', '0' ] --> d is a special character which means digits 

// one or more times (+)
console.log(text.match(/\d+/g)) // [ '12', '2020' ]

// we can specify the length of the substring we look for in a text, using curly brackets.
console.log(text.match(/\d{4}/g)); // [ '2020' ] --> {4} means exactly four times 
console.log(text.match(/\d{1,4}/g)); // [ '12', '2020' ] --> {1,4} means 1 to 4 

// starts with
console.log(text.match(/^this/gi)); // [ 'this' ]

// negation
console.log(text.match(/[^A-Za-z,. ]+/g)) // [ '12', '2020' ] --> in this example ^ means negation, not A to Z, not a to z, no comma and no period 

// exact match
console.log(/^[A-Z]{3,12}$/.test(text)) // false 
