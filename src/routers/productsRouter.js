const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/search', productsController.controllerSearchProduct);
productsRouter.post('/', productsController.controllerCreateProduct);
productsRouter.get('/:id', productsController.getAllProductsById);
productsRouter.put('/:id', productsController.controllerUpdateProduct);
productsRouter.delete('/:id', productsController.controllerDeleteProduct);

module.exports = productsRouter;
