const productsModel = require('../models/productsModel');

const serviceGetAllProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return result;
};

const serviceGetProductsById = async (id) => {
  const result = await productsModel.selectById(id);
  return result;
};

module.exports = { serviceGetAllProducts, serviceGetProductsById };