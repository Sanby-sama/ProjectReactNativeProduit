const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://192.168.0.105:${PORT}`);
});