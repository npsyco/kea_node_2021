/* "use strict";

// never use global vars
totalGlobalVariable = "total global var";

console.log(totalGlobalVariable);

let someVarToDel = "dont kill";
delete someVarToDel;

console.log(someVarToDel);

 */

 // const are immutable - without assinging value it will fail
 //const variableX


 let variableA;
 let variableB;

 console.log(variableA + variableB);
 console.log(variableB, variableA);


// objects are not truly immutable in js, which is why this works: the value of the object can be re-assigned
const myObj = {
    attribute: "value"
};
myObj.attribute = "other value";
// console.log(myObj) retians the orignal value because of Object.freeze

// this is one param treated as a number due to + operand
console.log(variableA + variableB);
// this is treated as a method taking two params, resulting in undefined
console.log(variableB, variableA);
// this is called type coersion
// always compare both value and types with === and !==
// so == allows type coersion
// === 'strict'-equality check, thus checking the types between the two values

// ie. 2 + 2 = 4 BUT "2" + 2 = '22'

// while true == 1 results true, true === 1 results in false. three === compares type


// file level scope - the top-level of the file is the first scope, from which all other scopes inherits
{
    let scopedVar = "abc";
    // a scope is like a stack - execution call stack.
    // stack is populated with vars - once leaving the scope, the vars will be popped
    {
        // here is a nested scope, inheriting from previous scope
        scopedVar = 123;
    }
    console.log(scopedVar);
}

{
    let scopedVar = "abc";
}

{
    let scopedVar = "abc";
    {
        let scopedVar = 123;
        console.log(scopedVar);
    }
    console.log(scopedVar);
}

function someApp() {
    let myFavNum = 42;
    const otherFavNum = favNum();
    return (myFavNum, otherFavNum);
}

// using var makes it global, so it only gets the last value after the for loop has run
for (var i = 0; i < 6; i++) {
    setTimeout(() => {
        // code runs after 1 sec
        console.log(i);
    }, 1000);
}

console.log("LINEBREAK")

for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}