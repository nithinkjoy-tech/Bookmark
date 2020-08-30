const mongoose = require("mongoose")

const tag = new mongoose.Schema({
    id: {
        type: String,
        min: 3,
        max: 100,
        required: true
    },
    title: {
        type: String,
        min: 3,
        max: 1000,
        required: true
    },
    time_created:{
        type: Number,
    },
    time_updated: {
        type: Number,
    }
})

const Tag = mongoose.model("tag", tag)

module.exports = Tag