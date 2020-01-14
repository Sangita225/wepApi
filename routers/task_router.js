const express=require('express')
const Task=require('../models/task')
const router=new express.Router()


router.post('/register',function(req, res){
    var myData=new Register(req.body);
    myData.save();
    
    })

module.exports=router;