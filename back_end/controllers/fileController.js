const Product = require('../models/product');

const fileContoller = async(req,res) =>{
    let query={
        contentUrl:`http://localhost:5000/files/${req.params.id}`
    }

    let contFile = await Product.findOne(query,(err,data)=>{
        if(err){
            console.error(err);
            return null
        }else{
            return data;
        }
    });
    if(contFile){
        let contUrl = req.params.id;
        try{
            res.sendFile(`${contUrl}`,{root:'../mini_project/back_end/uploads/files'})
        }catch(err){
            console.error(err);
            res.json({
                msg:"error in server"
            })
        }
    }else{
        console.log(mid);
        res.status(400).json({
            msg:"bad request no image with that url"
        })
    }
}

module.exports=fileContoller;