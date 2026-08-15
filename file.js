const fs = require("fs");
// fs.writeFileSync('./test.txt', 'Hello Whore');

fs.writeFile('./test.txt', "Hello Chut", (err) => {});
const result = fs.readFile('./contacts.txt', "utf-8", (err, result) => {
    if(err) {
        console.log("Error",err)
    }else{
        console.log("Result:", result)
    }
});
console.log(result);
