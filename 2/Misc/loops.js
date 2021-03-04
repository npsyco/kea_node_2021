// use funtional approach when looping
//ie. map, filter, reduce, find etc.

const { fail } = require("assert");

/*
const array = [];
const newArray = [];

/*
// here the for loop changes someting in newArray that are outside the scope of the for loop

for (...) {
    ...
}
newArray.push(array[i]);
}
*/


const failures = ["misclick", "falling down", "accident"];

/* const mapFail = failures.map(fails => {
    return fails;
});

console.log(mapFail); */

/* failures.map((failure, index) => {
    console.log(failure, index);
}); */


//failures.map((failure, index) => console.log(failure, index));

/* const newFailures = failures.map((failure) => {
   return { failure, hilarity: 5 };
}); */

const newFailures = failures.map((failure) => failure);

console.log(newFailures);