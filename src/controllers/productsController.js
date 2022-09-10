const productsModel = require('../models/productsModel');

const getAllProducts = async (_req, res) => {
  const getProducts = await productsModel.selectAllProducts();
  res.status(200).json(getProducts);
};

const getAllProductsById = async (req, res) => {
  const { id } = req.params;
  const getProductsId = await productsModel.selectById(id);

  if (!getProductsId) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(getProductsId);
};

module.exports = { getAllProducts, getAllProductsById };