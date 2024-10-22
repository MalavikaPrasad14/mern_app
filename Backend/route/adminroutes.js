const express=require('express');
const router = new express.Router();
const jwt=require('jsonwebtoken')
require("../db/connection")
const aModel = require('../model/admindata');
router.use(express.json());


router.post('/login',async(req,res)=>{
    const admin=await aModel.findOne({adminname:req.body.adminName})
    if(!admin){
         res.json({message:"admin not found"});
    }
    try{
        if(admin.password==req.body.password)
        {
            const payload={uname:req.body.adminname,pwd:req.body.password}
            const  token=jwt.sign(payload,"secret")
            res.status(200).send({message:"Login Successful",admintoken:token})

        }
    }catch(error){
        console.log(error);
    }
})
module.exports=router;
