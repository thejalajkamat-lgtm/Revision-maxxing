const fs = require("fs");
// fs.writeFileSync('./test.txt', 'Hello Whore');

// fs.writeFile('./test.txt', "Hello Chut", (err) => {});
// const result = fs.readFile('./contacts.txt', "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error",err)
//     }else{
//         console.log("Result:", result)
//     }
// });
// console.log(result);


// fs.appendFileSync("./test.txt", `${Date.now()}Hey There\n`);
// fs.cpSync('./test.txt', './copy.txt');
// fs.unlink("./copy.txt", (err) => {})

// console.log(fs.statSync("./test.txt"));

fs.writeFileSync("test.txt", "Hello World");
fs.writeFile("test.txt", "Hello World Async", (err) => {});
let result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);
