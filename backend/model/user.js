const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },

    Role:{
        type:String,
        default:"user"
    }


    
});

const userModel = mongoose.model('user',userSchema);
module.exports=userModel;
