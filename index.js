const inquirer = require("inquirer");
const mysql = require('mysql2');
const { inherits } = require("util");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Mosiah4:27',
      database: 'employee_db'
    })

    db.connect(function(){
    console.log(`Connected to the employee_db database.`)
   startmenu()
    });
function startmenu(){
    
}