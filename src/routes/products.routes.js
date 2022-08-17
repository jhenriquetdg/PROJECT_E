const { Router } = require('express');
const ProductsController = require('../products/products.controller');

const router = Router();

router.post('/products', ProductsController.addProduct)

