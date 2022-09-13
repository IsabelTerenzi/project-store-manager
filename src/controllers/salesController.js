const salesService = require('../services/salesService');

const controllerGetAllSales = async (_req, res, next) => {
  try {
    const getSales = await salesService.serviceGetAllSales();
    res.status(200).json(getSales);
  } catch (error) {
    next(error);
  }
};

const controllerGetSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSalesId = await salesService.serviceGetSalesById(id);

    if (!getSalesId.length) {
    res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(getSalesId);
  } catch (error) {
    next(error);
  }
};

const controllerCreateSale = async (req, res) => {
  try {
    const allProducts = req.body;
    const { saleId } = await salesService.serviceCreateSale(allProducts);
    return res.status(201).json({ id: saleId, itemsSold: allProducts }); 
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const controllerDeleteSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [deleteSale] = await salesService.serviceGetSalesById(id);

    if (!deleteSale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    await salesService.serviceDeleteSale(id);
    res.status(204).end();
  } catch (error) {
    next(error).end();
  }
};

module.exports = {
  controllerGetAllSales,
  controllerGetSalesById,
  controllerCreateSale,
  controllerDeleteSale,
};