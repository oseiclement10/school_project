const Product = require('../models/product');

const imageContoller = async(req,res) =>{
    let query={
        imageUrl:`http://localhost:5000/images/${req.params.id}`
    }

    let imgFile = await Product.findOne(query,(err,data)=>{
        if(err){
            console.error(err);
            return null
        }else{
            return data;
        }
    });
    if(imgFile){
        let imgUrl = req.params.id;
        try{
            res.sendFile(`${imgUrl}`,{root:'../mini_project/back_end/uploads/images'})
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

module.exports=imageContoller;