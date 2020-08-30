const express=require("express")
const router=express.Router()
const User = require("../models/schema1")

router.post("/",async(req,res)=>{
    let value="removed from"
    let bookmark=req.body.txt1
    let tag=req.body.tag
    data=bookmark.split("-----")
    await User.updateOne({title:data[0]},{$pull:{tags:{$in:[tag]}}})
    res.render("donebm",{value})
})

module.exports=router

