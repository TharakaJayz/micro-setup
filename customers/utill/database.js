const mysql  = require('mysql8');

const pool = mysql.createPool({
    host:"localhost",
    user:'root',
    database:'microservcusdb',
    password:'4254'
});

module.exports = pool;