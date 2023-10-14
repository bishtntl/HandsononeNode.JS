const jsOne =require('express').Router()
jsOne.get('/details',(req,res)=>{
    res.send({
        "what is express":"Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects."
    })
})
module.exports={jsOne}