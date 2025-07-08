const mysql = require('mysql2');


const pool = mysql.createPool({
     host: 'switchyard.proxy.rlwy.net',
  user: 'root',
  password: 'JtfSAHomPkvIbioCJmayMGVPPjeyltON',
  database: 'railway',
  port: 20974,
  multipleStatements: true,
});

module.exports =pool;