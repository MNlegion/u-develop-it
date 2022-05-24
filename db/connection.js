const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '0206192819891988!Baron',
  database: 'election'
});

module.exports = db;
