const express = require('express');
const productCategories = require('./routes/product_category');
const app = express();
const cors = require('cors');
const PORT = 5001;
const users = require('./routes/user');
const products = require('./routes/product')
const bodyparser = require('body-parser');
const orders = require('./routes/orders')

app.use(cors());
app.use(bodyparser.json());
app.use('/productCategories',productCategories);
app.use('/products',products);
app.use('/users',users);
app.use('/orders',orders);
const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5002');
});