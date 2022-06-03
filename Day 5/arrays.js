// // syntax
// const arr = Array(); // creates an empty array
// // or
// let arr_2 = new Array();

// // but most recommended way is
// const arr_3 = [];

// how to create an array with values
const numbers = [31, 0, -5, 65, 13];
const fruits = ["banana", "orange", "apple"];

console.log("numbers:", numbers); // numbers: [ 31, 0, -5, 65, 13 ]
console.log("fruits:", fruits); // fruits: [ 'banana', 'orange', 'apple' ]
console.log(fruits.length); // 3

// arrays can have items of different data types
const arr = [
  "caner",
  31,
  true,
  { conutry: "turkey", city: "istanbul" },
  { skills: ["html", "css", "js"] },
];
console.log(arr);

// creating an array using split
let js = "javascript";
console.log(js.split(" ")); // [ 'javascript' ]
console.log(js.split("")); // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

let companiesString = "facebook, google, microsoft, tesla, spaceX";
let companiesArr = companiesString.split(",");
console.log(companiesArr); // [ 'facebook', ' google', ' microsoft', ' tesla', ' spaceX' ]

// accessing array items using index
const cars = ["tesla", "taycan", "bmw", "volvo"];
console.log(cars[0]); // tesla
console.log(cars[cars.length - 1]); // volvo
console.log(cars[31]); // undefined

// modifying array element
const num = [10, 20, 15, 3];
num[0] = 31;
num[3] = 69;
console.log(num); // [ 31, 20, 15, 69 ]

// METHODS TO MANIPULATE ARRAYS
const arr_4 = Array(8);
console.log(arr_4); // [ <8 empty items> ]

// fill: Fill all the array elements with a static value
const arr_5 = Array(4).fill(3);
console.log(arr_5); // [ 3, 3, 3, 3 ]

// concat:To concatenate two arrays.
const firstList = ["a", "b", "c"];
const secondList = ["d", "e", "f"];
console.log(firstList.concat(secondList)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(secondList.concat(firstList)); // [ 'd', 'e', 'f', 'a', 'b', 'c' ]

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const arr_6 = ["a", "b", "c"];
console.log(arr_6.indexOf("a")); // 0
console.log(arr_6.indexOf("c")); // 2
console.log(arr_6.indexOf(10)); // -1

// Check an element if it exist in an array.
const arr_7 = ["banana", "orange", "mango"];
let index = fruits.indexOf("caner");

if (index != -1) {
  console.log("this fruit does exist in the array");
} else {
  console.log("this fruit does not exist in the array");
}

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const ages = [9, 12, 15, 11, 17];
console.log(ages.includes(12)); // true
console.log(ages.includes("caner")); // false

// Array.isArray:To check if the data type is an array
let x = 31;
console.log(Array.isArray(ages)); // true
console.log(Array.isArray(x)); // false

// toString:Converts array to string
console.log(ages.toString()); // 9,12,15,11,17
console.log(arr_7.toString()); // banana,orange,mango

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
// By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const names = ["ayşe", "feyza", "selin", "caner"];
console.log(names.join()); // ayşe,feyza,selin,caner
console.log(names.join("")); // ayşefeyzaselincaner
console.log(names.join(" ")); // ayşe feyza selin caner
console.log(names.join(",")); // ayşe,feyza,selin,caner
console.log(names.join(" $ ")); // ayşe $ feyza $ selin $ caner

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const arr_8 = [1, 2, 3, 4, 5];
console.log(arr_8.slice()); // -> it copies all  item
console.log(arr_8.slice(0)); // -> it copies all  item
console.log(arr_8.slice(0, arr_8.length)); // it copies all  item
console.log(arr_8.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
console.log(arr_8.splice(0, 3, -5, -4, -3)); // [ 1, 2, 3 ] --> bunları çıkardık ve son 3 sayıyı ekledik 
console.log(arr_8); // [ -5, -4, -3, 4, 5 ]

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
const arr_9 = [1, 2, 3, 4, 5];
arr_9.push("new item", 10);
console.log(arr_9); // [ 1, 2, 3, 4, 5, 'new item', 10 ]

arr_9.pop(); // remove one item from the end
console.log(arr_9); // [ 1, 2, 3, 4, 5, 'new item' ]

arr_9.shift(); // removing one element in the beginning of the array
console.log(arr_9); // [ 2, 3, 4, 5, 'new item' ]

arr_9.unshift("caner", 31, "aslan"); // adding an array elemet in the beginning of the array 
console.log(arr_9); // [ 'caner', 31, 'aslan', 2, 3, 4, 5, 'new item' ]

arr_9.reverse(); // reverse the order of an array 
console.log(arr_9); // [ 'new item', 5, 4, 3, 2, 'aslan', 31, 'caner' ]

arr_9.sort(); // arrange array elements in ascending order. Sort takes a call back function
console.log(arr_9); // [ 2, 3, 31, 4, 5, 'aslan', 'caner', 'new item' ]


// EXERCISES 
const itCompanies = ['facebook', 'google', 'amazon', 'apple'];
console.log(itCompanies.includes('google')); // true
console.log(itCompanies.toString() + ' are big it companies');

if (itCompanies.includes('facebook')) {
  console.log('facebook');
} else {
  console.log('facebook is not found');
}


console.log(itCompanies.sort()); // [ 'amazon', 'apple', 'facebook', 'google' ]


console.log(itCompanies.slice(0,3)); // [ 'amazon', 'apple', 'facebook' ]


let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, and Python."
console.log(text.split(' '));
console.log(text.split(' ').length); // 14


const shoppingCart = ['milk', 'coffee', 'tea', 'honey'];

if (shoppingCart.includes('meat')) {
  console.log('meat has been already added');
} else {
  shoppingCart.unshift('meat');
  console.log(shoppingCart); // [ 'meat', 'milk', 'coffee', 'tea', 'honey' ]
}

if (shoppingCart.includes('sugar')) {
  console.log('sugar has been already added');
} else {
  shoppingCart.push('sugar');
  console.log(shoppingCart); // [ 'meat', 'milk', 'coffee', 'tea', 'honey', 'sugar' ]
}


const studenAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(studenAges.sort());
console.log(studenAges[0]); // 19 --> min
console.log(studenAges[studenAges.length - 1]); // 26 --> max
console.log((studenAges[4] + studenAges[5])/2); // 24 --> median 
console.log();
