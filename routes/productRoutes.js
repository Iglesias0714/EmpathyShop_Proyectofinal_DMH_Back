const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to create a new product
router.post('/', productController.createProduct);

// Route to add stock to a product
router.post('/:id/addStock', productController.addStock);

// Route to remove stock from a product
router.post('/:id/removeStock', productController.removeStock);

module.exports = router;
