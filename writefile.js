const http= require('http')
const fs= require('fs');
const myServer= http.createServer((req,res)=>
{
    fs.writeFile('data12.txt','data addedd successfully',()=>
    {
        console.log("file created successfully")
        res.end(' server saying thank you for creating file')
    })
})
myServer.listen(8081,()=> console.log('thanks for creating file and added data in it'))