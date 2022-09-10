const productsService = require('../services/productService');

const getAllProducts = async (_req, res, next) => {
  try {
    const getProducts = await productsService.serviceGetAllProducts();
    res.status(200).json(getProducts);
  } catch (error) {
    next(error);
  }
};

const getAllProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProductsId = await productsService.serviceGetProductsById(id);
    
    if (!getProductsId) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(getProductsId);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getAllProductsById };