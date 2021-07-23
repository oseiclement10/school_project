const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:false,
    },
    intrests:{
        type:[String],
        required:false
    },
    publications:{
        type:[String],
        required:false
    },
    momo:{
        type:Number,
        required:false
    },
    profession:{
        isStudent:Boolean,
        job:{
            type:String,
            required:false,
        },
        school:{
            type:String,
            required:false,
        },
        courses:{
            type:[String],
            required:false
        }
    },
    socials:{
        type:Map,
        requied:false
    }

});

let User = module.exports =  mongoose.model('User',userSchema);
