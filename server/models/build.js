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

// CREATE - a new build 
async function createBuild(build) {
    let sql = `
        INSERT INTO BUILD (user_id, build_name, build_details)
        VALUES (?, ?, ?);
    `;

    return await con.query(sql, [
       build.userId,
       build.buildName,
       build.buildDetails
    ]);
}

// READ - get all builds for one user
async function getBuildsByUser(userId) {
    let sql = `
        SELECT * FROM BUILD
        WHERE  user_id= ?;
    `;

    return await con.query(sql, [userId]);
}

// UPDATE - Update a build by build_id
async function updateBuild(buildId, build) {
    let sql = `
        UPDATE BUILD
        SET build_name = ?, build_details = ?
        WHERE build_id = ?;
    `;

    return await con.query(sql, [
        build.buildName,
        build.buildDetails,
        buildId
    ]);
}

// DELETE - Delete user
async function deleteBuild(buildId) {
    let sql = `
        DELETE FROM BUILD
        WHERE build_id = ?;
    `;

    return await con.query(sql, [buildId]);
}


async function getAllBuilds() {
    let sql = `
      SELECT * FROM BUILD;
    `;
    return await con.query(sql);
}

module.exports = { 
  getAllBuilds,
  createBuild,
  getBuildsByUser,
  updateBuild,
  deleteBuild 
};