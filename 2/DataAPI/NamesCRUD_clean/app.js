const express = require('express');
const app = express();

app.use(express.json());

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

let AUTOINCREMENT = names.length;


app.get("/names", (req, res) => {
    res.send({ data: names });
});


app.get("/names/:id", (req, res) => {
    const nameId = Number(req.params.id);
    const foundName = names.find(name => name.id === nameId);
    res.send({ data: foundName });
});


app.post("/names", (req, res) => {
    const newName = req.body;
    newName.id = ++AUTOINCREMENT;
    names.push(newName);
    res.send({ data: newName });
});


app.patch("/names/:id", (req, res) => {
    names = names.map(name => {
        if (name.id === Number(req.params.id)) {
            return { ...name, ...req.body, id: name.id};
        }
        return name;
    });
    res.send({ data: wasUpdated });
});


app.delete("/names/:id", (req, res) => {
    names = names.filter(name => name.id !== Number(req.params.id));
    res.send({ data: names });
});




const port = process.env.PORT ? process.env.PORT : 8000;
console.log(process.env.PORT);

/*
Change port in package.json - or simply use command: <npm run start-dev> for alternate port;
*/

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server @ -p: " + port);
    }
});