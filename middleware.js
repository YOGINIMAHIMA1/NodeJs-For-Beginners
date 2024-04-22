const express= require('express')
const app=express()
app.use(logger)
app.get('./',(req,res)=>
{
    console.log('helllo')
    res.send('hi')

})
app.get('./users',(req,res)=>
{
    res.send('wow')
})
function logger(req,res,next)
{
   console.log('what')
   next()
}
app.listen(8080);