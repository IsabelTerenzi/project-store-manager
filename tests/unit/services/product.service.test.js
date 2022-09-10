const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productService');
const productsMock = require('../models/product.model.mock');

describe('Testa a camada Service de products', () => {
  it('Testa a listagem de todos os produtos', async () => {
    sinon
      .stub(productsModel, 'selectAllProducts')
      .resolves(productsMock[0]);
    
    const result = await productsService.serviceGetAllProducts();

    expect(result).to.be.equal(productsMock[0]);
  })

  it('Testa a listagem dos produtos por Id', async () => {
    sinon
      .stub(productsModel, 'selectById')
      .resolves(productsMock[0][0]);

    const result = await productsService.serviceGetProductsById(1);

    expect(result).to.be.equal(productsMock[0][0]);
  })
  afterEach(sinon.restore);
})
