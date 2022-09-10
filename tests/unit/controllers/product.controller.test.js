const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../src/controllers/productsController');
const productsModel = require('../../../src/models/productsModel');
const productsMock = require('../models/product.model.mock');

describe('Testes da camada Controller de products', () => {
    const res = {}
    const req = {}
  it('Testa a listagem de todos os produtos', async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

     sinon
      .stub(productsModel, 'selectAllProducts')
      .resolves(productsMock[0]);
    
    await productsController.getAllProducts(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productsMock[0])).to.be.equal(true);
  })

  it('Testa a listagem dos produtos por Id', async () => {
    req.params = { id: 1 }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsModel, 'selectById')
      .resolves(productsMock[0][0]);
    
    await productsController.getAllProductsById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(productsMock[0][0])).to.be.equal(true);
  })

  it('Testa se retorna erro ao não encontrar um produto com um Id específico', async () => {
    req.params = { id: 5 }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsModel, 'selectById')
      .resolves(productsMock[0][0]);
    
    await productsController.getAllProductsById(req, res);

    expect(res.status.calledWith(404)).to.be.equal(true);
  })
  afterEach(sinon.restore);
})