const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { info } = require('../server');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '2003Huskie!',
        database: 'employee_db'
    },
    console.log('Connected to the Employee adder')
);

function departmentAdd(){
    return inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'department_name'
      },
    ]).then(function(answers){
      console.log(answers);
      return db.promise().query("INSERT INTO department SET ?",{
        name:answers.department_name,
       }).then( ()=>{return console.log("added department")})
      })
    }

function roleAdd(){
    return inquirer.prompt([
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
    ]).then(function(answers){
      console.log(answers);
      return db.promise().query("INSERT INTO roles SET ?",{
        title:answers.title,
        salary:answers.salary,
        department_id:answers.department_name,
      }).then( ()=>{return console.log("added role")})
    })
  }

function employeeAdd(){
    return inquirer.prompt([
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
    ]).then(function(answers){
      console.log(answers);
      return db.promise().query("INSERT INTO employees SET ?",{
        first_name:answers.first_name,
        last_name:answers.last_name,
        role_id:answers.role_id,
        manager_id:answers.manager,
      }).then( ()=>{return console.log("added employee")})
    })
  }

function employeeUpdate(){
    return inquirer.prompt([
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
                    name: 'First Name',
                    value: 'first_name'
                },{
                    name: 'Last Name',
                    value: 'last_name'
                },{
                    name: 'Job Title',
                    value: 'roles.title'
                },{
                    name: 'Department',
                    value: 'department.name'
                },{
                    name: 'Salary',
                    value: 'roles.salary'
                },{
                    name: 'manager',
                    value: 'manager_id'
                },
            ]
        },
        {
            type: 'input',
            message: 'What would you like to change it too?',
            name: 'change',
        },
    ]).then(function(answers){
      console.log(answers);
      db.promise().query(`UPDATE employees SET ${answers.choice} = ? WHERE employees_id = ?`,[answers.change, answers.iD])
     }).then( ()=>{return console.log("Employee changed")})
    }

function deleteEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of the employee you would like to remove',
            name: 'iD',
        },
    ]).then(function(answers){
      console.log(answers);
      return db.promise().query("Delete employees WHERE",{
        employees_id:answers.iD,
     }).then( ()=>{return console.log("Employee remove")})
    })
  }

module.exports = { employeeUpdate, employeeAdd, roleAdd, departmentAdd, deleteEmployee }