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

const serviceCreateSale = async (allProducts) => {
  const searchProduct = await allProducts
    .map(({ productId }) => salesModel.selectSalesById(productId));  
  
  if (searchProduct.some((id) => id === undefined)) {
    return { status: 404, message: 'Product not found' };
  }

  const saleId = await salesModel.insertDateSale();
  
  await Promise.all(
    allProducts.map((product) =>
      salesModel.insertSale({ saleId, ...product })),
  );
  
  return { saleId };
};

const serviceDeleteSale = async (id) => {
  await salesModel.deleteSale(id); 
};

module.exports = { serviceGetAllSales, serviceGetSalesById, serviceCreateSale, serviceDeleteSale };