import mysql from 'mysql2/promise';  // Import mysql2 with promises
import 'dotenv/config';

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
pool.getConnection()
    .then(conn => {
        console.log("✅ MySQL Database Connected!");
        conn.release();
    })
    .catch(err => console.error("❌ MySQL Connection Error: ", err));

export default pool;
