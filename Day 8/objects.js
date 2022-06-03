// SCOPE

// widnow scope means variables are already avaible in the window
a = "javascript";
b = 10; // this is a window sccope variable
console.log(a, b);

// globale scope means declared variables can be accessed every where in the same file.
// it can be global to the file or it can be global to some block of codes
let x = "javascript";
let y = 31; // is a glbobals scope. it will be found anywhere in this file
const learnScope = () => {
  console.log(x, y); // javascript 31
  if (true) {
    let x = "python";
    let y = 69;
    console.log(x, y); // python 69
  }
  console.log(x, y); // javascript 31
};
learnScope();

// local scope means variables can be accessed only in certain block of code
if (true) {
  let z = 31;
  console.log(z); // 31
}
//console.log(z); // not defined - error

// A VARIABLE DECLARED WITH VAR ONLY SCOPED TO FUNCTION BUT VARIABLE DECLARED WITH LET OR CONST IS BLOCK SCOPE(FUNCTION BLOCK, IF BLOCK, LOOP BLOCK, ETC)
// The scope let and const is the same. The difference is only reassigning. We can not change or reassign the value of const variable.

// OBJECT
const empty = {}; // an empty object
console.log(empty); // {}

const rectangle = {
  width: 20,
  length: 20,
};
console.log(rectangle); // { width: 20, length: 20 }

// accessing values of object
const person = {
  firstName: "caner",
  lastName: "aslan",
  age: 19,
  country: "turkey",
  city: "istanbul",
  skills: ["html", "css", "a bit js"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  "phone number": 5522370758,
};
console.log(person.firstName); // caner
console.log(person.skills); // [ 'html', 'css', 'a bit js' ]
// OR
console.log(person["phone number"]); // 5522370758 --> for 'phone number' we can use only the square bracket method
console.log(person["city"]); // istanbul

// creating object methods: the getFullName is function inside the person object and we call it object method. the 'this' key word refers to the object itself
// we cannot use an arrow function as object method because the word this refers to the window inside an arrow.
console.log(person.getFullName()); // caner aslan

// an object is a mutable data structure and we can modify the content of an object after it gets created
person.title = "student";
person.skills.push("react native");
person.skills.push("flutter");
person.skills.push("go");
person.isMarried = false;

person.getPersonInfo = function () {
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${this.skills}.`;
  return statement;
};
console.log(person.getPersonInfo());

// OBJECT METHODS

// Object.assing: to copy an object without modifying the original obect
// Object methods: Object.assign, Object.keys, Object.values, Object.entries,
// hasOwnProperty
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// Object.keys: to get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys); // ['firstName', 'lastName', ..., 'getPersonInfo']

// Object.values: to get values of an object as an array
const values = Object.values(copyPerson);
console.log(values); // 'caner', 'aslam', ...

// Object.entries: to get the keys and values in an array
console.log(Object.entries(copyPerson));

// hasOwnProperty: to check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name")); // false

// EXERCISES

const dog = {
  name: "dog",
  legs: 4,
  age: 1,
  bark: function () {
    return "woof woof";
  },
};
console.log(dog); // { name: 'dog', legs: 4, age: 1, bark: [Function: bark] }
dog.breed = "pitbull";
console.log(Object.keys(dog)); // [ 'name', 'legs', 'age', 'bark', 'breed' ]
dog.getDogInfo = function getDogInfo() {
  console.log(Object.assign({}, dog));
};
dog.getDogInfo();

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
};
const newUsers = {
  Caner: {
    email: "canerdevx@gmail.com",
    age: 19,
    points: 31,
  },
};
Object.assign(newUsers, users);
console.log(newUsers);


const userSkillLength = [];
let userValues = Object.values(users);
for (let i = 0; i <= 2; i++) {
  userSkillLength.push(userValues[i].skills.length);
}
console.log(Math.max(...userSkillLength)); // 8
console.log(Object.values(userValues));


const product = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  }
];


