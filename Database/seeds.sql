INSERT INTO department (name)
VALUES ('Engineering'),
       ('Legal'),
       ('Sales'),
       ('HR');
       

INSERT INTO roles (title, salary, department_id)
VALUES ('Head Engineer', 200000, 1),
       ('Chemical Engineer', 100000, 1),
       ('Head Lawyer', 150000, 2),
       ('Lawyer', 100000, 2),
       ('Sales Lead', 100000, 3),
       ('Sales Person', 80000, 3),
       ('HR Manager', 90000, 4),
       ('HR Associate', 75000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Chase', 'Stokes', 1, NULL),
       ('Rudy', 'Pankow', 2, 1),
       ('Sarah', 'Cameron', 2, 1),
       ('Darth', 'Vader', 3, NULL),
       ('Luke', 'Skywalker', 4, 4),
       ('Harry', 'Potter', 5, NULL),
       ('Ron', 'Weasle', 6, 6),
       ('Froddo', 'Baggins', 6, 6),
       ('Jon', 'Snow', 7, NULL),
       ('Ned', 'Stark', 8, 9),
       ('Arya', 'Stark', 2, 1);