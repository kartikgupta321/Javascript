// const fs = require("fs");
// let text = fs.readFileSync("test.txt","utf-8");
// text = text.replace("kartik","dikshit")
// console.log(text);
// fs.writeFileSync("dikshit.txt",text);

// tut 65
// synchronous or blocking 
// --line by line execution
// Asynchronous or non blocking 
// --line by line execution not guaranteed
// call backs will fire
// const fs = require("fs");
// fs.readFile("test.txt","utf-8",(err,data)=>
// {
//     console.log (err,data);
// });
// console.log(text);

// tut  66
// const http = require('http')
// const fs = require('fs')
// const fileContent = fs.readFileSync('index.html')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end(fileContent)
// })

// server.listen(80,'127.0.0.1',()=>{
//     console.log("listening on port 80")
// })
