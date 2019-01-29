// var Sequelize = require('sequelize');
var mysql = require('mysql');
// var _ = require('lodash');

// let database = 'reactapp-cab';
// let user = 'root';
// let pass = '';

let conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'reactapp-cab'
});

try{
    conn.connect();
}catch(e){
    console.log('DB NOT CONNECTED' + e);
}


module.exports = conn;