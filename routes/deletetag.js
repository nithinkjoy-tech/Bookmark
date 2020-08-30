const express=require("express")
const router=express.Router()
const Tag = require("../models/schema2")

router.post("/",async(req,res)=>{
    let item=req.body.name
    let value="tag"
    await Tag.deleteOne({title:item})
    res.render("deldone",{value})
})

module.exports=router