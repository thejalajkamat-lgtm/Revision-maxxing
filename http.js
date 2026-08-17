const http = require("http");
const fs = require("fs");
const myServer = http.createServer( (req, res) => {
    const log = `${Date.now()}: ${req.url}New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("Homepage");
                break;
            case '/about':
                res.end("I am Jalaj Kamat");
                break;
            default:
                res.end("404 Not Found")
        }
        res.end("Hello from Server ");
    });
});
myServer.listen(8080, () => console.log("Server started"));

