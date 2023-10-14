const userRouter=require("express").Router()
userRouter.get('/about' , (req,res)=>{
    res.send({
        'About':'Synonyms for ABOUT: regarding, concerning, on, of, towards, toward, with regard to, respecting; Antonyms of ABOUT: clockwise, deasil, quite, entirely, fully ..'
    })
})
userRouter.get('/contact' , (req,res)=>{
    res.send({
        'constact':'communication with someone, especially by speaking or writing to them regularly: "Have you been in contact with Andrew recently '
    })
})
userRouter.get('/massege' , (req,res)=>{
    res.send({
        'Massages':'Massage is the manipulation of the bodys soft tissues. Massage techniques are commonly applied with hands, fingers, elbows, knees, forearms, feet or a device. The purpose of massage is generally for the treatment of body stress or pain. In European countries, a person professionally trained to give massages is traditionally known as a masseur (male) or masseuse .'
    })
})
module.exports=userRouter