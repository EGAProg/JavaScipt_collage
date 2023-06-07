import mysql from "mysql";

export const connection = mysql.createConnection({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "site_student",
    password: "ytevt.ghblevsdfnmgfhjkb"
});

connection.connect();

