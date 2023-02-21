const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const departmentQ = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'department_name'
    },
]

const departmentAdd = `INSERT INTO department (name)
VALUES ('${departmentQ.department_name});`

const roleQ = [
    {
        type: 'input',
        message: 'What is the title of this role?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the salary of this roll?',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'What is the ID of the department?',
        name: 'department_name',
    }
]

const roleAdd = `INSERT INTO roles (title, salary, department_id)
VALUES ('${roleQ.title}, ${roleQ.salary}', ${roleQ.department_name});`

const employeesQ = [
    {
        type: 'input',
        message: 'What is the first name of the employee?',
        name: 'first_name'
    },
    {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'last_name'
    },
    {
        type: 'input',
        message: 'What is the ID of their role?',
        name: 'role_id',
    },
    {
        type: 'input',
        message: `What is their managers ID? (If they are a manager enter 'NULL')`,
        name: 'manager',
    },
]

const employeeAdd = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('${employeesQ.first_name}, ${employeesQ.last_name}, ${employeesQ.role_id}, ${employeesQ.manager});`

const updateEmployQ = [
    {
        type: 'input',
        message: 'What is the id of the Employee you are updating?',
        name: 'iD',
    },
    {
        type: 'list',
        message: 'What would you like to change?',
        name: 'choice',
        choices: [
            {
                name: 'First Name'
            },{
                name: 'Last Name'
            },{
                name: 'Job Title'
            },{
                name: 'Department'
            },{
                name: 'Salary'
            },{
                name: 'manager'
            },
        ]
    },
    {
        type: 'input',
        message: 'What would you like to change it too?',
        name: 'change',
    },
]

const updateEmploy = `UPDATE employees
SET ${updateEmployQ.choice} = ${updateEmployQ.change}
WHERE ID = ${updateEmployQ.iD};`

module.exports = { updateEmploy, updateEmployQ, employeeAdd, employeesQ, roleAdd, roleQ, departmentAdd, departmentQ }
