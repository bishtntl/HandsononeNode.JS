const postRouter=require('express').Router()

postRouter.get('/post',(req,res)=>{
    res.send("this is post page")
})
postRouter.get('/posttwo',(req,res)=>{
    res.send("Post Holdings, Inc. is an American consumer packaged goods holding company headquartered in St Louis, Missouri with businesses operating in the center-of-the-store, refrigerated, foodservice, and food ingredient categories. ")
})
postRouter.get('/postthree',(req,res)=>{
    res.send("Sign in to your India Post account. To access a range of services: Book Mails . Book to send your Letter, Parcel, Documents within India, manage your mails and view transaction history . ")
})
module.exports=postRouter