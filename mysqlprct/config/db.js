const {Sequelize} = require("sequelize");

let db = new Sequelize("demo","root","12345",{
    host : "localhost",
    dialect : "mysql"
})

module.exports = db;