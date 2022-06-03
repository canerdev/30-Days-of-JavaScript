// function without a parameter
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq); 
}
square(); // 4

function addTwoNumbers() {
    let numberOne = 10;
    let numberTwo = 20;
    console.log(numberOne + numberTwo)
}
addTwoNumbers(); // 30

function printFullName() {
    let firstName = 'caner';
    let lastName = 'aslan';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
printFullName(); // caner aslan

// OR

function printFullName_2() {
    let firstName = 'caner';
    let lastName = 'aslan';
    let fullName = firstName + ' ' + lastName;
    return fullName;
}
console.log(printFullName_2()); // caner aslan 


// function with a parameter 
function areaOfCircle(r) {
    let area = Math.PI * r * r ;
    return area;
}
console.log(areaOfCircle(10)); // 314.15

function number(number) {
    return number * number;
}
console.log(number(5)); // 25


// function with two parameters 
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum)
}
sumTwoNumbers(15, 16); // 31

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('caner', 'aslan')); // caner aslan


// function with multiple parameters 
const numbers = [1, 2, 3, 4, 5];
function someArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(someArrayValues(numbers)); // 15


// unlimited number of parameters in regular function 
function sumAllNums() {
    let sum = 0; 
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 5, 20)); // 31
console.log(sumAllNums(10, 12, 50, 46, 94, 56546)); // 56758


// unlimited nummber of parameters in arrow function
// accessing the arguments object  
const sumAllNums_2 = (...args) => {
    console.log(args);
}
sumAllNums_2(1, 2, 3, 4); // [ 1, 2, 3, 4 ]

// function declaration 
const sumAllNums_3 = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element;
    }
    return sum;
}
console.log(sumAllNums_3(1, 2, 3)); // 6


// anonymous function
const anonymous = function() {
    return 'i am an anon function';
}
console.log(anonymous()) // i am an anon function 


// expression function 
const square_2 = function(n) {
    return n * n;
}
console.log(square_2(4)); // 16


// self inovaking functions 
let squaredNum = (function(n) {
   console.log(n * n);
})(5) // 25


// arrow function: it uses arrow instead of the keyword function to declare a function 
const square_3 = n => {
    return n * n;
}
console.log(square_3(31)); // 961

const changeToUpperCase = array => {
    const newArr = [];
    for (const element of array) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(changeToUpperCase(countries)); // [ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND' ]

const printFullName_3 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log('caner', 'göttenyiyen') // caner göttenyiyen


// function with default parameters:  when we invoke the function if we do not pass an argument the default value will be used.
function greetings(name = 'caner') {
    console.log(`${name}, welcome to 30 days of javascript`);
}
greetings(); // caner, welcome to 30 days of javascript
greetings('aslan'); // aslan, welcome to 30 days of javascript
 
function calculateAge(birthYear, currentYear = 2022) {
    return currentYear - birthYear;
}
console.log(calculateAge(2002)); // 20
console.log(calculateAge(2002, 2080)); // 78

// with arrow function 

const calculateAge_2 = (birthYear, currrentYear = 2022) => currrentYear - birthYear;
console.log(calculateAge_2(2000)); // 22
console.log(calculateAge_2(2012, 2100)); // 88


// EXERCISES
const areaofRectangle = (length, width) => length * width;
console.log(areaofRectangle(10, 20)); // 200

function circumOfCircle(r) {
    return 2 * Math.PI * r;
}
console.log(circumOfCircle(5)); // 31.41

function speed(distance, time) {
    console.log(`You take ${distance} km in ${time} hours so your speed is ${distance/time}. yavaş amk `);
}
speed(1020, 10); // You take 1020 km in 10 hours so your speed is 102. yavaş amk

function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is the largest number`;
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} is the largest number`;
    } else {
        return `${num3} is the largest number`;
    }
}
console.log(findMax(5, 46, 31)); // 46 is the largest number

function checkSeason(month) {
    let monthLowerCase = month.toLowerCase();
    if (monthLowerCase == 'december' || monthLowerCase == 'january' || monthLowerCase == 'february') {
        console.log('winter');
    } else if (monthLowerCase == 'march' || monthLowerCase == 'april' || monthLowerCase == 'may') {
        console.log('spring');
    } else if (monthLowerCase == 'june' || monthLowerCase == 'july' || monthLowerCase == 'august') {
        console.log('summer');
    } else if (monthLowerCase == 'september' || monthLowerCase == 'october' || monthLowerCase == 'november') {
        console.log('autumn');
    }
}
checkSeason("JULY"); // summer

function solveQuadratic(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    let kok_1 = (-b + Math.sqrt(delta)) / (2 * a);
    let kok_2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`${kok_1} ve ${kok_2} denklemimizin kökleridir.`);
}
solveQuadratic(1, -1, -2); // 2 ve -1 denklemimizin kökleridir.

const printArray = arr => {
    console.log(arr.toString());
}
printArray(['caner', 31, 'aslan', ['array of array']]); // caner,31,aslan,array of array

function showDateTime() {
    let date = new Date();
    console.log(date.toLocaleDateString("en-GB") + ' ' + date.getHours() + '.' + date.getMinutes());
}
showDateTime() // 26/01/2022 10.26

const swapValues = (x, y) => `x is ${y} and y is ${x}`;
console.log(swapValues(7, 12)); // x is 12 and y is 7

function reverseArray(array) {
    const newArr = [];
    for (const element of array) {
        newArr.unshift(element);
    }
    return newArr;
}
console.log(reverseArray(['caner', '2.eleman', '123', 'blablabla'])); // [ 'blablabla', '123', '2.eleman', 'caner' ]

const sumOfNumbers = number => {
    let sum = 0;
    for ( i = 0; i < number; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(20)); // 190

function sumOfEven(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 2 == 0) {
            sum += i;
        } 
    }
    return sum;
}
console.log(sumOfEven(10)); // 20

function rgbColorGenerator() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    console.log(`rgb(${x}, ${y}, ${z})`);
}
rgbColorGenerator(); // rgb(232, 128, 180)

// let charactersAndNumbers = 'qwertyuıoplkjhgfdsazxcvbnm0123456789'
// let numbers_2 = '0123456789'
// const generateColors  = (type) => {
//     if (type == 'hexa') {
//         let hexa = new Array()
//         for (i = 0; i = 6; i++) {
//             let hexaCode = charactersAndNumbers.charAt(Math.random() * charactersAndNumbers.length)
//             hexa.push(hexaCode);
//         }
//         return hexa
//     }
// }
// console.log(generateColors('hexa'));

function sevenRandomNumbers() {
    const seven = new Array()
    while (seven.length < 7) {
        let uniqeNumber = Math.floor(Math.random() * 10);
        if (seven.includes(uniqeNumber) != 1) {
            seven.push(uniqeNumber);
        }
    }
    console.log(seven);
}
sevenRandomNumbers(); // [2, 7, 3, 5, 0, 8, 1]