const saleValidation = (req, res, next) => {
  const allProducts = req.body;
  
  const idSearch = allProducts.every(({ productId }) => productId);
  if (!idSearch) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  const quantitySearch = allProducts
    .every(({ quantity }) => quantity !== null && quantity !== undefined);
  if (!quantitySearch) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const quantityNumber = allProducts.every(({ quantity }) => quantity > 0);
  if (!quantityNumber) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

 // if (!productId) {
   // return res.status(404).json({ message: 'Product not found' });
 // }
  next();
};

module.exports = saleValidation;
