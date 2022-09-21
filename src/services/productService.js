const productsModel = require('../models/productsModel');
const productValidation = require('../middlewares/productValidation');

const serviceGetAllProducts = async () => {
  const result = await productsModel.selectAllProducts();
  return result;
};

const serviceSearchProduct = async (name) => {
  const result = await productsModel.searchProduct(name);
  return result;
};

const serviceGetProductsById = async (id) => {
  const result = await productsModel.selectById(id);
  return result;
};

const serviceCreateProduct = async ({ name }) => {
  const { error } = productValidation.validate({ name });
  if (error) {
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
}
  const id = await productsModel.insertProduct({ name });
  return { id, name };
};

const serviceUpdateProduct = async ({ name, id }) => {
  const { error } = productValidation.validate({ name });
  if (error) {
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
}
  const result = await productsModel.updateProduct({ name, id });
  return result;
};

const serviceDeleteProduct = async (id) => {
  await productsModel.deleteProduct(id); 
};

module.exports = {
  serviceGetAllProducts,
  serviceSearchProduct,
  serviceGetProductsById,
  serviceCreateProduct,
  serviceUpdateProduct,
  serviceDeleteProduct,
};