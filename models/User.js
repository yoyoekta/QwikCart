const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
        "username": {
            "type":String,
            "required" : [true, "Username is required"]
        },
        "email" : {
            "type": String,
            "required" : [true, "Email is required"],
            "unique" : true
        },
        "password":{
            "type":String,
            "required" : [true, "Password is required"]
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("User", userSchema)