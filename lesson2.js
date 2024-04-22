const fs= require('fs');
const path= require('path')
console.log(__filename);

/*fs.readFile(path.join(__dirname,'data12.txt'),"utf-8",(err,data)=>
{
    if(err)
    throw err;
  console.log(data)
})
console.log('hello')
fs.writeFile(path.join(__dirname,'reply.txt'),'data added successfully',(err)=>
{
    if(err)
    throw err;
    console.log("helllo")
})

console.log('hi');
*/


fs.readFile(path.join(__dirname,'data12.txt'),'utf-8',(err,data)=>
{
    if(err)
    throw err;
 console.log(data)
})
console.log('hello.')
//


//
fs.writeFile(path.join(__dirname,'reply.txt'),"nice to meet you",(err)=>
{
    if(err ) throw err;
    console.log("write complete")
    fs.appendFile('./reply.txt','yes it is',(err)=>
{
  console.log('update the data')
})
})

console.log('hiiiii');
//

console.log('data appended')
