// FOR LOOP
// syntax 
// for (initalization, condition, increment/decrement) {
    // code goes here
// }

for (let i = 0; i <= 5; i++) {
    console.log(i); // 0 1 2 3 4 5 
}

for (let x = 5; x >=0; x--) {
    console.log(x); // 5 4 3 2 1 0
}

for (let y = 0; y <= 5; y++) {
    console.log(`${y} * ${y} = ${y * y}`);
}
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

const countries = ['turkey', 'finland', 'america', 'norway', 'sweden'];
const newArr = new Array()
for(let index = 0; index <countries.length; index++) {
    newArr.push(countries[index].toUpperCase());
}
console.log(newArr) // [ 'TURKEY', 'FINLAND', 'AMERICA', 'NORWAY', 'SWEDEN' ]

const numbers = [1, 2, 3, 4, 5];
const newArray = [];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // adding all elements in the array
    newArray.push(numbers[i] ** 2); // creating a new array based on the existing array 
}
console.log(sum); // 15
console.log(newArray); // [ 1, 4, 9, 16, 25 ]


// WHILE LOOP

let i = 0;
while ( i <= 5) {
    console.log(i); 
    i++
} // 0 1 2 3 4 5 

// do while loop
let z = 0
do {
    console.log(z);
    z++
} while (z <= 5) // 0 1 2 3 4 5 

// FOR OF LOOP 
// for (const element of array) {
    // code goes Headers;
// }

const numbers_2 = [1, 2, 3, 4, 5];
let sum_2 = 0;
for ( const num of numbers_2) {
    console.log(num); // 1 2 3 4 5 
    console.log(num * num); // 1 4 9 16 25
} 

for (const num of numbers_2) {
    sum_2 += num; // or sum_2 = sum_2 + num
}
console.log(sum_2) // 15

const companies = ['facebook', 'google', 'netflix', 'apple'];
for (const company of companies) {
    console.log(company[0].toUpperCase()); // F G N A 
    console.log(company.toUpperCase()); // FACEBOOK GOOGLE NETFLIX APPLE
}

// break is used to interrupt a loop
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i); // 0 1 2 
}

// OR you can do the same thing in this way 
// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         break
//     } else {
//         console.log(i);
//     }
// }

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i); // 0 1 2 4 5 
}


// EXERCISES

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}


for (let i = 0; i < 11; i++) {
    console.log(`${i}  ${i * i}  ${i ** 3}`);
}


for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0 || i == 0 ) {
        console.log(i); // even numbers
    } else {
        continue
    }
}


let sum_3 = 0;
for (let i = 0; i <= 100; i++) {
    sum_3 += i
}
console.log(sum_3); // 5050


let sum_4 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0 || i == 0 ) {
        sum_4 += i   
    } 
}
console.log(sum_4); // 2550 --> the sum of even numbers 


let sum_5 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        sum_5 += i   
    } 
}
console.log(sum_5); // 2500 --> the sum of odd numbers 


const sumArray = new Array();
sumArray.push(sum_4, sum_5);
console.log(sumArray); // [ 2550, 2500 ]


const randomNum = [];
for (let i = 0; i <= 5; i++) {
    randomNum.push(Math.floor(Math.random() * 101));
}
console.log(randomNum); // [ 57, 15, 35, 42, 95, 40 ]


let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
for (let i = 0; i <= 5; i++) { // 6 tane olması için 5 yazdık çünkü 0'dan başlıyor 
    id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id); // Ch5RIb


let hexCode = '#';
let hexCharacters = 'abcdefghijklmnopqrstuvwxyz';
let hexNumbers = '0123456789'; 
for (let i = 0; i <= 1; i++) {
    hexCode += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));   
    
}
for (let a = 0; a <= 1; a++) {
    hexCode += hexNumbers.charAt(Math.floor(Math.random() * hexNumbers.length)); 

}
for (let b = 0; b <= 1; b++) {
    hexCode += hexCharacters.charAt(Math.floor(Math.random() * hexCharacters.length));    
}
console.log(hexCode); // #fe72ro


const countries_2 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Ireland', 'Iceland',]
for (i = 0; i < countries_2.length; i++) {
    if (countries_2[i].includes('land')) { // her elementi teker teker kontrol ettik 
        console.log(countries_2[i]);
    } else {
        console.log(`${countries_2[i]} is without land`);
    }
}
for (let i = 0; i < countries_2.length; i++) {
    if (countries_2[i].length == 6) {
        console.log(countries_2[i]);
    }
}






