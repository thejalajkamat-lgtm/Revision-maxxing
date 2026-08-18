const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer( (req, res) => {
    const log = `${Date.now()}: ${req.url}New Request Received\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case '/':
                res.end("Homepage");
                break;
            case '/about':
                res.end("I am Jalaj Kamat");
                break;
            default:
                res.end("404 Not Found")
        }
        // res.end("Hello from Server ");
    });
});
myServer.listen(8080, () => console.log("Server started"));

