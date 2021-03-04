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
        rank: Math.random()+1
    }
];


app.get("/names", (req, res) => {
    console.log(names);
    res.send({ names: names });
});

app.get("/names/:id", (req, res) => {
    const namesId = Number(req.params.id);
    const foundName = names.find(names => names.id === namesId);
    res.send({ names: foundName });
});


const port = 9111;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server is up @ 9111");
    }
});