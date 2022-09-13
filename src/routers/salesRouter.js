const express = require('express');
const salesController = require('../controllers/salesController');
const saleValidation = require('../middlewares/saleValidation');

const salesRouter = express.Router();

salesRouter.get('/', salesController.controllerGetAllSales);
salesRouter.get('/:id', salesController.controllerGetSalesById);
salesRouter.delete('/:id', salesController.controllerDeleteSale);
salesRouter.post('/', saleValidation, salesController.controllerCreateSale);

module.exports = salesRouter;