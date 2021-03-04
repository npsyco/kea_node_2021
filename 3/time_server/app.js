const { response } = require("express");
const express = require("express");
const moment = require("moment");
//const version = require(version);

const app = express();

let now = moment();

app.get("/ISO", (req, res) => {
    res.send(now.format());
});

app.get("/time", (req, res) => {
    res.send(now.format("HH:mm:ss"));
});

app.get("/day", (req, res) => {
    res.send(now.format("dddd"));
});

app.get("/month", (req, res) => {
    res.send(now.format("MMMM"));
});

app.get("/date", (req, res) => {
    res.send(now.format("dddd, MMMM Do YYYY"));
});



app.get("/about", (req, res) => {
    res.send({
        version: "1.0.0"
    });
})


app.get("/page", (req, res) => {
    res.send("<h1>Welcome<h1>");
})

app.listen(8119);

/*
// this array is put outside the scope of the get method, to avoid re-initializing the array
every time the app.get is called.

const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

the (req, res) is a function reference, so app.get does not CALL it, but merely ref. it

app.get("/day", (req, res) => {
    const currentWeekday = new Date().getDay();
    res.send({ day: weekdays[currentWeekday] });
})
*/