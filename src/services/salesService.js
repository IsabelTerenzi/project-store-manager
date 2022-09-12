const salesModel = require('../models/salesModel');
// const productModel = require('../models/productsModel');
// const saleValidation = require('../middlewares/saleValidation');

const serviceGetAllSales = async () => {
  const result = await salesModel.selectAllSales();
  return result;
};

const serviceGetSalesById = async (id) => {
  const result = await salesModel.selectSalesById(id);
  return result;
};

/* const verifyValidations = ({ productId, quantity }) => {
  const { error } = saleValidation.validate({ productId, quantity });
  if (error) {
    const { details } = error;

    if (details[0].type === 'any.required') {
      throw Object.assign(
        new Error(error.message),
        { status: 400 },
      );
    }
    if (details[0].type === 'string.min') {
      throw Object.assign(
        new Error(error.message),
        { status: 422 },
      );
    }
  }
};

const serviceCreateSale = async (allProducts) => {
  const searchProduct = await allProducts
    .map(({ productId }) => productModel.selectById(productId));  
  
  if (!searchProduct) throw new Error('Product not found');

  await verifyValidations();
  
  const saleId = await salesModel.insertDateSale();

  const result = await allProducts.map((product) =>
    salesModel.insertSale({ saleId, ...product }));
  return result;
};

*/
module.exports = { serviceGetAllSales, serviceGetSalesById };