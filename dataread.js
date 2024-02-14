const http= require('http')
const fs= require('fs')
const myServer= http.createServer((req,res)=>
{
      fs.readFile('data12.txt',()=>
      {
        console.log('request for reading file ')
        res.end('server is reading file')
      })
})
myServer.listen(2001,()=>
{
    console.log("read file sucessfully")
})