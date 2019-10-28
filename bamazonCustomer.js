// require npm inquirer package
var inquirer = require("inquirer");

// require npm mysql node package
var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "macHim!8686",
  database: "bamazon_db"
});