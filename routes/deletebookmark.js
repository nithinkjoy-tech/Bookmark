const express=require("express")
const router=express.Router()
const User = require("../models/schema1")

router.post("/",async(req,res)=>{
    let item=(req.body.name).split("------")
    let value="bookmark"
    await User.deleteOne({title:item[0]})
    res.render("deldone",{value})
})

module.exports=router