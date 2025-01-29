const { INTEGER, STRING, TEXT } = require("sequelize");
const db = require("../config/db");


let User = db.define("User",{
    id : {type : INTEGER , primaryKey : true  , autoIncrement : true },
    username : {type : STRING , allowNull : false},
    email : {type : STRING , allowNull : false , unique : true },
    password : {type : STRING , allowNull : false },
    token : {type : TEXT , allowNull: true}
},{
    timestamps : true
})

module.exports = User