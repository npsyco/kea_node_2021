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

/* alternative solution
array of students:

const student = [
{
    id: 1,
    name: "Chris",
    age: 34
},
{
        id: 2,
    name: "Peter",
    age: 99
}
{
        id: 3,
    name: "Fender",
    age: 2993
}
];

// returns all

app.get("/students", (req, res) => {
    res.send({ students });
});

returns by Id

app.get("/students/:id", (req, res) => {
    const pathId = req.params.id;
    const students = students.find(students => student.id == pathId);
    res.send({ student });
});


*/
