const express =  require('express');
const Product = require('../models/product');
const upload = require('express-fileupload');
const PATH = require('path');
const iPath = 'http://localhost:5000/images/';

const getAllproducts = async(req,res) =>{
    try{
        let data = await Product.find({});
        res.status(200).json(data);
    }catch(err){
        console.error(err);
        res.status(400).json({
            msg:"bad request"
        })
        process.exit(1);
    }
}

const getProductById = async(req,res) =>{
    try{
        let data = await Product.findById(req.params.id);
        res.status(200).json(data);
    }catch(err){
        console.error(err);
        res.status(400).json({
            msg:"bad request"
        });
        process.exit(1);

    }
}

const uploadProduct = async (req,res) => {
    
    // preset configuration
     const title = req.body.title;
     const price = req.body.price;
     const relatedFields = req.body.relatedFields;
     let [imageUrl,contentUrl]= (" ").split(" ");

     req.checkBody('title','title is required').notEmpty();
     req.checkBody('price','price is required').notEmpty();
     let errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.status(400).json({
            msg:"invalid request some parameters missing check data",
            err:errors
        })
     }else{ 
     if(req.files){
         if(req.files.contentUrl){
            let file = req.files.contentUrl;
            let fileName = file.name;
            let pid = Date.now();
            contentUrl =  pid + fileName.split(" ").join("");
             file.mv('./back_end/uploads/files/'+ pid + fileName,(err)=>{
                if(err){
                    console.error(err);
                 }else if(req.files.imageUrl){
                    let file = req.files.imageUrl;
                    let fileName =  file.name;
                    imageUrl = iPath + pid + fileName.split(" ").join("");
		           file.mv(`./back_end/uploads/images/`+ pid + fileName,(err)=>{
               	   if(err){
                    console.error(err);
                   }else{
                    let newProduct = new Product();
                    newProduct.title = title;
                    newProduct.price = price;
                    newProduct.imageUrl = imageUrl
                    newProduct.contentUrl = contentUrl;
                    newProduct.relatedFields = relatedFields;
                    newProduct.save();
                    res.status(200).json({
                        msg:"file uploaded correctly"
                    });
                }
      		    });
                 }else{
		            let newProduct = new Product();
                    newProduct.title = title;
                    newProduct.price = price;
                    newProduct.imageUrl = imageUrl
                    newProduct.contentUrl = contentUrl;
                    newProduct.relatedFields = relatedFields;
                    newProduct.save();
                    res.status(200).json({
                        msg:"file uploaded correctly"
                    });

                }
            })}
            }else{
                let newProduct = new Product();
                newProduct.title = title;
                newProduct.price = price;
                newProduct.contentUrl = contentUrl;
                newProduct.relatedFields = relatedFields;
                newProduct.save();
                res.status(200).json({
                    msg:"file uploaded nicely"
                });
                 }
}
}
module.exports = {
    uploadProduct,
    getAllproducts,
    getProductById
};