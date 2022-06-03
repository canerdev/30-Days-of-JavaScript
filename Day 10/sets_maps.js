// set: set is a collection of elements. Set can only contains unique elements

// creating an empty set
const companies = new Set();
console.log(companies); // Set(0) {}

// creating set from array
const languages = ["english", "turkish", "french", "german"];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages); // Set(4) { 'english', 'turkish', 'french', 'german' }

// set is an iterable object and we can iterate through each element
for (const language of setOfLanguages) {
  console.log(language);
}

// adding an element to a set
console.log(companies.size); // 0
companies.add("apple");
companies.add("meta");
companies.add("microsoft");
console.log(companies.size); // 3
console.log(companies); // Set(3) { 'apple', 'meta', 'microsoft' }

// we can alse use loop to add element to a set
const numbers = [12, 24, 31, 65, 3];
const setOfNumbers = new Set();
for (const number of numbers) {
  setOfNumbers.add(number);
}
console.log(setOfNumbers); // Set(5) { 12, 24, 31, 65, 3 }

// deleting an element from a set
setOfNumbers.delete(12);
console.log(setOfNumbers); // Set(4) { 24, 31, 65, 3 }

// checking an element in the set
console.log(setOfNumbers.has(24)); // true

// clearing the set
setOfNumbers.clear(); // it removes all the elements froma a set
console.log(setOfNumbers); // Set(0) {}

// use case of set - 1
const cities = [
  "antalya",
  "istanbul",
  "berlin",
  "istanbul",
  "antalya",
  "boston",
];
const citySet = new Set(cities);
console.log(citySet); // Set(4) { 'antalya', 'istanbul', 'berlin', 'boston' }

const counts = [];

for (const i of citySet) {
  const filteredCity = cities.filter((city) => city === i);
  console.log(filteredCity);
  counts.push({ city: i, count: filteredCity.length });
}
console.log(counts);
// [
//     { city: 'antalya', count: 2 },
//     { city: 'istanbul', count: 2 },
//     { city: 'berlin', count: 1 },
//     { city: 'boston', count: 1 }
// ]

// use case of set - 2
const numbers2 = [4, 7, 6, 7, 7, 4, 6, 3, 4, 4, 5, 5, 9];
const setNumbers = new Set(numbers2);
console.log(setNumbers); // Set(6) { 4, 7, 6, 3, 5, 9 }

// to find an union to two sets can be achieved using spread operator.(A U B)
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let c = [...a, ...b];

const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(C); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// to find an intersection of two sets can be achieved using filter.(A ∩ B)
let d = a.filter((number) => B.has(number));
const D = new Set(d);
console.log(D); // Set(3) { 3, 4, 5 }

// to find the difference between two sets can be achieved using filter.
let e = a.filter((number) => !B.has(number));
console.log(e); // [ 1, 2 ] --> set oluşturup ona atıp öyle de yazdırabilirdik

// MAP

// creating an empty map
const map = new Map();
console.log(map); // Map(0) {}

// creating an map from an array
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const countryMap = new Map(countries);
console.log(countryMap, countryMap.size);
// Map(3) {
//     'Finland' => 'Helsinki',
//     'Sweden' => 'Stockholm',
//     'Norway' => 'Oslo'
// } 3

// adding values to the map 
countryMap.set('turkey', 'ankara'); // değer girmediklerin undefined döndürecek 
console.log(countryMap);

// getting a value from map
console.log(countryMap.get('turkey')) // ankara

// check if a key exist in a map using has method. it returns true or false 
console.log(countryMap.has('turkey')); // true

// getting all values from map using loop
for (const country of countryMap) {
    console.log(country);
}
// [ 'Finland', 'Helsinki' ]
// [ 'Sweden', 'Stockholm' ]
// [ 'Norway', 'Oslo' ]
// [ 'turkey', 'ankara' ]

for (const [country, city] of countryMap) {
    console.log(country + "'s capital is " + city.toUpperCase());
}
// Finland's capital is HELSINKI
// Sweden's capital is STOCKHOLM
// Norway's capital is OSLO
// turkey's capital is ANKARA


// EXERCISES 

const SetTo10 = new Set();
for (let i = 0; i <= 10; i++) {
    SetTo10.add(i)
}
console.log(SetTo10); // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

const names = [
    ['caner', 'caner'.length],
    ['erden', 'erden'.length],
    ['yiğit', 'yiğit'.length],
    ['nida', 'nida'.length]
]
const namesMap = new Map(names)
console.log(namesMap); // Map(4) { 'caner' => 5, 'erden' => 5, 'yiğit' => 5, 'nida' => 4 }
