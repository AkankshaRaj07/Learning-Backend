const fs= require("fs");
// //sync
// fs.writeFileSync('./test.txt', 'hello there')
// //async
// fs.writeFile("./test.txt", "Hello World Async", (err) =>{});

// reading a file- sync returns result
// const result= fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result)
//asyn does not return result
// fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("error",err);

//     }
//     else{
//         console.log(result);
//     }
// })


// appending

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);