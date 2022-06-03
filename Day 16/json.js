// JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript
// object notation syntax, but the JSON format is text or string only. JSON is a light weight data
// format for storing and transporting. JSON is mostly used when data is sent from a server to
// a client. JSON is an easier-to-use alternative to XML.

// The difference is the key of a JSON object should be with double quotes or it should be a string.

// When we want to change the JSON to an object we parse the JSON using JSON.parse(). 
// When we want to change the object to JSON we use JSON.stringify().

// JSON.parse(json, [reviver]) ---  JSON to Object
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

// to use the reviver function as a formatter, we put the keys we want to fornat first name and last name value
const usersObj2 = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value === 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue;
}) 
console.log(usersObj2);


// JSON:stringify() --- Object to JSON
// it takes one requıred parameter as object and two optional parameters as replacer and space. the replacer ıs used as filter and the space ıs an indentaions.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    }
}
console.log(JSON.stringify(users, undefined, 4)); // undefined means no filter 

// using a filter array with JSON.stringify
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
}
console.log(JSON.stringify(user, ['firstName', 'lastName'], 4));
// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayeh"
// }


// EXERCISES 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
console.log(JSON.stringify(skills, undefined)) // ["HTML","CSS","JS","React","Node","Python"]


let age = 31;
const ageObj = {};
ageObj.age = age
console.log(ageObj)
console.log(JSON.stringify(ageObj)) // {"age":31}


const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
console.log(JSON.stringify(student, undefined, 4))


console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills'], 1))


const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

let txtObj = JSON.parse(txt, undefined, 4);
console.log(txtObj);
