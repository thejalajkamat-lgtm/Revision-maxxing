const http = require("http");
const express = require("express");
const app = express();

app.get('/', (req,res) => {
    return res.send("Hello From Home Page");
})
app.get('/about', (req,res) => {
    return res.send(`Hello ${req.query.name}`);
})
app.get('/profile', (req,res) => {
    return res.send(`Hello from profile page`);
})
app.listen(8080, () => console.log("Server started"));

