// CRUD IN FILE SYSTEM------------  C- Create  , R- read, U- update, D- delete

const fs= require('fs')
//read
fs.readFile('./file.txt','utf-8',(err,data)=>
  {
    if(err)
      throw err;
    console.log(data)
    
  })

fs.writeFile('./file.txt','data added successfully',(err)=>
  {
    if(err)
      throw err;
    console.log('hello')
  })

fs.appendFile('./file.txt','data added successfully',(err)=>
  {
    if (err)
      throw err
  })

            
            
