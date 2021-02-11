// Exercise 1 - Retrieve value from object by key

const myObj = {message: "Hello, earthling! I bring peace."};


// ???? prints undefined ;(
function getKetByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

console.log(getKetByValue(myObj));

// Log the message 

console.log(myObj.message);

// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const me = {message: "Chris Nymark"};

console.log(me.message);

// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log(true > 0);

// Exercise 4 - Remove a property 

const thisSong = {description: "The best song in the world.", object: "I am not entirely empty"}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
console.log(thisSong);



thisSong.about = "Just a tribute";
console.log(thisSong.about);