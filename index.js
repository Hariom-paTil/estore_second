const express = require('express');
const app = express();
const mysql = require('mysql2');
const PORT = 5001;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '121905',
  database: 'estore',
  port: 3306,
  multipleStatements: true,
});

app.get('/', (req, res) => {
  pool.query('select * from categories', (error, categories) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(categories);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});