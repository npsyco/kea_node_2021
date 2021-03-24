const express = require('express');
const app = express();



let names = [
    {
        id: 1,
        name: "firstName",
        rank: Math.random()
    },
    {
        id: 2,
        name: "secondName",
        rank: Math.random() +1
    }
];

let AUTOINCREMENT = 2;



app.get("/", (req, res) => {
    // __dirname exists in Node.js
    // res.sendFile isa method in express
    // todo
    res.sendFile(__dirname + "/public/welcome.html");
});


app.get("/names", (req, res) => {
    console.log(names);
    res.send({ names: names });
});


app.get("/names/:id", (req, res) => {
    // since datatype in URL is string, we need to cast as a Number
    const namesId = Number(req.params.id);
    // using === demonstrates the understood use of specific datatype (now number)
    const foundName = names.find(names => names.id === namesId);
    res.send({ names: foundName });
});


app.post("/names/:id", (req, res) => {
    const newName = req.body;
    newName.id = ++AUTOINCREMENT;
    names.push(newName);
    res.send( { data: newName } );
});


// Spread operator example:
let monke = {banana: "something"};
let krab = { banana: "bad", krab: "awful"};
console.log(krab);
// When krab is logged, it overwrites banana value (something to bad) - this is due to order


const test0 = { good: "ok" };
const test1 = { good: "overwrites ok from test0" };
const test2 = { newValue: true };

console.log({...test0, ...test1, ...test2});


// patch updates part of the resource
// put updates entire resource!
app.patch("/names/:id", (req, res) => {
    names = names.map(name => {
        if (name.id === Number(req.params.id)) {
            /* 
            This would update the entire resource as a PUT operation:
            let updatedName = req.body;
            updatedName.id = name.id; */

            // Using the spread operator, you can combine two objects - without the spread (...), 
            // the latter object would be nested in the first object
            // remember the chronology: original data first (name), followed by any updates (req.body)
            
            // Setting the id in the end, overwrites whatever the client might change, to retain the
            // id value correctly.

            return {... name, ... req.body, id: name.id};
        }
        return name;
    });
    res.send({ });
});


app.delete("/names/:id", (req, res) => {
    names = names.filter(names => namesId !== Number(req.params.id));
    // this just sends back the remaining names - it could as well be empty and prolly will 
    // have a redirect instead.
    res.send({ data: names });
});






/* app.get("/names/:id", (req, res) => {
    const nameId = Number(req.params.id);
    const foundName = names.find(names => name.id === nameId);
    res.send( { data: foundName} );
}) */
















// if port is define then used that from env variables (here set in scripts in json) else run on 8000
const port = process.env.PORT ? process.env.PORT : 8000;
// alternative: const port = process.env.PORT || 8000;
//              console.log(null || 2);
console.log(process.env.PORT);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server @ -p: " + port);
    }
});