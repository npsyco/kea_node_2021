const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.static('public'));


/* Serving the pages:  */
app.get("/", (req, res) => {
    res.redirect("/home");
})
app.get("/home", (require, response) => {
    response.sendFile(__dirname + "/public/welcome.html");
})
app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/tools.html");
})
app.get("/commands", (req, res) => {
    res.sendFile(__dirname + "/public/commands.html")
})
app.get("/theory", (req, res) => {
    res.sendFile(__dirname + "/public/theory.html")
})
app.get("/snippets", (req, res) => {
    res.sendFile(__dirname + "/public/snippets.html")
})

















const port = process.env.PORT ? process.env.PORT : 8000;
console.log(process.env.PORT);
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Server @: " + port);
    }
});