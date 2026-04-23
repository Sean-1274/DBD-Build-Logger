const con = require("./db_connect");

async function createUserTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS USER (
        user_id INT AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        CONSTRAINT userPK PRIMARY KEY(user_id)
      );
    `;

    await con.query(sql);
}

createUserTable();

async function getAllUsers() {
    let sql = `
      SELECT * FROM USER;
    `;
    return await con.query(sql);
}

module.exports = { getAllUsers };