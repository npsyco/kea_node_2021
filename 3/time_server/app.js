const express = require("express");
const moment = require("moment");

const app = express();

var CurrentDate = moment();

app.get("/day", (req, res) => {
    res.send(CurrentDate);
})

app.listen(8119);