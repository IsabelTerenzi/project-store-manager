const productsService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const getProducts = await productsService.serviceGetAllProducts();
  res.status(200).json(getProducts);
};

const getAllProductsById = async (req, res) => {
  const { id } = req.params;
  const getProductsId = await productsService.serviceGetProductsById(id);

  if (!getProductsId) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(getProductsId);
};

module.exports = { getAllProducts, getAllProductsById };