const moment = require("moment");

const firstName = "chris";
const lastName = "newmark";

console.log("my name is " + firstName + " " + lastName);

console.log(`my name is still ${firstName} ${lastName}`);

console.log("BREAKLINE");

const year = "1984";
const number = 1;

const thisYear = parseInt(year) + number;
console.log(thisYear);

const currentYear = moment().calendar();
console.log(currentYear);

console.log("BREAKLINE");





//const mom1 = moment().startOf('year').from(currentYear);
//console.log(mom1);
//const mom2 = moment().calendar();
//console.log(mom2);