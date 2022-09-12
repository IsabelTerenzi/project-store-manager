const express = require('express');
const productsRouter = require('./routers/productsRouter');
const salesRouter = require('./routers/salesRouter');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar!
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.use((error, _req, res, _next) => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;