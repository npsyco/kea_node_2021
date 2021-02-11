// create a function that returns a greeting

// function myFirstFunction() {
//     return "ohoy!";
// }

// const returnValue = myFirstFunction();

// console.log(returnValue);


// hoisting


const returnValue = myFirstFunction();

console.log(returnValue);

function myFirstFunction() {
    return "ohoy!";
}


// variable function - variables cannot be hoisted

const myVariableFunction = function() {
    console.log("test");
}

myVariableFunction();


// lambda function

const myArrowFunction = () => {
    console.log("anynomous function that is also an arrow function");
}

myArrowFunction();


// callback functions - a function passed is an argument in another function

function sayHiLater(anyFunctionReference)  {
    // simulate code running
    // ... 4 secs later ...
    anyFunctionReference();
}

// call sayHiLater and pass a callback that says "hi"

const sayHi = () => {
    console.log("hi");
}

// same with "Hello"

const sayHello = () => {
    console.log("hello");
}

sayHiLater(sayHi);
sayHiLater(sayHello);


function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "Poke " + name;
}

// call interact and let it interact with a person of name
// ex: "poke " + name

interact(poke, "Joe");

// call interact and in single line achieved:
// ex: "lick " + name


// interact((name) => {
//     return "Lick" + name;
// }, "Biden");

// same interaction using lambda

interact((name) => "Lick " + name, "Biden");