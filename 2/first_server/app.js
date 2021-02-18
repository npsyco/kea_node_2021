const express = require("express"); //imports as a const, so to be used later
const app = express();

var fs = require('fs');

var databaseJSONfile =  fs.readFileSync('first_db.json');
var parsedJSON = JSON.parse(databaseJSONfile);
console.log(parsedJSON);

//consider what datatype to store your data in
// allowed to hardcode the id

app.get("/", (req, res) =>  {
    res.send({parsedJSON});
});

app.get("/anotherpath", (req, res) => {
    res.send({message: "anotherPath message"});
})

app.listen(9010);
