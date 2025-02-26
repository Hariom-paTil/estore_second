const express = require('express');
const productCategories = require('./routes/product_category');
const app = express();
const cors = require('cors');
const PORT = 5001;
const products = require('./routes/product')


app.use(cors());
app.use('/productCategories',productCategories);
app.use('/products',products);
const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});