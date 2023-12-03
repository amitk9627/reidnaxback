const mongoose=require('mongoose');

const userSchema=({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const Users= mongoose.model('/user',userSchema);
module.exports=Users;