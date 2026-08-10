const express = require("express");
const app = express();
// console.log(app);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
app.use( (req, res) => {
    console.log("request received");
})