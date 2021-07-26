const express = require('express');
const router = express.Router();
const {registerUser,getUser,logOutUser} = require('../controllers/userController');
const passport = require('passport');


router.post('/signup',registerUser);
router.post('/login',(req,res,next)=>{
   passport.authenticate('local',(err,user,info)=>{
       if(err){
           throw err;
       }else if(!user){
           res.status(404).redirect('/login');
       }else{
           req.login(user,err=>{
               if (err)throw err;
               res.status(400).redirect('/');
           })
       }
   })(req,res,next);
});

router.get('/currentUser',(req,res)=>{
    res.send(req.user||null);
});
router.get('/logout',logOutUser);

router.get('/:id',getUser);

module.exports = router;