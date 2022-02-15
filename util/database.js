// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user : 'root',
//     database: 'node-course' ,
//     password: '191999#Mm'
// })
// module.exports=pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-course', 'root', '191999#Mm', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
