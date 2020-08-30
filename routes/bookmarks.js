const express=require("express")
const router=express.Router()
const uuid = require("uuid")
const extractDomain = require('extract-domain');
const User = require("../models/schema1")
const Tag = require("../models/schema2")
const {
    spawn
} = require("child_process")

router.post("/", async (req, res) => {
    let link = req.body.link
    let exist_link = await User.findOne({
        link
    })
    if(exist_link){
            return res.status(409).send("This link already exists")
    }
    let tag_arr = (req.body.tags).split(",")
    let len = tag_arr.length
    for (let i = 0; i < len; i++) {
        let exist_tags = await Tag.findOne({
            title: tag_arr[i]
        })
        if (!exist_tags) {
            return res.status(409).send(`There is no tag named ${tag_arr[i]}. Please create one`)
        }
    }
    let value = "bookmarks"
    let publisher = extractDomain(link)
    let time_created = Date.now()
    let time_updated = Date.now()
    const process = spawn("python", ["./extractTitle.py", `${link}`])
    process.stdout.on("data", async (title) => {
        console.log("reached")
        const users = new User({
            id: uuid.v4(),
            link,
            time_created,
            time_updated,
            title,
            publisher,
            tags: (req.body.tags).split(",")
        })

        await users.save();
        res.render("done", {
            value
        })
    })
})

module.exports=router