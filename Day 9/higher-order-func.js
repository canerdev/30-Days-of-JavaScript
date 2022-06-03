// higher order functions are functions which take other function as a parameter or return a function as a value.

// a callback is a function which can be passed as parameter to other functions.
const callback = (n) => { // function name can be changed
    return n ** 2;
}

function cube(callback, n) { // fucntion take other function as a callback 
    return callback(n) * n;
}
console.log(cube(callback, 4)); // 64


// higher order functions return function as a value 
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + m + 5 * t;
        }
        return doWhatEver;
    } 
    return doSomething;
}
console.log(higherOrder(2)(3)(5)); // (n)(m)(t) --> 32

// we use setInterval high order function to do some activity continuously with in some interval of time.
// it takes a callback function and a duration(in milisecond) as a parameter
// function sayHello() {
//     console.log('hello world');
// }
// setInterval(sayHello, 1000); // it prints 'hello world' in every second, 1000ms is 1s.

// we use setTimeout higher order function to execute some action at some time in thi future.
// it takes a callback function and a duration(in miliseconds) as a paramaeter.
// function sayMyName() {
//     console.log('caner');
// }
// setTimeout(sayMyName, 2000); // it prints caner after it waits for 2 seconds 


// FUNCTIONAL PROGRAMMING

// forEach: iterate an array element. we use forEach only with arrays. it takes a callback funciton with elements, index parameter and array itself. the index and the array optional.
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) { // (element, index, array)
    sum += number;
})
console.log(sum); // 15
// OR
numbers.forEach((number) => sum += number);
console.log(sum); // 30 --> 15 + 15
// OR
numbers.forEach(number => {sum += number})
console.log(sum); // 45

numbers.forEach(element => console.log(element)); // 1 2 3 4 5 


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const upperCountries = [];
countries.forEach(element => {
    upperCountries.push(element.toUpperCase());
})
console.log(upperCountries); // [ 'FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND' ]


// map: iterate an array's elements and modify the array's elements. it takes a callback function with elements, index, array parameter and return a new array.
// the main different between forEach and map is that the map method returns a new array.
const numbersSquare = numbers.map(num => num * num);
console.log(numbersSquare); // [ 1, 4, 9, 16, 25 ]

const names = ['simay', 'kuzey'];
const upperNames = names.map((name) => {
    return name.toUpperCase()
})
console.log(upperNames); // [ 'SIMAY', 'KUZEY' ]

const namesFirstThreeLetters = names.map(element => {
    return element.toUpperCase().slice(0, 3)
}) 
console.log(namesFirstThreeLetters); // [ 'SIM', 'KUZ' ]


// filter: filter out items which full fill filtering conditions and return a new array
const names2 = ['aliefe', "alican", "erden", "caner", "aliş", "malik"];
const aliNames = names2.filter(name =>
    name.includes('ali')
)
console.log(aliNames) // [ 'aliefe', 'alican', 'aliş', 'malik' ]

const namesEndWithN = names2.filter(name => name.endsWith('n'));
console.log(namesEndWithN); // [ 'alican', 'erden' ]

const fiveLettersNames = names2.filter(name => name.length === 5);
console.log(fiveLettersNames); // [ 'erden', 'caner', 'malik' ]

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const scoresGreaterEight = scores.filter(userScore => userScore.score > 80)
console.log(scoresGreaterEight);


// reduce: Reduce takes a callback function. The call back function takes accumulator, current,
// and optional initial value as a parameter and returns a single value. It is a good practice to
// define an initial value for the accumulator value. If we do not specify this parameter, by
// default accumulator will get array first value. If our array is an empty array, then
// Javascript will throw an error.
const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0) // 0'dan başladık ve 15 ekledik toplamda. 0'ı 20 yapsaydık 35 olurdu(20 + 15)
console.log(sum2); // 15 


// every: check if all the elements are similar in one aspect. it returns boolean.
const cities = ['antalya', 'istanbul', 'san fransisco', '31'];
const areAllStr = cities.every(city => typeof city === 'string'); // be careful about curly brackets 
console.log(areAllStr); // true 

const bools = [true, true, true];
const areAllTrue = bools.every(boolean => boolean === true);
console.log(areAllTrue); // true


// find: return the FIRST element which satisfies the condition
const ages = [20, 21, 22, 25, 30, 49];
const age = ages.find(age => age >= 24)
console.log(age); // 25

const winnerScore = scores.find(winner => winner.score >= 90);
console.log(winnerScore); // { name: 'Asabeneh', score: 95 }


// findIndex: return the position of the first element which satisfies the condition 
const ageGreater25 = ages.findIndex(age => age > 25)
console.log(ageGreater25); // 4


// some: check if some of the elements are similar in one aspect. it returns boolean.
const areLess25 = ages.some(age => age < 25)
console.log(areLess25); // true 


// sort: the sort method arranges the array elements either ascending or descending order.
// by default, the sort method sorts values as strings. this workds well for string array items but not for numbers.
// if number values are sorted as strings, it will give us wrong result. sort method modify the original array.
// it is recommended to copy the original data before you start using sort method.

// sorting string values
const companies = ['facebook', 'apple', 'alibaba', 'google', 'microsoft'];
console.log(companies.sort()); // [ 'alibaba', 'apple', 'facebook', 'google', 'microsoft' ]

// sorting numeric values
const numbers2 = [100, 3.5, 3.79, 65];
console.log(numbers2.sort()); // [ 100, 3.5, 3.79, 65 ] --> becaues 1 is the smallest one and so on 
// instead of using the one above
console.log(numbers2.sort((a, b) => { // [ 3.5, 3.79, 65, 100 ]
    return a - b;
}))

console.log(numbers2.sort((a, b) => { // [ 100, 65, 3.79, 3.5 ]
    return b - a;
}))

// sorting object arrays --> whenever we sort objects in an array we use the object key to compare.
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort(function(a, b) {
    if (a.age < b.age) return -1 // if we exchange the -1 and 1, sıralamyı da değiştiririz 
    if (a.age > b.age) return 1
    return 0 // is that necesarry?? 
})
console.log(users);


// EXERCISES 

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries2.forEach(country => {console.log(country)});

const countriesToUpper = countries2.map(country => country.toUpperCase())
console.log(countriesToUpper); // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

const countriesLength = countries2.map(country => {
    return country.length;
})
console.log(countriesLength) // [ 7, 6, 7, 6, 7 ]

const squareNumbers = numbers3.map(number => number * number); // [1,  4,  9, 16,  25, 36, 49, 64, 81, 100]
console.log(squareNumbers);

const productPrices = products.map(product => {
    return `${product.product}'s price is ${product.price}`
})
console.log(productPrices); // ["banana's price is 3", "mango's price is 6", ...]


const landCountries = countries2.filter(country => country.includes('land'));
console.log(landCountries); // [ 'Finland' ] --> no IceLand bcause of case sensitive

const countriesSixCharacters = countries2.filter(country => country.length === 6)
console.log(countriesSixCharacters); // [ 'Sweden', 'Norway' ]

const countriesStartsWithE = countries2.filter(country => country.startsWith('E'));
console.log(countriesStartsWithE); // []


const sum3 = numbers3.reduce((acc, cur) => acc + cur, 0);
console.log(sum3); // 55


const namesSeven = names3.some(name => name.length > 7);
console.log(namesSeven); // true


const allCountriesContaineLand = countries2.every(country => country.includes('land'));
console.log(allCountriesContaineLand); // false


const countrySix = countries2.find(country => country.length == 6);
console.log(countrySix); // Sweden


const countriesIndex = countries2.findIndex(country => country == 'Russia');
console.log(countriesIndex); // -1 beacuse it is not exist 


const totalPrice = products.reduce((sum, price) => parseInt(sum + price.price), 0)
console.log(totalPrice); // 27

function categorizeCountries(array) {
    return array.filter(element => element.includes('land'))
}
console.log(categorizeCountries(countries2)); // [ 'Finland' ]

products.sort(function(a, b) {
    if (a.product < b.product) return -1
    if (a.product > b.product) return 1
    return 0
})
console.log(products);