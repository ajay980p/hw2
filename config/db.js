const mysql = require('mysql2');

const dbConnect = mysql.createConnection({
    host: "127.0.0.1",
    user: "root", // Change 'username' to 'user'
    password: "root123",
    database: "hw"
});

dbConnect.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database Connected...");
    }
});

module.exports = dbConnect;
