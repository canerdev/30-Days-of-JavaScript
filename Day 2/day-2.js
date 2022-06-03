let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false


// MATH OBJECT 

const PI = Math.PI;
console.log(PI); // 3.141592653589793

// rounding to the closest number
// if above 0.5 up, if less 0.5 down rounding 

console.log(Math.round(PI)); // 3 

console.log(Math.round(9.75)); // 10

console.log(Math.floor(3.9)); // 3 

console.log(Math.ceil(PI)); // 4 

console.log(Math.min(-5, 31, 9, 12, 0)); // -5 --> returns the minimum value

console.log(Math.max(-5, 31, 9, 12, 0)); // 31 --> returns the maximum value

console.log(Math.random()); // creates nummber between  0 to 0.999999

console.log(Math.floor((Math.random() * 11))); // creates random number between 0 to 10

console.log(Math.abs(-31)); // 31 --> absolute value

console.log(Math.sqrt(16)); // 4 --> square root 

console.log(Math.pow(3, 2)); // 9 --> 3*2 

console.log(Math.E); // 2.718

// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

console.log(Math.sin(0)); // 0 


// STRINGS 

const para = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux"

// we can use the backslash character(\) at the end of each line to indicate
// that the sring will continue on the next line 

console.log(para);

//   \n: new line
//   \t: Tab, means 8 spaces
//   \\: Back slash
//   \': Single quote (')
//   \": Double quote (")

console.log("caner \naslan \\ \'31 yaşında\'");


// TEMPLATE LITERALS (TEMPLATE STRINGS)

let firstName = 'Caner';
let lastName = 'Aslan';
let country = 'Turkey'
let language = 'EN - TR';
let age = 19;
let fullName = firstName + " " + lastName;

let personInfo = `I am ${fullName}. I am ${age}. I live in ${country} unfortunately`; // be careful about `` --> these are not backtick.
console.log(personInfo);


// STRING METHODS 

let name_1 = '   c ane r';
console.log(name_1.length); // 10 --> included empty space

let string = 'JavaScript';
let firstLetter = string[0];
let secondLetter = string[1];
console.log(string[string.length - 1]); // t
console.log(firstLetter); // j

console.log(string.toUpperCase()); // JAVASCRIPT
console.log(string.toLowerCase()); // javascript

// substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4, 6)); // Script

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0, 4)); // Java

// split(): The split method splits a string at a specified place.
console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


let name_2 = 'caner';
console.log(name_2.split()); // [ 'caner' ]
console.log(name_2.split('')); // [ 'c', 'a', 'n', 'e', 'r' ]

// trim(): Removes trailing space in the beginning or the end of a string.

let name3 = '    caner     ';
console.log(name3.trim()); // caner

// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let ulke = 'turkey';

console.log(ulke.includes("tur")); // true
console.log(ulke.includes("key")); // true 
console.log(ulke.includes("turey")); // false

// replace(): takes as a parameter the old substring and a new substring.
console.log(ulke.replace('tur', 'yarak')); // yarakkey 

//charAt(): Takes index and it returns the value at that index
console.log(ulke.charAt(3)); // k

// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(ulke.indexOf('k')) // 3
console.log(ulke.indexOf('c')); // -1 because it is not exist

// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if it does not exist it returns -1

let paragraf = 'im just trying to get out of my country';
console.log(paragraf.lastIndexOf('country')); // 32 --> c

// concat(): it takes many substrings and joins them.
console.log(paragraf.concat(' canerdir', ' benim', ' adım')); // im just trying to get out of my country canerdir benim adım

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean.
console.log(paragraf.startsWith('i')); // true
console.log(paragraf.startsWith('im ')); // true
console.log(paragraf.startsWith('Im')); // false

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean.
console.log(paragraf.endsWith("country")); // true

// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(paragraf.search('just'));

// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. 
// Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
console.log(paragraf.match('just'));
console.log(paragraf.match('caner')); // null

// repeat(): it takes a number as argument and it returns the repeated version of the string.
console.log(ulke.repeat(5)); // turkeyturkeyturkeyturkeyturkey


// CHANGING DATA TYPE (CASTING)

// string to integer 
let num = '31';
console.log(Number(num) + ' and the type is: ' + typeof parseInt(num)); // 31 - number

// Number() == parseInt()
// OR
 
let numInt = +num;
console.log(numInt); // 31


// string to float 
let num2 = '31.69';
console.log(parseFloat(num2));
// Number() and +num2 are also possible for this situation 


// float to integer
console.log(parseInt(num2)); // 31
