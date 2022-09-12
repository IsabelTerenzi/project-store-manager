const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.controllerCreateProduct);
productsRouter.get('/:id', productsController.getAllProductsById);

module.exports = productsRouter;
