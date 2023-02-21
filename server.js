const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const questions = [
    {
        type: 'list',
        message: 'What you would like to do? ',
        name: 'answer',
        choices: ['View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Quit']
    }];

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('Connected to the Employee Database')
);



console.log(`+----------------------------------------------------------+`);
console.log(`|                                                          |`);
console.log(`|     _____                 _                              |`);
console.log(`|    |  ___|_ __ ___  _ __ | | ___  _   _  ____  ____      |`);
console.log("|    |  _| | '_ ' _ \| '_ \| |/ _ \| | | |/  _ \/  _ \     |");
console.log(`|    |  |__| | | | | | |_) | | (_| | |_| |   __/   __/     |`);
console.log(`|    |_____|_| |_| |_| .__/|_|\___/\___, |\____|\____|     |`);
console.log(`|                    |_|            |___/                  |`);
console.log(`|     __  __                                               |`);
console.log(`|    |  \/  | ___ _ _ __   ___ _  ___ _  ____   _ __       |`);
console.log(`|    | |\/| |/ _ ' | '_ \ / _ ' |/ _ ' |/  _ \ | '__|      |`);
console.log(`|    | |  | | (_|  | | | | (_|  | (_|  |  ___/ |  |        |`);
console.log(`|    |_|  |_|\___,_|_| |_|\___,_|\___, |\____| |__|        |`);
console.log(`|                                |____/                    |`);
console.log(`|                                                          |`);
console.log(`+----------------------------------------------------------+`);