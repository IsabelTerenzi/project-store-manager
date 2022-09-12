const productsModel = require('../models/productsModel');
const productValidation = require('../middlewares/productValidation');

const serviceGetAllProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return result;
};

const serviceGetProductsById = async (id) => {
  const result = await productsModel.selectById(id);
  return result;
};

const serviceCreateProduct = async ({ name }) => {
  const { error } = productValidation.validate({ name });
  const { details } = error;
  if (details[0].type === 'string.min') {
    throw Object.assign(
      new Error(error.message),
      { status: 422 },
    );
  }
  if (details[0].type === 'any.required') {
    throw Object.assign(
      new Error(error.message),
      { status: 400 },
    );
  }
  const id = await productsModel.insertProduct({ name });
  return { id, name };
};

module.exports = { serviceGetAllProducts, serviceGetProductsById, serviceCreateProduct };