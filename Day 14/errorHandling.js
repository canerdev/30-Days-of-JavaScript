// try: wrap suspicious code that may throw an error in try block. the try statement allows us to define a block code to be tested for errors while it is being executed.

// catch: write code to something in catch block when an error occurs. the catch block can have parametersthat will give you error information. catch block is useed to log an error or display spedcific messages to the user.

// finally:  finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

try {
    let name
    console.log(name)
} catch(error) {
    console.log(error) // undefined
}

try {
    let firstName = 'caner';
    let fullName = firstName + ' ' + lastName;
} catch (err) {
    console.error(err)
} finally {
    console.log('i will be executed in any case');
}

try {
    let firstName = 'caner';
    let fullName = firstName + ' ' + lastName;
} catch (err) {
    console.error('name of the error: ', err.name); // name of the error:  ReferenceError
    console.log('error message: ', err.message); // error message:  lastName is not defined
} finally {
    console.log('i will be executed in any case');
}

// throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception.
throw 'error31';
throw 31;