const connection = require('../connection');

// Requisito 1 - Crie endpoints para listar produtos
const selectAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

// Requisito 18 - Crie endpoint products/search?q=searchTerm
const searchProduct = async (name) => {
  const query = `SELECT * FROM StoreManager.products WHERE name LIKE '%${name}%'`;
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

// Requisito 10 - Crie endpoint para atualizar um produto
const updateProduct = async ({ name, id }) => {
  const query = 'UPDATE StoreManager.products SET name = (?) WHERE id = (?)';
  await connection.execute(query, [name, id]);
  const product = await selectById(id);
  return product;
};

// Requisito 12 - Crie endpoint para deletar um produto
const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  selectAllProducts,
  searchProduct,
  selectById,
  insertProduct,
  updateProduct,
  deleteProduct,
};