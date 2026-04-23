const con = require("./db_connect");

async function createBuildTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS BUILD (
        build_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        build_name VARCHAR(100) NOT NULL,
        build_details TEXT,
        CONSTRAINT fk_build_user
          FOREIGN KEY (user_id) REFERENCES USER(user_id)
      );
    `;

    await con.query(sql);
}

createBuildTable();

async function getAllBuilds() {
    let sql = `
      SELECT * FROM BUILD;
    `;
    return await con.query(sql);
}

module.exports = { getAllBuilds };