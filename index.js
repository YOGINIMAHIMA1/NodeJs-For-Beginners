// How to create simple http server
const http= require('http')
const myServer= http.createServer((req,res)=>
{
  console.log('request recieved successfully')
  res.end('hello from server')
})
myServer.listen(3000,()=>
{
    console.log("server creaated successfully");
})