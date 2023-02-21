SELECT name AS Name, department_id AS 'Department ID'
FROM department;


SELECT roles.role_id AS ID, roles.title AS Title, department.name AS Department, roles.salary as Salary
FROM department
INNER JOIN roles ON department.department_id = roles.department_id;

SELECT e.employees_id as "ID", e.first_name as "First Name", e.last_name as "Last Name", roles.title as "Job Title", department.name AS "Department", roles.salary as 'Salary',CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM   employees e
LEFT JOIN   employees m on e.manager_id = m.employees_id
JOIN roles ON e.role_id = roles.role_id
JOIN department ON roles.department_id = department.department_id
ORDER BY roles.title;