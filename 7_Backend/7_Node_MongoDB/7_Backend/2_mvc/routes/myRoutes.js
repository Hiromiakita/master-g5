const express = require('express');
const createProductcontroler = require('../controllers/createProductController');
const getProductsController = require('../controllers/getProductsController');

const router = express.Router();

router.get('/api/v1/productos', getProductsController);
router.post('/api/v1/productos', createProductcontroler);

module.exports = router;