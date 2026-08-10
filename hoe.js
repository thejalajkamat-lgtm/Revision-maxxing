const express = require("express");
const app = express();
// console.log(app);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
app.get("/", (req, res) => {
    res.send("You entered the site");
})
app.get("/hoe1", (req, res) => {
    res.send("You contacted MILF");
})
app.get("/hoe2", (req, res) => {
    res.send("You contacted Latina");
})
app.get("/hoe3", (req, res) => {
    res.send("You contacted Indian bhabi");
})
app.get("*", (req, res) => {
    res.send("This hoe does not exist");
})
app.post("/", (req, res) => {
    res.send("You sent a post request");
})
// app.use( (req, res) => {
//     console.log(req);
//     console.log("request received");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// })