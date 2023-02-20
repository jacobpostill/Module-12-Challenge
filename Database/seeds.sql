
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Chase', 'Stokes', 1, NULL),
       ('Rudy', 'Pankow', 2, 1),
       ('Sarah', 'Cameron', 3, 2),
       ('Darth', 'Vader', 4, NULL),
       ('Luke', 'Skywalker', 5, 3),
       ('Harry', 'Potter', 6, 4),
       ('Ron', 'Weasle', 4, NULL),
       ('Froddo', 'Baggins', 2, NULL),
       ('Jon', 'Snow', 1, NULL),
       ('Ned', 'Stark', 6, 5),
       ('Arya', 'Stark', 5, NULL),

INSERT INTO department (name)
VALUES ('Engineering'),
       ('Legal');
       ('Sales'),
       ('HR'),
       

INSERT INTO roles (title, salary, department_id)
VALUES ('Head Engineer', 200000, 1),
       ('Chemical Engineer', 100000, 1),
       ('Head Lawyer', 150000, 2),
       ('Lawyer', 100000, 2);
       ('Sales Lead', 100000, 3),
       ('Sales Person', 80000, 3),
       ('HR Manager', 90000, 4),
       ('HR Associate', 75000, 4),

