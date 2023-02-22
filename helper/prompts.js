const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('Connected to the Employee adder')
);

function departmentAdd(){
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'department_name'
      },
    ]).then(function(answers){
      console.log(answers);
      db.query("INSERT INTO department SET ?",{
        name:answers.department_name,
      }, function(error){
        if (error) throw error;
        console.log("added department");
      })
    })
  }

function roleAdd(){
    inquirer.prompt([
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
      db.query("INSERT INTO roles SET ?",{
        title:answers.title,
        salary:answers.salary,
        department_id:answers.department_name,
      }, function(error){
        if (error) throw error;
        console.log("added role");
      })
    })
  }

function employeeAdd(){
    inquirer.prompt([
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
      db.query("INSERT INTO employees SET ?",{
        first_name:answers.first_name,
        last_name:answers.last_name,
        role_id:answers.role_id,
        manager_id:answers.manager,
      }, function(error){
        if (error) throw error;
        console.log("added employee");
      })
    })
  }

function employeeUpdate(){
    inquirer.prompt([
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
    ]).then(function(answers){
      console.log(answers);
      let choice = answers.choice
      db.query("UPDATE employees SET",{
        choice:answers.name,
      }, function(error){
        if (error) throw error;
        console.log("Updated employee");
      })
    })
  }

module.exports = { employeeUpdate, employeeAdd, roleAdd, departmentAdd }
