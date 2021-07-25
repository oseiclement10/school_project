const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    contentUrl:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    authorId:{
        type:String,
        required:false,
    },
    relatedFields:{
        type:[String],
        required:false,
    }
});

let product = mongoose.model('products',productSchema);
module.exports = product;