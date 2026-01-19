const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    // ❌ NO password field
});

pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL (no password)');
});

module.exports = pool;
