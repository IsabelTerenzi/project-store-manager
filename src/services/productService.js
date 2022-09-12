const productsModel = require('../models/productsModel');

const serviceGetAllProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return result;
};

const serviceGetProductsById = async (id) => {
  const result = await productsModel.selectById(id);
  return result;
};

const serviceCreateProduct = async ({ name }) => {
  const id = await productsModel.insertProduct({ name });
  return { id, name };
};

module.exports = { serviceGetAllProducts, serviceGetProductsById, serviceCreateProduct };