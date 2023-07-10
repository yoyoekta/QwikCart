const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
        "role":{
            "type":String,
            "required" : [true, "Role is required"],
            "enum": ["user", "admin"]
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