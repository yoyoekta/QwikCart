const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const connectDB = require('../db');

const register = async(req, res) => {
    try{
        await connectDB();
        const { username, email, password } = await req.body;

        const existing = await User.findOne({email: email})
        if(existing){
            return res.status(200).send({
                "success":false,
                "message": "User already exists"
            })
        }
        else{
            
            const hashedPassword = await bcrypt.hash(password, 5);

            const user = new User({
                username: username,
                email: email,
                password: hashedPassword
            })
            const savedUser = await user.save();

            return res.status(201).send({
                "success":true,
                "message": "User registered successfully",
                savedUser
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            "success":false,
            "message": "Error occurred while registering",
            err
        })
    }
}

const login = async(req, res) => {
    try{
        await connectDB();

        const {email, password} = req.body;
        const foundUser = await User.findOne({email:email});
        if(foundUser){
            console.log("User found");

            const matchPassword = await bcrypt.compare(password, foundUser.password);

            if(matchPassword){
                console.log("Password matched");
                const token = jwt.sign({userID:foundUser._id}, process.env.JWT_SECRET, {expiresIn:'1d'})
                return res.status(200).send({
                    "success":true,
                    "message":"Logged in successfully",
                    token,
                    foundUser
                })
            }
            else{
                return res.status(404).send({
                    "success":false,
                    "message":"Invalid Password"
                })
            }
        }
        else{
            return res.status(404).send({
                "success":false,
                "message":"User doesn't exist"
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            "success":false,
            "message": "Error occurred while login",
            err
        })
    }
}

const getCurrentUser = async(req, res) => {
    try{
        await connectDB();
        const user = await User.findById({_id:req.user}).select('-password');
        return res.status(200).send({
            "success":true,
            "message":"User fetched successfully",
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            "success":false,
            "message": "Error occurred while fetching user",
            err
        })
    }
}

module.exports = {register, login, getCurrentUser}