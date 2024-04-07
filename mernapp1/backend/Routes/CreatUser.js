const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')
router.post("/creatuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })],
  async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try{
  await User.create({
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
    location:req.body.location
   })
   res.json({success:true})
    }catch(error){
       console.log(error)
       res.json({success:false});
    }
})
module.exports=router;