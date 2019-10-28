-- Drop bamazon_db if it already exists
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(25) NOT NULL,
price DECIMAL(10,2),
stock_quantity INTEGER(10)
);

-- Populate this database with around 10 different products --
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wrist Widget", "Personal Care", 29.00, 100), ("Vegemite Pack", "Grocery", 18.47, 75), ("Spam Can Safe", "Office Products", 8.50, 50), ("5pcs Makeup Sponge", "Personal Care", 12.99, 35), ("Copy Printer Paper Case", "Office Supplies", 24.99, 70), ("Carlson Cod Liver Oil 16.9oz", "Grocery", 37.43, 25), ("Dunkin' Donuts Medium Roast 60 K-cups", "Grocery", 30.82, 300), ("Sunco Lighting 6 Pack LED Bulb", "Home Improvement", 19.99, 120), ("Cosco 2-Step Step Stool", "Home Improvement", 25.99, 59), ("Avengers End Game Poster 13 x 19", "Collectibles", 24.99, 125);
