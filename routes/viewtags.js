const express=require("express")
const router=express.Router()
const Tag = require("../models/schema2")

router.get("/", async (req, res) => {
    let data = await Tag.find()
    let tags=[]
    for(let i=0;i<data.length;i++){
        tags.push(data[i].title)
    }
    let n = tags.length
    res.render("disptag", {
        tags,
        n
    })
})

module.exports=router