SELECT eUni.unique_id, e.name
FROM employees e
LEFT JOIN employeeUNI eUNI ON e.id = eUNI.id;
