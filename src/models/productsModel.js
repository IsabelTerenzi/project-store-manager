const connection = require('../connection');

// Requisito 1 - Crie endpoints para listar produtos
const selectAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

// Requisito 1 - Crie endpoints para listar produtos
const selectById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product[0];
};

// Requisito 3 - Crie endpoint para cadastrar produtos
const insertProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [product] = await connection.execute(query, [name]);
  return product.insertId;
};

// Requisito 12 - Crie endpoint para deletar um produto
const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = { selectAllProducts, selectById, insertProduct, deleteProduct };