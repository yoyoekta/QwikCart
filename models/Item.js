const mongoose = require('mongoose')
const User = require('./User')
const { Schema } = mongoose;

const itemSchema = new Schema({
        "itemName":{
            "type":String,
            "required" : [true, "Item name is required"],
        },
        "description" : {
            "type": String,
            "required" : [true, "Short Description is required"],
        },
        "category":{
            "type":String,
            "required" : [true, "Category is required"]
        },
        "price":{
            "type":Number,
            "required" : [true, "Price is required"]
        },
        "image":{
            "type":Object,
            "required" : [true, "Image is required"]
        },
        "quantity":{
            "type":Number,
            "default": 1
        },
        "seller":{
            "type":String,
            "required" : [true, "Seller is required"]
        },
        "user":{
            "type":mongoose.Schema.Types.ObjectId,
            "ref":"User",
        },
        "rating":{
            "type":Number,
            "min":1,
            "max":5,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Item", itemSchema)