const express = require('express');
const router = express.Router();
const {registerUser,getUser} = require('../controllers/userController');
const passport = require('passport');

router.get('/',(req,res)=>{
    res.status(200).json({
        msg:"you have been authenticated"
    })
})

router.get('/fail',(req,res)=>{
    res.status(400).json({
        msg:"authentication failed"
    })
})
router.post('/signup',registerUser);

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    passport.authenticate('local',{
    successRedirect:"/users",failureRedirect:"/users/fail"})(req,res,next);
});

router.get('/:id',getUser);

module.exports = router;