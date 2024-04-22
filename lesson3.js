const fsPromises=  require('fs').promises

const fileOps= async()=>{
    try{
        const data= await fsPromises.readFile('Files.txt','utf-8')
        console.log(data)
        await fsPromises.writeFile('write.txt','write file success','utf-8')
        await fsPromises.appendFile('write.txt','data updated Successfully','utf-8')
        await fsPromises.rename('write.txt','update.txt')
    } catch(err)
    {
        console.log(err)
    }
}
fileOps()
