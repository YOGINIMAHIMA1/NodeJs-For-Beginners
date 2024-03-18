const {add, subtract,multiply,divide}=require("./mathematics")
console.log(add(2,3))
console.log(subtract(14,2))
console.log(divide(4,2))
console.log(multiply(3,2))
// CRUD in file system

const fs= require('fs')
/*
fs.readFile('./file1.txt','utf-8',(err,data)=>
{
    if(err)
    throw err;
    console.log(data);

})
*/
fs.writeFile('./file1.txt','file created successfully', (err)=>
{
    if(err)
    throw err;
console.log("hello")
})
console.log('Hi');
//exit on uncaught error
process.on('uncaughtException',err=>
{
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
})
const path=require('path')
fs.readFile(path.join(__dirname,'files','file.txt'),'utf-8',(err,data)=>
{
    if(err)
    throw err;
console.log(data);
})
fs.appendFile('file.txt',"I can add the data ",(err,data)=>
{
    if(err)
    throw err;

})
fs.rename('file.txt','renamefile.txt',(err)=>
{
    if(err)
    throw err;
console.log("hello")
})

