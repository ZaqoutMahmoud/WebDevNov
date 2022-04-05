// filesystem in node.js [fs] > core module of nodejs
const fs = require("fs");
const fetch = require("node-fetch");

// read a file
// fs.readFile('./readme.txt', 'utf8', (err, result) => {
//     console.log(result)
// });

// write a file
//let student = {id:1,name:'michaeljackson'}
// fs.writeFile('dontreadme.txt', "This is a test", 'utf8', (err) => {
//     console.log('saved')
// })
// fs.writeFile('student.json',JSON.stringify(student),'utf8',(err)=>{
//     console.log('saved')
// })

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // here we need save that data.
    fs.writeFile("posts.json", JSON.stringify(data), "utf8", (err) => {
      console.log("Data is saved!");
    });
  });
