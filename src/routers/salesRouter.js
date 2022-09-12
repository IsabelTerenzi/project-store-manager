const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.get('/', salesController.controllerGetAllSales);
salesRouter.get('/:id', salesController.controllerGetSalesById);
// salesRouter.post('/', salesController.controllerCreateSale);

module.exports = salesRouter;