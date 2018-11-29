DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
ID INTEGER(11) AUTO_INCREMENT NOT NULL,
Product_Name VARCHAR(30) NOT NULL,
Department_Name  VARCHAR(30) NOT NULL,
Price DECIMAL(10,2) NULL,
Stock_Quantity INT NULL,
PRIMARY KEY (ID)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cards and Counters", "Math", 31.37, 60), ("Arithmatic Sign Box", "Math", 24.27, 60), ("Bead Decanomial", "Math", 95.99, 60), 
("Movable Alphabet", "Language", 59.99, 60), ("Grammar Boxes", "Language", 225.25 , 60), ("Word Study", "Language", 110, 60), 
("Mineral Collection", "Geography", 18.15, 60), ("Timeline of Life", "History", 80, 60), ("Clock of Era", "History", 35, 60), 
("Lower Elementary", "Classroom Packages", 10898.79, 60);

