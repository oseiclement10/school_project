const mongoose = require('mongoose');
const config = require('./config');
const connectDB = () =>{
    try{
        mongoose.connect(config.database,{
            useNewUrlParser:true,
             useUnifiedTopology:true,
        });
        
        console.log("connected to mongo database");
    }catch(err){
        console.err("error occured" + err);
        process.exit(1);
    }
}

module.exports = connectDB;

