const express = require("express");
const app = express();


app.get("/", (req, res) => {
    // __dirname exists in Node.js
    // res.sendFile isa method in express
    // todo
    res.sendFile(__dirname + "/public/welcome.html");
});


app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html");
});


app.get("/parlor", (req, res) => {
    res.sendFile(__dirname + "/public/parlor.html");
});


app.get("/whiskey", (req, res) => {
    res.send({ bar: "served whisk"});
});


// If you enter: http://localhost:8000/pub?money=501
// you will get redirected
app.get("/pub", (req, res) => {
    if(Number(req.query.money) > 500) {
        res.redirect("/whiskey");
    } else {
        res.send({dorrman: "sry, no $$$ no drinks"});
    }
    
});


// if port is define then used that from env variables (here set in scripts in json) else run on 8000
const port = process.env.PORT ? process.env.PORT : 8000;
// alternative: const port = process.env.PORT || 8000;
//              console.log(null || 2);
console.log(process.env.PORT);

app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Server @ -p: ", port);
    }
});