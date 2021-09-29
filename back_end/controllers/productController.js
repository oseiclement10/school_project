const express =  require('express');
const Product = require('../models/product');
const upload = require('express-fileupload');
const PATH = require('path');
const iPath = 'http://localhost:5000/images/';
const jPath = 'http://localhost:5000/files/';

//i need a function that will push the id of the newly created article to the publications of the current user
 
const linker = async(userId,productId)=>{

}

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
    
    if(req.user){
        console.log(req.user);
    }else{
        console.log("no user");
    }
    
     const title = req.body.title;
     const price = req.body.price || 0;
     const relatedFields = [];
     const description = req.body.description;
     const authorname = req.body.authorName;
     const authorId = req.user.id;
     console.log(authorId);
     const date = Date().substring(0,28);
     let [imageUrl,contentUrl] = (" ").split(" ");

     req.checkBody('title','title is required').notEmpty();
    
     let errors = req.validationErrors();
     if(req.body.science){
        relatedFields.push("science")
    }
    if(req.body.technology){
        relatedFields.push("technology")
    }
    if(req.body.cryptography){
        relatedFields.push("cryptography")
    }
    if(req.body.sports){
        relatedFields.push("sports")
    }
    if(req.body.biology){
        relatedFields.push("biology")
    }
    if(req.body.infastructure){
        relatedFields.push("infastructure")
    }
    if(req.body.engineering){
        relatedFields.push("engineering")
    }
    if(req.body.artificialintelligence){
        relatedFields.push("AI")
    }
    if(req.body.literature){
        relatedFields.push("literature")
    }
    if(req.body.computersciences){
        relatedFields.push("computersciences")
    }
    if(req.body.fashion){
        relatedFields.push("fashion")
    }
    if(req.body.business){
        relatedFields.push("business")
    }
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
            contentUrl =  jPath + pid + fileName.split(" ").join("");
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
                    newProduct.date = date;
                    newProduct.authorName = authorname;
                    newProduct.description = description;
                    newProduct.authorId = authorId;
                    newProduct.save();
                    res.status(200).redirect('/');
                }
      		    });
                 }else{
		            let newProduct = new Product();
                    newProduct.title = title;
                    newProduct.price = price;
                    newProduct.imageUrl = imageUrl
                    newProduct.contentUrl = contentUrl;
                    newProduct.relatedFields = relatedFields;
                    newProduct.date = date;
                    newProduct.authorName = authorname;
                    newProduct.authorId = authorId;
                    newProduct.description = description;
                    newProduct.save();
                    res.status(200).redirect('/');

                }
            })}
            }else{
                let newProduct = new Product();
                newProduct.title = title;
                newProduct.price = price;
                newProduct.contentUrl = contentUrl;
                newProduct.relatedFields = relatedFields;
                newProduct.description = description;
                newProduct.date = date;
                newProduct.authorId = authorId;
                newProduct.authorName = authorname;
                newProduct.save();
                res.status(200).redirect('/');
                
                 }
}
}

module.exports = {
    uploadProduct,
    getAllproducts,
    getProductById
};