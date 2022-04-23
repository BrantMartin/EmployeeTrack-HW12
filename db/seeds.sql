USE employee_db

INSERT INTO department (department_name)
VALUES
    ("Engineering"),
    ("Computing"),
    ("Biology");

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 250000, 1),
('Civil Engineer', 120000, 2),mys
('Drilling Engineer', 140000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Billy', 'Smith', 1, NULL),
('John', 'Jacobs', 2, NULL),
('Sam', 'Johnson', 3, NULL);