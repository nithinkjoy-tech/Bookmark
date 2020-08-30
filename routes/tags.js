const express=require("express")
const router=express.Router()
const Tag = require("../models/schema2")
const uuid = require("uuid")

router.post("/", async (req, res) => {
    let title = req.body.title
    let tag = await Tag.findOne({
        title
    })
    if (tag) {
        return res.status(409).send("This tag already exists")
    }
    let time_created = Date.now()
    let time_updated = Date.now()
    let value = "tags"
    const tags = new Tag({
        id: uuid.v4(),
        title,
        time_created,
        time_updated,
    })

    await tags.save();
    res.render("done", {
        value
    })
})

module.exports=router