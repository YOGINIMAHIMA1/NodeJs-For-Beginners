const http= require('http')
const fs= require('fs')
const myServer= http.createServer((req,res)=>
{
    const log= `${Date.now()}:request recieved successfully`
    fs.appendFile('log.txt',log,(err,data)=>
    {
        res.end('hello from server')
    })
})
myServer.listen(4000,()=>
console.log('server created successfully')
)