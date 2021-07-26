const express = require('express');
const app = express();
const config = require("./config/config");
const PORT = config.PORT;
const expressValidator = require('express-validator');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');
const productsRoute = require('./routes/productRoute');
const imageRoute = require('./routes/imageRoute');
const fileRoute = require('./routes/fileRoute');
const passport = require('passport');
const session = require('express-session');
const upload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');

const upPath = path.join(__dirname,'uploads','images');

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser("alookme!"));
app.use(session({
    secret:"alookme!",
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(upload());

app.use(expressValidator({
    errorFormatter: function(param,msg,value){
      let namespace = param.split('.')
      , root = namespace.shift()
      ,formParam = root;
    
     while(namespace.lenght){
       formParam += '[' + namespace.shift() + ']';
    }
        return {
        param: formParam,
        msg:msg,
        value:value
        };
    }
    }));
    
app.use('/users',userRoute);
app.use('/products',productsRoute);
app.use('/images',imageRoute);
app.use('/files',fileRoute);


app.get('/',(req,res)=>{
    res.redirect('/products')
})

app.listen(PORT,()=>console.log(`server started at port ${PORT} `));
connectDB();


