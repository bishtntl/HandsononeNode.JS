
const http=require("http")
const DtlNode=require('./jsondatatwo')




const str=JSON.stringify(DtlNode)
console.log(str)



const App=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write('<h1>Ques: What is Node.Js</h1>')
        res.write('<h2>Ans</h2>')
        res.write('<ol>')
        res.write('<li>Node.js is an open source server environment.</li>')
        res.write('<li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).-</li>')
        res.write('<li>Node.js uses JavaScript on the server.</li>')
        res.end()
    }
    else if(req.url==='/jsnode'){
        res.write(str)
        res.end()
    }
    else{
        res.write("page not found")
        res.end()
    }
})
App.listen(8000,()=>{
    try{
        console.log('server is running')
    }
    catch(err)
    {
        console.log(err,'error')
    }
    
})

const {jsOne}=require('./jsonData')
const blogrouter=require('./secondhand/blogrouter')
const postRouter=require('./secondhand/postrouter')
const userRouter=require('./secondhand/userrouter')
const express=require('express')
const js_Data=express();
js_Data.use("api/main",jsOne)
js_Data.use("api/main",blogrouter)
js_Data.use("api/main",postRouter)
js_Data.use("api/main",userRouter)

js_Data.listen(4500,()=>{
    try{
        console.log("server is running")
    }
    catch(err){
        console.log(err,"error")
    }
})
console.log(jsOne)
console.log(blogrouter)