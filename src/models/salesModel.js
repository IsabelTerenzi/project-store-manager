const connection = require('../connection');

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

/* const insertSale = async ({ saleId, productId, quantity }) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity) VALUES(?, ?, ?)`;
  await connection.execute(query, [saleId, productId, quantity]);
  return saleId;
};

const insertDateSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES ((NOW())';
  const [sale] = await connection.execute(query);
  return sale.insertId;
};
*/ 

module.exports = { selectAllSales, selectSalesById };