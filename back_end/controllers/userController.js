const express =  require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const passport = require('passport');



const getUser = async (req,res) =>{
    User.findById(req.params.id,(err,user)=>{
        if(err){
            console.error(err);
            res.status(400).json({
                msg:"no user with such id"
            })
        }else{
            res.status(200).json({
                msg:user
            })
        }
    })
}

const logOutUser=(req,res)=>{
    req.logout();
    console.log("logout hitted");
    res.status(200).json({
        message:"You have been logged out successfully"
    })
}

const registerUser = async(req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    const contact  = req.body.contact;
    const publications = req.body.publications;
    const momo = req.body.momo;
    const profession = {};
    const gender = req.body.gender;
    const intrests = [];
    if(req.body.job){
        profession.job = req.body.job;
    }
    if(req.body.isStudent){
        profession.isStudent = req.body.isStudent;
    }
    if(req.body.school_name){
        profession.school=req.body.school_name;
    }
    
    if(req.body.science){
        intrests.push("science")
    }
    if(req.body.technology){
        intrests.push("technology")
    }
    if(req.body.cryptography){
        intrests.push("cryptography")
    }
    if(req.body.sports){
        intrests.push("sports")
    }
    if(req.body.biology){
        intrests.push("biology")
    }
    if(req.body.infastructure){
        intrests.push("infastructure")
    }
    if(req.body.engineering){
        intrests.push("engineering")
    }
    if(req.body.aritificialintelligence){
        intrests.push("AI")
    }
    if(req.body.literature){
        intrests.push("literature")
    }
    if(req.body.computersciences){
        intrests.push("computersciences")
    }
    if(req.body.fashion){
        intrests.push("fashion")
    }
    if(req.body.business){
        intrests.push("business")
    }



    req.checkBody('name','Name is required').notEmpty();
    req.checkBody('username','Username is required').notEmpty();
    req.checkBody('email','Email is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('password2','passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.status(400).json({
            msg:"error in form data"
        });
    }else{
        let newUser = new User();
        newUser.name = name;
        newUser.email = email;
        newUser.username = username;
        newUser.password = password;
        newUser.contact = contact;
        newUser.intrests = intrests;
        newUser.publications = publications;
        newUser.momo = momo;
        newUser.profession = profession;
        newUser.gender = gender;

        bcrypt.genSalt(10,(err,salt)=>{
          if(err){
              console.error(err);
          }else{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if (err){
                    console.log(err);
                }else{
                    newUser.password = hash;
                    newUser.save(err=>{
                        if(err){
                        console.log(err)
                     }else{
                        res.status(200).redirect('/signup/success');
                     }
                    });
                }
            })
          }
            
        })
    }

}


module.exports ={
    registerUser,
    getUser,
    logOutUser,
};