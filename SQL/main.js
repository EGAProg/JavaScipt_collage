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

connection.query(`SHOW TABLES`, function(err, result) {
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