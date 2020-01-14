const mongoose=require('mongoose')
const Student=mongoose.model('Student',{
    name:{
        type:String
    },
    address:{
        type:String
    },
    age:{
        type:Number
    },
    phone:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports=Student;