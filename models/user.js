const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        requried:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
// aaksh bro 
 const User = mongoose.model('User',userSchema);
 module.exports=User;