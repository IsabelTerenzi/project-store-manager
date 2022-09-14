const salesModel = require('../models/salesModel');
// const saleValidation = require('../middlewares/saleValidation');

const serviceGetAllSales = async () => {
  const result = await salesModel.selectAllSales();
  console.log(result);
  return result;
};

const serviceGetSalesById = async (id) => {
  const result = await salesModel.selectSalesById(id);
  return result;
};

const serviceCreateSale = async (allProducts) => {
  const searchProduct = await Promise.all(
    allProducts.map(({ productId }) => salesModel.selectSalesById(productId)),
);  
  
  if (searchProduct.some((product) => !product[0])) throw new Error('Product not found');

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