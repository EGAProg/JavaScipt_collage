const mysql = require("mysql2");
const express = require("express");

const app = express();

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "site",
    password: "ytevt.ghblevsdfnmgfhjkb"
});

