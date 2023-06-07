import mysql from "mysql";

export const connection = mysql.createConnection({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "site",
    password: "ytevt.ghblevsdfnmgfhjkb"
});

connection.connect();
connection.query("CREATE TABLE IF NOT EXISTS `items` (id INT PRIMARY KEY AUTO_INCREMENT, text TEXT);", (err) => {
    if (err) throw err;
});

