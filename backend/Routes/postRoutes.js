const express = require('express')
const router = express.Router();
const blog = require('../model/post');

router.use(express.json());

router.post('/addblog',async(req,res)=>{
    
    try {
        const data =req.body;
        await blog(data).save()
        res.status(200).json({message:"Blog Added",data})
    } catch (error) {
        console.log(error)
        res.json({message:"Unable to add blog"})
    }
})



router.get('/viewall',async(req,res)=>{
    try {
        const data = await blog.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})



//to delete


router.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        const data = await blog.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Blog Deleted"})
    } catch (error) {
        res.status(404).send({message:"No Blog Found"});
    }
})




router.put('/edit/:id',async(req,res)=>{
    try {
        var userid = req.params.id;
        var item = req.body;
        const data = await blog.findByIdAndUpdate(userid,item)
        res.status(200).send({message:"Blog Updated Successfully"})
    } catch (error) {
        console.log(error)
    }
})

module.exports=router;