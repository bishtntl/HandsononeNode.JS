const blogrouter=require('express').Router()

blogrouter.get('/',(req,res)=>{
    res.send({
        "Home Page":"A home page (or homepage) is the main web page of a website. The term may also refer to the start page shown in a web browser when the application first opens. Usually, the home page is located at the root of the website's domain or subdomain. For example, if the domain is, the home page is likely located at"
    })
})

blogrouter.get('/bollywood',(req,res)=>{
    res.send({
        "BollyWood":"Bollywood Hungama, previously known as IndiaFM, is a Bollywood entertainment website, owned by Hungama Digital Media Entertainment, which acquired the website in 2000. Wikipedia"
    })
})
blogrouter.get('/hollywood',(req,res)=>{
    res.send({
        "HollyWood":"Hollywood is a neighborhood in the central region of Los Angeles County, California, mostly within the city of Los Angeles. Its name has come to be a shorthand reference for the U.S. film industry and the people associated with it. Wikipedia"
    })
})


module.exports=blogrouter