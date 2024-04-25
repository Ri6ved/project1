const express = require('express')
const router = express.Router();
const user= require('../model/user');
router.use(express.json());

// signup api
router.post('/post',async(req,res)=>{
    try{
const data = req.body;
await user(data).save();
res.status(200).json({message:"data added"})
    }catch(error){
console.log(error);
res.status(400).json({message:"unable to register"})


    }
})





router.post('/login',async(req,res)=>{
let u = req.body.Username;
let p = req.body.Password;
console.log(u)
console.log(p)
if(!u || !p){
    res.json({message:"Username and password is required"})
}
const person = await user.findOne({Username:u})
if (!person){
res.json({message:"User no Found"});
}
try {
    if(person.Password==p){
        res.status(200).json({message:"logged in Successfully",person})
    }
    else{
        res.json({message:"login failed successfully"})
    }
} catch (error) {
    console.log(error)
}



})

router.get('/viewmypro/:id',async(req,res)=>{
    console.log(req.params.id);
    let userId = req.params.id;
    try {
        const item = await user.find({_id:userId});
res.status(200).json(item)
    } catch (error) {
        
    }
})




module.exports=router;
