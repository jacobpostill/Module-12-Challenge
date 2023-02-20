DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  department_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
  role_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(department_id)
  ON DELETE SET NULL
);

CREATE TABLE employees(
  employees_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employees(employees_id)
  FOREIGN KEY (role_id)
  REFERENCES roles(role_id)
  ON DELETE SET NULL
);