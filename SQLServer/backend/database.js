const API_ADDR = "https://localhost:3306"
const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "site",
    password: "ytevt.ghblevsdfnmgfhjkb"
});