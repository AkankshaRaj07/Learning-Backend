const fs= require("fs");
const os=require("os");
console.log(os.cpus().length);
console.log(7);
//blocking - synchronous
const result= fs.readFileSync("contacts.txt","utf-8");
console.log(result);
console.log("1");
console.log(8473298);
//nonblocking - asynchronous
fs.readFile("contacts.txt","utf-8", (err, result) =>{
    console.log(result);
})
console.log(398752);
