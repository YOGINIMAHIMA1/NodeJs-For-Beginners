

    const  http= require('http');
const fs=require('fs');
const myServer= http.createServer((req,res)=>
{
    const log= `${req.url} New Req  Recieved\n}`;
    fs.appendFile('log1.txt',log,(err,data)=>
    {
        switch(req.url)
        {
            case '/':res.end("Homepage");
            break;
            case '/about':res.end('I am Mahima Bh');
            break;
            default:
                res.end('404 not found');
        }
        
    });
});
myServer.listen(3000,()=>console.log("server started"));