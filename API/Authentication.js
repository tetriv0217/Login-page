const express=require("express");
const router = express.Router();
const User=require("../Modals/User");

router.post("/signup",async (req,res)=>{
    try{
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).send("New User Added Successfully");
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

router.post("/login",async (req,res)=>{
    try{
        console.log(req.body);
        const curUser=await User.findOne({email:req.body.email,password:req.body.password});
        console.log(curUser);
        if(curUser){
            res.status(200).send("Login Successful");
        }else
        res.status(400).send("Login Failed");
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports=router