const mongoose=require('mongoose')
//user model
const User=mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

//register model
const Register=mongoose.model('Register',{
    name:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
   

})
module.exports=Register;