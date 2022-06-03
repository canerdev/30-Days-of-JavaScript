// JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object. 
// A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. 
// The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.
// Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

// defining a class
class Person {
    // code goes here
}

// class instantiation: instantiation class means creating an object from a class.
const person = new Person();
console.log(person) // Person {}

// class constructor is a builtin function which allows us to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis.
// Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.
// this refers of CLASS ITSELF
class Dog {
    constructor(name, age) {
        console.log(this); // Dog {}
        this.name = name; 
        this.age = age;
    }
}
const dog = new Dog();
console.log(dog); // Dog { name: undefined, age: undefined }

const dogWithValues = new Dog('tayib', 85);
console.log(dogWithValues); // Dog { name: 'tayib', age: 85 }

// creting many objects using the class
const dog1 = new Dog('akebe', 31);
const dog2 = new Dog('receb', 69);

console.log(dog1); // Dog { name: 'akepe', age: 31 }
console.log(dog2); // Dog { name: 'receb', age: 69 }

// default values with constructer
class City {
    constructor(
        name = 'istanbul',
        population = '16.000.000',
        isCapital = false,
    ) {
        this.name = name;
        this.population = population;
        this.isCapital = isCapital;
    }
}
const city = new City('antalya', '2.000.000');
console.log(city); // City { name: 'antalya', population: '2.000.000', isCapital: false }

// class methods
class User {
    constructor(userName, age, country) {
        this.userName = userName;
        this.age = age;
        this.country = country;
    }
    getUserInfo() {
        const user = `user name is ${this.userName} and he is from ${this.country}`;
        return user
    }
}
const user =  new User('caner', 19, 'turkey');
console.log(user.getUserInfo()); // user name is caner and he is from turkey

// the get method allow us to access value from the object. wwe write a get method using keyword get followed by a function. 
// instead of accessing properties directly from the object we use getter to get the value 
class Competitor {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
        this.score = 0;
        this.skills = [];
    }
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills;
    }
}
 
const competitor1 = new Competitor('caner', 19); 
console.log(competitor1); // Competitor { userName: 'caner', userAge: 19, score: 0, skills: [] }
console.log(competitor1.getScore, competitor1.getSkills)  // 0 [] --> we do not need parenthesis to call a getter method 

// the set method allows us to modify the value of certain properties.
class Students {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grade = 0;
        this.skills = [];
    }
    set setGrade(grade) {
        this.grade += grade;
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}
const student1 = new Students('caner', 19)

student1.setGrade = 95;
student1.setSkill = 'html';
student1.setSkill = 'css';

console.log(student1.grade); // 95
console.log(student1.skills); // [ 'html', 'css' ]

// regular method
class Cats {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getCatInfo() {
        let info = `My cat's name is ${this.name} and it is ${this.age}`;
        return info;
    }
}

const myCat = new Cats('cat', 5); 
console.log(myCat.getCatInfo()) // My cat's name is cat and it is 5

// static method 
class Cars {
    constructor(age, type) {
        this.age = age;
        this.type = type;
        this.year = 0;
    }
    static buyingDate() {
        let now = new Date();
        let year = now.getFullYear();
        return year;
    }
}
console.log(Cars.buyingDate()) // 2022

// Using inheritance we can access all the properties and the methods of the parent class.
class Family {
    constructor(name) {
        this.name = name;
    }
}
class Children extends Family { // parent child ilişkisi
    constructor(name, age) { // added 'age' which class family doesn't contain it
        super(name) // to access all the properties from the parent class 
        this.age = age;
    }
    saySomething() {
        console.log('hello amk');
    }
}
const c1 = new Children('caner', 19);
console.log(c1); // Children { name: 'caner', age: 19 }
console.log(c1.saySomething()); // hello amk


// EXERCISES 
class Animals {
    constructor(name, age, color, legs) {
        this.animalName = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}

class Dog2 extends Animals {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }
} 
const myDog2 = new Dog2('caner', 19, 'black', 2);
console.log(myDog2); // Dog2 { animalName: 'caner', age: 19, color: 'black', legs: 2 }

class Cat2 extends Animals {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }
}
const myCat2 = new Cat2('aslan', 31, 'white', 4);
console.log(myCat2); // Cat2 { animalName: 'aslan', age: 31, color: 'white', legs: 4 }

