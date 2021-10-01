const express = require("express");
const Article = require('./models/product') ;
const  connectDB = require('./config/db');
const fs = require('fs');
const PATH = require('path');

try{
    connectDB();

    let query ={};
     Article.find(query,(err,data)=>{
         if(err){
             console.log(err);
         }else{
            console.log( typeof data);
            let data_description =  JSON.stringify(data);
            console.log(typeof data_description);
            data_description=data_description.split(',');
            data_desription=data_description.map(elem=>elem.description);
            data_description = JSON.stringify(data_description);
            fs.writeFile(PATH.join(__dirname,'description.text'),data_description,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("data write succeeded");
                    process.exit(1);
                }
            })
         }
     });
   
   

}catch(error){
    console.log(error);
    process.exit(1);
}

