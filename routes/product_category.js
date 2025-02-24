const express = require('express');
const productCategories = express();
const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '121905',
  database: 'estore',
  port: 3306,
  multipleStatements: true,
});

productCategories.get('/', (req, res) => {
  pool.query('select * from categories', (error, categories) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = productCategories;