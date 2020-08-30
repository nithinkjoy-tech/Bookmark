const express=require("express")
const router=express.Router()
const User = require("../models/schema1")
const Tag = require("../models/schema2")

router.post("/",async(req,res)=>{
    let tag=req.body.tag
    let data = await Tag.findOne({
        title:tag
    })
    if(!data){
        return res.status(404).send("above tag is not added to tags list. Please add")
    }
    let value="added to"
    let bookmark=req.body.txt1
    data=bookmark.split("-----")
    let result = await User.findOne({
        title:data[0]
    })
    result.tags.push(tag)
    await result.save()
    res.render("donebm",{value})
})

module.exports=router