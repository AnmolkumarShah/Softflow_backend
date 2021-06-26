const config = require("../dbConfig");
const sql = require("mssql");

const userController = async (req, res, next) => {
  const pool = new sql.ConnectionPool(config);
  try {
    await pool.connect();
    const connection = new sql.Request(pool);
    const result = await connection.query("select * from co");
    res.send(result);
  } catch (e) {
    res.send(e);
  }
};

module.exports.userController = userController;
