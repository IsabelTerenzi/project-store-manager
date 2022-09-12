const connection = require('../connection');

const selectAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

const selectById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product[0];
};

const insertProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [product] = await connection.execute(query, [name]);
  return product.insertId;
};

module.exports = { selectAllProducts, selectById, insertProduct };