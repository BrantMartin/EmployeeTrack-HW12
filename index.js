const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table")


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mosiah4:27",
  database: "employee_db",
});

db.connect(function () {
  console.log(`Connected to the employee_db database.`);
  startMenu();
});

function startMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name:"options",
      message: 'What would you like to do?',
      choices: ["Add Department","Add Employee","Add Role",
      "View Departments", "View Role","View Employees","Exit App"]
    }
  ]).then(({options}) => {
    switch (options) {
      case "Add Department":
          addDepartment();
        break
      case "Add Employee":
        addEmployee();
        break
      case "Add Role":
        addRole();
        break
      case "View Departments":
        viewDepartment();
        break
      case "View Role":
        viewRole();
        break
      case "View Employees":
        viewEmployees();
        break;
      default:
        db.end();
        process.exit(0);
    }
  })
}

function addDepartment() {
  inquirer.prompt([{
    type: 'input',
    name: 'departmentName',
    message: 'Enter department name.',
  }]).then(({departmentName}) =>{
    db.query('INSERT INTO department (department_name) VALUES(?);', departmentName,function(err,response){
      if(err) throw err;
      console.table(response)
      startMenu()
    })
  })
}

function viewDepartment() {
  db.query('SELECT * FROM department;',function(err,response){
    if(err) throw err;
    console.table(response)
    startMenu()
  })
}