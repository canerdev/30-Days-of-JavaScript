// BOOLEANS

// Truthy values
//      All numbers(positive and negative) are truthy except zero
//      All strings are truthy except an empty string ('')
//      The boolean true
// Falsy values
//      0
//      0n
//      null
//      undefined
//      NaN
//      the boolean false
//      '', "", ``, empty string

let firstName;
console.log(firstName); // not defined, because it is not assigned to a value yet

let empty = null;
console.log(empty); // null --> means no value

// COMPARISON OPERATORS

console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number
console.log(undefined == null); // true --> 0 == 0

// Using === is safer than using ==.


// LOGICAL OPERATORS

// && = and 
let check = 4 > 3 && 5 > 2
console.log(check); // true && true -> true

// || = or
let check2 = 4 > 3 || -2 > 2
console.log(check2); // true  || false -> true

// ! = negation 
let check3 = !(4 > 3)
console.log(check3); // false


// INCREMENT - DECREMENT OPERATORS 

// pre-increment 
let count_pre = 0;
console.log(++count_pre); // 1
console.log(count_pre); // 1

// post-incremnent 
let count_post = 0;
console.log(count_post++); // 0
console.log(count_post); // 1

// decrement için de aynı 
// We use most of the time post-increment. At least you should remember how to use post-increment operator.


// TERNARY OPERATORS 
// another way to write a condition 

let isRaining = true;
isRaining
  ? console.log("you need a rain coat.")
  : console.log("no need for a rain coat.");

isRaining = false;
isRaining
  ? console.log("you need a rain coat.")
  : console.log("no need for a rain coat.");


let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);


// Window alert() method: it displays an alert box with a specified message and an OK button.
alert('this is a message');

// Window prompt() method: it displays a prompt box with an input on your browser to take input values and the input can be stored in a variable. It takes 2 arguments. the second one is optional.
let age = prompt('enter number', 'number goes here');
console.log(age);

// Window confirm() method: it displays a dialog box with a specified message, along with an OK and a cancel button. a confirm box is often used to ask permission from a user to execute something and it takes a string as an argument.
const agree = confirm('are you sure you like to delete it???');
console.log(agree); // true or false 


// DATE OBJECT

const now = new Date()
console.log(now); // Fri Jan 21 2022 12:47:19 GMT+0300 (GMT+03:00)

console.log(now.getFullYear()); // 2022

console.log(now.getMonth()) // 0 because the month is January - month(0 - 11)

console.log(now.getDate()); // 21 because the day of the month is 21th - day of months(1 - 31)

console.log(now.getDay()); // 5 because the day of the week is 5th - day of weeks(0 - 6)

console.log(now.getMinutes()); // 0 bacuse the time is 1.00 pm 

console.log(now.getSeconds()); // 33 

console.log(now.getTime()); // 1642759421746 --> not so important for now 


// EXERCISES

console.log(now.getHours()); // 22

let base = prompt('Enter the base, please');
let height = prompt('Enter the height, please');

let sideA = Number(prompt('Enter the length of side A'));
let sideB = Number(prompt('Enter the length of side B'));
let sideC = Number(prompt('Enter the length of side C'));

let area = (base * height)/2;
let perimeter = sideA + sideB + sideC; // girilen sayıları number olarak almak için Number(sideX) de mümkün

alert(`The area of the triangle is ${area}`);

alert(`the perimeter of the triangle is ${perimeter}`);



let hours = prompt('How many hours ddo you work in a week?');
let wage = prompt('What is your wage/hour?');

let weeklyEarning = Number(hours) * Number(wage);
alert(`Your weekly earning is ${weeklyEarning}`);



let userYear = Number(prompt('Enter the year you was born'));
const currentYear = new Date().getFullYear();
let userAge = currentYear - userYear;
let certainYears = 18 - userAge;

userAge >= 18
  ? alert(`You are ${userAge}. You are old enough to drive.`)
  : alert(`You are ${userAge}. You will be allowed to drive after ${certainYears} years.`)



let time = new Date();
let timeMonth = time.getMonth() + 1;
timeMonth <= 9 
  ? timeMonth = '0' + timeMonth
  : 

console.log(timeMonth);
console.log(`${time.getFullYear()}-${timeMonth}-${time.getDate()}`);