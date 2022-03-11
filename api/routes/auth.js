const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER USER
router.post("/register",async (req,res,next)=>{
    const {username,email,password} = req.body;
    try {
        if(await User.findOne({username}))
        {
            res.json("User already exist");
        }
       // const salt = bcrypt.genSalt(15);
        const hashPassword = await bcrypt.hash(password,10);
        const user = await new User ({
            username,
            email,
            password : hashPassword
        });
        await user.save();
        user.password = undefined;
        res.json({user});


    } catch (error) {
        res.send(error);
    }
})

router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        !user && res.send("No user found");
        if(bcrypt.compare(password,user.password))
        {

            user.password = undefined;
            res.status(200).json({
                user
            })
        }
        else res.send("Wrong password");
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;