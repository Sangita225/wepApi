const express=require('express')
const Students=require('../models/student')
const router=new express.Router()


router.post('/student',function(req, res){
    var myData=new Students(req.body);
    myData.save();
    
    })

    //sending request to browser
router.get('/abc',function(req,res){
res.send('hi from api')
})

router.get('/xyz',function(req,res){

})

router.get('/login',function(req,res){

})

router.get('/about',function(req,res){
    res.send("this is about page")
})

router.get('/user/:id',function(req,res){
    res.send(req.params.id)
})


router.get('/college/ktm/abc/:id',function(req,res){
    if(req.params.id%2==0){
 res.send("it is even number")
    }
    else{
        res.send("it is odd number")
    }
   
})

router.post('/signup',function(req,res){
    const data=new Students(req.body);
    data.save();
})



module.exports=router;