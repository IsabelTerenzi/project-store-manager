const connection = require('../connection');

// Requisito 8 - Crie endpoints para listar vendas
const selectAllSales = async () => {
  const query = `SELECT sales_products.sale_id AS saleId, sales_products.product_id AS productId,
  sales_products.quantity, sales.date
  FROM StoreManager.sales_products AS sales_products
  INNER JOIN StoreManager.sales AS sales
  ON sales_products.sale_id = sales.id
  ORDER BY sales.id, sales_products.product_id`;
  const [sales] = await connection.execute(query);
  return sales;
};

// Requisito 8 - Crie endpoints para listar vendas
const selectSalesById = async (id) => {
  const query = `SELECT sales_products.product_id AS productId, sales_products.quantity, sales.date
  FROM StoreManager.sales_products AS sales_products
  INNER JOIN StoreManager.sales AS sales
  ON sales_products.sale_id = sales.id
  WHERE sales_products.sale_id = (?)
  ORDER BY sales.id, sales_products.product_id`;
  const [product] = await connection.execute(query, [id]);
  return product;
};

// Requisito 6 - Crie endpoint para validar e cadastrar vendas
const insertDateSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [sale] = await connection.execute(query);
  return sale.insertId;
};

const insertSale = async ({ saleId, productId, quantity }) => {
  const query = `INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  await connection.execute(query, [saleId, productId, quantity]);
  return saleId;
};

// Requisito 14 - Crie endpoint para deletar uma venda
const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = { selectAllSales, selectSalesById, insertDateSale, insertSale, deleteSale };