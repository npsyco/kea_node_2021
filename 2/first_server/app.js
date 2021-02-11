const express = require("express"); //imports as a const, so to be used later
const app = express();

//consider what datatype to store your data in
// allowed to hardcode the id

app.get("/", (req, res) =>  {
    res.send({message: "first call to /"});
});

app.get("/anotherpath", (req, res) => {
    res.send({message: "anotherPath message"});
})

app.listen(9010);
