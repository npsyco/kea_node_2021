const express = require("express");
const moment = require("moment");

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

app.listen(8119);