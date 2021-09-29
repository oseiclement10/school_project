const express = require('express');
const router = express.Router();
const {getAuthor} = require('../controllers/authorController');

router.get('/:id',getAuthor);

module.exports = router;