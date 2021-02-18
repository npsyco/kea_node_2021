const express = require("express");
// above is the same as:
// const express = require("./node_modules/express/index.js")

// using
// import express from 'express';
// cannot be used in node - only for browsers and frameworks like Angular!

// inside express lib:
// console.log(express);

console.log(" ");
console.log("**********  BREAKLINE  **********");
console.log(" ");

// this instantiates the library
const app = express();
// console.log(app);

// CRUD code order 
// GET, POST, PUT, DEL

// send empty json
app.get("/", (req, res) => {
    res.send({});
});

// create a route on the the endpoint me which sends back json that represents u

var me = {
    name: "doom",
    age: 2,
    animal:{
    type: "dog",
    race: "bc"
    }
};

app.get("/me", (req, res) => {
    res.send(me);
});



app.listen(8118);
