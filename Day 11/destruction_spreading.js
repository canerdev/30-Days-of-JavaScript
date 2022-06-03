// destruction is a way to unpack arrays, obejcts and assigning to a distinct varible

// destructing arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 1 2 3

const names = ["caner", "yiğit", "emir"];
let [name1, name2, name3] = names;
console.log(name1, name2); // caner yiğit

// if we like to skip on the values in the array we use additional comma.
const cities = ["antalya", "istanbul", "tokyo", "moskova"];
let [city1, , city3] = cities;
console.log(city1, city3); // antalya tokyo

// we can use default value in case the value for that index is undefined
const ages = [undefined, 15, 31];
let [age1 = 20, age2, age3] = ages;
console.log(age1, age2, age3); // 20 15 31

// we cannot assign variable to all the elements in the array. we can restructure few of the first and we can get the remaining as array using spread operator.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, rest); // 1 2 [4, 5, 6, 7, 8, 9, 10]

// destructuring during iteration 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, city] of countries) {
    console.log(country, city);
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}
// HTML CSS JS
// Node Express MongoDB


// destructuring object
// when we destructure the name of the variable we used to destructure should be exactly the same as the key or property of the object.
const rectangle = {
    width: 20,
    height: 10,
    area: 200
} 
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter); // 20 10 200 undefined 

// renaming during structuring --- giving a default value during declaration
let {width: w, height: h, area: a, x = 60} = rectangle; // 60 is the default value for x 
console.log(w, h, a, x); // 20 10 200 60

// object parameter with destructuring 

// example - 1
const calculatePerimeter = ({width, height}) => {
    return 2 * (width + height)
}
console.log(calculatePerimeter(rectangle)) // 60

// example - 2
const person = {
    firstName: 'caner', 
    lastName: 'aslan',
    age: 19,
    country: 'turkey',
    skills: ['html', 'css', 'js'],
    languages: ['turkish', 'english', 'spanish']
}
const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    skills,
    languages
}) => {
    let personInfo = `${firstName + ' ' + lastName} lives in ${country}.
    He is ${age} years old and he speaks ${languages.length} languages as ${languages}.
    He has been trying to learn ${skills} since September.`
    console.log(personInfo);
}
getPersonInfo(person);
// caner aslan lives in turkey.
// He is 19 years old and he speaks 3 languages as turkish,english,spanish.
// He has been trying to learn html,css,js since September.

// destructuring object during iteration 
const todoList = [
    {
        task:'Prepare JS Test',
        time:'4/1/2020 8:30',
        completed:true
    },
    {
        task:'Give JS Test',
        time:'4/1/2020 10:00',
        completed:false
    },
    {
        task:'Assess Test Result',
        time:'4/1/2020 1:00',
        completed:false
    }
]
for (const {task, time, completed} of todoList) {
    console.log(task, time, completed);
}
// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false

// when we destructure an array we use the spread operator to get the rest elements as an array.

// spread operator to get the rest of array elements 
const countries2 = ['germany', 'france', 'finland', 'sweden', 'norway', 'denmark', 'iceland'];
let [gem, fra, ...nordicCountries] = countries2;
console.log(gem, fra, ...nordicCountries); // germany france finland sweden norway denmark iceland

// spread operator to copy an array
const evens = [0, 2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];
const evenNums = [...evens];
const oddNums = [...odds];
const wholeNums = [...evens, ...odds];
console.log(evenNums);
console.log(oddNums);
console.log(wholeNums);

// spread operator to copy an object 
const user = {
    name: 'caner',
    title: 'student',
    country: 'turkey',
    city: 'istanbul'
}
const copiedUser = {...user};
console.log(copiedUser);
// {
//     name: 'caner',
//     title: 'student',
//     country: 'turkey',
//     city: 'istanbul'
// }

// modifying or changing the object while copying 
console.log({...user, title: 'front-end developer'});
// {
//     name: 'caner',
//     title: 'front-end developer',
//     country: 'turkey',
//     city: 'istanbul'
// }

// spread operator with arrow funciton
// whenever we like to write an arrow function which takes unlimited of arguments, we use a spread operator.
// if we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array
const sumAllNums = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 45, 975, 656645, 213)) // 657884


// EXERCISES

const constants = [9.81, 37, 100];
let [gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(gravity, humanBodyTemp, waterBoilingTemp); // 9.81 37 100


const countries3 = ['finland', 'estonia', 'sweden', 'denmark', 'norway'];
let [fin, est, sw, den, nor] = countries3;
console.log(fin, est, sw, den, nor); // finland estonia sweden denmark norway


const rectangle2 = {
    width: 10,
    height: 30, 
    area: 300
}
let {height: h2, width: w2, area: a2} = rectangle2;
console.log(w2, h2, a2); // 10 30 300


const users = [
    {
      userName:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      userName:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      userName:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      userName:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      userName:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      userName:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      userName:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]
for (const {userName, scores, skills, age} of users) {
    console.log(`Name: ${userName} \nScore: ${scores} \nSkills: ${skills} \nAge: ${age} \n`);
}
// Name: Brook
// Score: 75
// Skills: HTM,CSS,JS
// Age: 16

// Name: Alex
// Score: 80
// Skills: HTM,CSS,JS
// Age: 18 ---- and so on 


for (let i = 0; i < users.length; i++) {
    if (users[i].skills.length < 2) {
        console.log(users[i].userName); // John
    }
}


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [studentName, skills] = student;
let [, , jsScore, reactScore] = student[2];
console.log(studentName, skills, jsScore, reactScore); // David [ 'HTM', 'CSS', 'JS', 'React' ] 90 95


const student3 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}
let {...newStudent} = student3;
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({skill: 'Express', level: 9})
newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')
console.log(newStudent); 