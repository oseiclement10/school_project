 const express = require('express');
 const router = express.Router();
 const {uploadProduct,getAllproducts,getProductById} = require('../controllers/productController');

 router.get('/',getAllproducts);
 router.get('/:id',getProductById);
 router.post('/',uploadProduct);

 module.exports = router;