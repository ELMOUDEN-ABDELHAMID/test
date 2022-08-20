const psql = require("pg");

const Pool = psql.Pool;

const db = new Pool({
  user: "postgres",
  password: "ne!worKy2022",
  host: "networky-rds-instance.cysa9dvud0og.us-east-1.rds.amazonaws.com",
  port: 5432,
  database: "networky_db",
});

module.exports = db;