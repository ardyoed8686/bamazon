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
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  shop();
});
// function which prompts the user for the ID of what they would like to buy
function shop() {
  inquirer
  .prompt({
    name: "shop",
    type: "input",
    message: "What would you like to buy?",
  })
  .then(function (answer) {
    
  })
}