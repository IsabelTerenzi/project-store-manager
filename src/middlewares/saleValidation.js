const saleValidation = (allProducts) => { 
   if (allProducts.some(({ quantity }) => quantity <= 0)) {
    return { message: '"quantity" must be greater than or equal to 1' };
   }
  
  if (allProducts.some(({ productId }) => !productId)) {
    return { message: '"productId" is required' };
  }

  if (allProducts.some(({ quantity }) => !quantity)) {
    return { message: '"quantity" is required' };
  }

  return { message: 'product created' };
};

module.exports = saleValidation;
