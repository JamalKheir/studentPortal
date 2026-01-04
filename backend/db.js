const mysql = require("mysql2");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


db.query("SELECT 1", (err, results) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("DB Connected Successfully!");
  }
});


module.exports = db;