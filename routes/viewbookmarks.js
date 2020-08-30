const express=require("express")
const router=express.Router()
const User = require("../models/schema1")

router.get("/", async (req, res) => {
    let data = await User.find()
    let bookmarks=[]
    let title=[]
    for(let i=0;i<data.length;i++){
        bookmarks.push((data[i].title)+"------------------        "+"["+"tags:"+data[i].tags+"]")
        title.push(data[i].title)
    }

    let n = bookmarks.length
    res.render("dispbook", {
        bookmarks,
        title,
        n
    })
})

module.exports=router