const express = require("express");
const moment = require("moment");

const app = express();

app.get("/day", (req, res) => {
    res.send(moment().date());
})

app.listen(8119);