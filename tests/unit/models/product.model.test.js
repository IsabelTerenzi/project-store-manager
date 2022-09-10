const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const productsModel = require('../../../src/models/productsModel');
const productsMock = require('./product.model.mock');

describe('Testes da camada Model de products', () => {
  it('Testa se todos os produtos são listados', async () => {
    sinon.stub(connection, 'execute').resolves(productsMock);

    const result = await productsModel.selectAllProducts();

    expect(result).to.equal(productsMock[0]);
  })

  it('Testa se um produto é listado pelo seu Id', async () => {
    sinon.stub(connection, 'execute').resolves(productsMock);

    const result = await productsModel.selectById(1);

    expect(result).to.equal(productsMock[0][0]);
  })
  afterEach(sinon.restore);
});
