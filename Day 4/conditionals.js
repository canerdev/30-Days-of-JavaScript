// if
let num = 3;
if (num > 0) {  // true 
    console.log(`${num} is a positive number`);
}

let isRaining = false;
if (isRaining) { // nothing bc it is false 
    console.log('remember to take your rain coast');
}


// if else 
let age = 69;
let needYears = 18 - age;
if (age >= 18 && age <=65 ) {
    console.log(`you are ${age}. you are allowed to drive`);
} else if (age < 0) {
    console.log('age cannot less than 0');
} else if (age >= 65) {
    console.log('you are too old to drive moron');
} else {
    console.log((`you are ${age}. you have to wait ${needYears} years.`));
}


// switch 
let number = -8;
switch (true) {
  case number > 0:
    console.log('Number is positive');
    break;
  case number == 0:
    console.log('Numbers is zero');
    break;
  case number < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value is not a number');
}


let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}


// ternary operators 
let isCold = true
isCold
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


// EXAMPLES

let yourAge = Number(prompt("enter your age"));
let myAge = Number(prompt("enter my age"));
let diff = Math.abs(yourAge - myAge);

if (yourAge > myAge) {
  alert(`you are ${diff} years older than me`);
} else if (myAge > yourAge) {
  alert(`i am ${diff} years older than you`);
} else {
  alert("we are at the same age");
}


let numCheck = Number(prompt('enter a number'));

if (numCheck%2 == 0 || numCheck == 0) {
    alert(`${numCheck} is a even number`);
} else {
    alert(`${numCheck} is a odd number`);
}


let day = prompt('What is the day today?');

switch (day.toLowerCase()) {
    case 'monday':
        alert('monday is a working day')
        break
    case 'tuesday':
        alert('tuesday is a working day')
        break
    case 'sunday':
        alert('sunday is a weekend')
}