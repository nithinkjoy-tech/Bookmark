const mongoose = require("mongoose")

const user = new mongoose.Schema({
    id: {
        type: String,
        min: 3,
        max: 100,
        required: true
    },
    link: {
        type: String,
        min: 3,
        max: 1000,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    time_created:{
        type: Number,
    },
    time_updated: {
        type: Number,
    },
    publisher:{
        type:String,
        required:true
    },
    tags: {
        type: Array,
        required:true         
    }
})

const User = mongoose.model("user", user)

module.exports = User