const mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "zavod",
  password: "ytevt.ghblevsdfnmgfhjkb"
});
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

let sqlQuery = `select employees.full_Name, post.salary, post.post_Name FROM employees join post 
            on employees.id_post_Name = post.id_post
            where full_Name like "Г%";`;
connection.query(sqlQuery, function(err, result) {
    try {
        console.log(result)
    }
    catch {console.log(err)}
});

let createTable = `ALTER TABLE employees
                    ADD COLUMN TEST_COLUMN INT DEFAULT 1`;
connection.query(createTable, function(err, result) {
    try {
        console.log(result)
    }
    catch {console.log(err)}
});
connection.query(`SELECT * FROM employees`, function(err, result) {
    try {
        console.log(result)
    }
    catch {console.log(err)}
});

connection.query(`UPDATE employees
                SET TEST_COLUMN = 25
                WHERE id_emp = 4`, function(err, result) {
        try {
            console.log(result)
        }
        catch {console.log(err)}
});
connection.query(`SELECT * FROM employees`, function(err, result) {
    try {
        console.log(result)
    }
    catch {console.log(err)}
});
connection.end(function(err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});