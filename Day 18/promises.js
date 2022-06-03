// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// a callback function takes two parameters. The first pararmeter is err and the second is result.
// if the err parameter is false, there will not be error other wise it will return an error
const doSomething = callbackName => {
    setTimeout(() => {
        const skills = ['html', 'css', 'bootstrap']
        callbackName('it did not go well', skills)
    }, 2000) // after 2 seconds
}
const callbackName = (err, result) => {
    if( typeof err == Number) { // false
        return console.log(err)
    } else{
        return console.log(result)
    }
}

doSomething(callbackName)


// we can create a promise using the promise constructor. we can create a new promise using thekey word new followed by the word Promise and followed by a parenthesis.
// inside the parenthesis is takes a callback function. the promise callback function has two parameters which are the resolve and reject functions.
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['js inş'];
        if (skills.length > 20) { // false 
            resolve(skills)
        } else {
            reject('something wrong has happened')
        }
    }, 500);
}); 
doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))


// the Fetch API provides an interface for fetching resources(including across the network)
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         console.log(data)
//     })
//     .catch(error => console.log(error)) // handling error if something wrong happens 


const square = async function(n) {
    return n * n;   
}
console.log(square(2)) // Promise { 4 }
// the word async in in front of a function means that function will return a promise.

const sum = async function(x, y) {
    return x + y
}
const value = await sum()
console.log(value)