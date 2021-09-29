const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');


module.exports = function(passport){
    passport.use(new LocalStrategy((username,password,done)=>{
        let query ={
            username:username
        };
            User.findOne(query,(err,user)=>{
                if(err){
                    throw err;
                }
                if(!user){
                    return done(null,false,{message:" No user found !"});
                }else{
                    bcrypt.compare(password,user.password,(err,isMatch)=>{
                        if(err){
                            throw err;
                        }else if(isMatch){
                            return done(null,user);
                        }
                        else {
                            return done(null,false,{message:"Incorrect Password"});
                        }
                    })
                }
                
            })
    }))
    
    passport.serializeUser(function(user,done){
        done(null,user.id)
      });
      
    passport.deserializeUser(function(id,done){
        User.findById(id,(err,user)=>{
            let userInformation = {
                username:user.name,
                id:user._id,
                contact:user.contact
            }
            done(err,userInformation);
          
        })
      })    
}