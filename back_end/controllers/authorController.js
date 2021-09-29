const express = require('express');

const User = require('../models/user');

const getAuthor = async(req,res)=>{
    const author = {};
    User.findById(req.params.id,(err,user)=>{
        if(err){
            console.log(err);
            res.status(400).json({
                msg:"no user with such id"
            })
        }else{
            author.name = user.name,
            author.email = user.email,
            author.id = user._id,
            author.publications = user.publications,
            author.gender = user.gender,
            author.intrests = user.intrests,
            author.publications = user.publications
            res.status(200).json({
                msg:author,
            })
        }
    })
}
module.exports = {
    getAuthor,
}