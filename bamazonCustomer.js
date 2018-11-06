//mysql package
var mysql = require("mysql");

//inquirer package
var inquirer = require("inquirer");

//creates connection to sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    //database name
    database: "bamazon_db"
});

//connects to mysql server and database
connection.connect(function (err) {
    //checks for errors
    if (err) throw err;
    //calls functions
    items();
    
})

// funtion that displays all of the items available for sale by id, name, and price
function items() {
    //connects to database to pull from the products table
    connection.query("SELECT ID, Product_Name, Price FROM products", function (err, res) {
        //checks for errors
        if (err) throw err;
        //displays results: ID, Product_Name, and Price 
        console.log(res);
        
        questions();

        connection.end();
    });
}

// // function that prompts users with two questions/messages
function questions() {
    inquirer
        .prompt([
            //asks for the ID of the product they would like to buy
            {
                type: "list",
                name: "ID",
                message: "What is the ID number of the product you would like to buy?",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            //asks how many units of the product they would like to buy
            {
                type: "list",
                name: "amount",
                message: "How many would you like to purchase?",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            }
        ])
        .then(function(answers){
            console.log(answers)
            update();
        })

}

// function update(){
// connection.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE products SET Stock_Quantity = (Stock_Quantity - ?)";
//     connection.query(sql, answers.amount, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });
// }