const productsService = require('../services/productService');

const getAllProducts = async (_req, res, next) => {
  try {
    const getProducts = await productsService.serviceGetAllProducts();
    res.status(200).json(getProducts);
  } catch (error) {
    next(error);
  }
};

const getAllProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getProductsId = await productsService.serviceGetProductsById(id);

    if (!getProductsId) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(getProductsId);
  } catch (error) {
    next(error);
  }
};

const controllerCreateProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createProduct = await productsService.serviceCreateProduct({ name });
    res.status(201).json(createProduct);
  } catch (error) {
    next(error);
  }
};

const controllerDeleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productsService.serviceGetProductsById(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await productsService.serviceDeleteProduct(id);
    res.status(204).end();
  } catch (error) {
    next(error).end();
  }
};

module.exports = {
  getAllProducts,
  getAllProductsById,
  controllerCreateProduct,
  controllerDeleteProduct,
};