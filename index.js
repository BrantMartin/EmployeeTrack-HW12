const inquirer = require("inquirer");
const mysql = require("mysql2");
const { allowedNodeEnvironmentFlags } = require("process");
const { inherits } = require("util");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mosiah4:27",
  database: "employee_db",
});

db.connect(function () {
  console.log(`Connected to the employee_db database.`);
  startmenu();
});

function startmenu() {
  inquirer.prompt([
    {
      type: 'list',
      name:"options"
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
