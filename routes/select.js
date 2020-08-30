const express=require("express")
const router=express.Router()
const Tag = require("../models/schema2")

router.post("/", async(req, res) => {
    let data = await Tag.find()
    let tags=[]
    for(let i=0;i<data.length;i++){
        tags.push(data[i].title)
    }
    let n = tags.length
    let option = req.body.option
    if (option === "bookmarks") {
        res.render("bookmarks",{tags,n})
    } else if (option === "tags") {
        res.render("tags")
    } else {
        res.status(404).send("No option found")
    }
})

module.exports=router