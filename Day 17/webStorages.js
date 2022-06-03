// Web Storage objects:
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to storage data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

// When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data
localStorage.setItem('key', 'value');


// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first.
// Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.

// We get data from the local storage using localStorage.getItem() method.
localStorage.getItem('key')