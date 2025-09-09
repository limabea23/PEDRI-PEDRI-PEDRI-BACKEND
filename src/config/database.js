const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.connect()
    .then(() => console.log("Conexão com o banco de dados bem-sucedida!"))
    .catch(err => console.error("Erro ao conectar no banco de dados:", err));

module.exports = pool;