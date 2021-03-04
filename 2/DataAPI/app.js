const express = require("express");

// creates express app
const app = express();

// grants use of body parser
app.use(express.json);


// test db
const students = [
    {
        id: 1,
        name: "Chris",
        age: 34
    },
    {
            id: 2,
        name: "Peter",
        age: 99
    },
    {
            id: 3,
        name: "Fender",
        age: 2993
    }
];

// get all data
app.get("/students", (req, res) => {
    console.log(students);
    res.send({ students });
})


// how is data sent with a GET request?
// query string (params) in url: ie. localhost/port?data=someData...
// lookup anatomoy of url

// Ex.: http://localhost:9090/search?key=value
app.get("/students/:id", (req, res) => {
    const pathId = req.params.id;
    const students = students.find(students => student.id == pathId);
    console.log(req.query);
    res.send( {student} );
})

// path variables
// using : signifies dynamic content
app.get("/telegram/:message/:name", (req, res) => {
    const message = req.params.name + ", " + req.params.message + "}"
    res.send( {message: message} );
})


// POST

app.post("/post", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});



app.patch



app.delete("/delete", (req, res) => {
    console.log(req.body);
    res.send({body: req.body});
})

if(undefined) {
    console.log("with undefined this doesnt run - if it is not true, it will not run!")
}

// app.listen takes a callback as the second argument which takes error as an argument 
app.listen(9090, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is up @ p:", 9090);
});

// app.listen(9090, Error);