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
  showProducts();
});

// show listing of products available for sale
function showProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  })
  shopItems();
}

// function which prompts the user for the ID of what they would like to buy
function shopItems() {
  inquirer
  .prompt([
    {
    name: "item",
    type: "input",
    message: "What is your item ID?"
    }
    {
    name: "quantity",
    type: "input",
    message: "How many items do you want to buy?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
      }
    }
  ])
  .then(function (answer) {
    var chosenItem;
    for (var i = 0; i < results.length; i++) {
      if (res[i].item_id === answer.item) {
        chosenItem = res[i];
      }
    }
    console.log("You have selected ID" + chosenItem);
  })
}


 // determine if quantity is high enough
 if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
  // quantity is high enough, so update db, let the user know, and start over
  connection.query(
    "UPDATE auctions SET ? WHERE ?",
    [
      {
        highest_bid: answer.bid
      },
      {
        id: chosenItem.id
      }
    ],