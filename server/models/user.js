const con = require("./db_connect");
const bcrypt = require("bcrypt");

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

async function getUserByEmailOrUsername(userOrEmail) {
    let sql = `
        SELECT * FROM USER
        WHERE email = ? OR username = ?;
    `;

    const users = await con.query(sql, [userOrEmail, userOrEmail]);
    return users[0];
}

// CREATE - Register a new user
async function registerUser(user) {
    const existingUser = await getUserByEmailOrUsername(user.email);

    if (existingUser) {
        throw Error("Email already in use!");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    let sql = `
        INSERT INTO USER (first_name, last_name, email, username, password)
        VALUES (?, ?, ?, ?, ?);
    `;

    const result = await con.query(sql, [
        user.firstName,
        user.lastName,
        user.email,
        user.userName,
        hashedPassword
    ]);

    return {
        user_id: result.insertId,
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        username: user.userName
    };
}

// READ - Login user
async function loginUser(loginData) {
    const user = await getUserByEmailOrUsername(loginData.userOrEmail);

    if (!user) {
        throw Error("User not found!");
    }

    const passwordMatch = await bcrypt.compare(loginData.password, user.password);

    if (!passwordMatch) {
        throw Error("Password incorrect!");
    }

    return user;
}

// READ - Get all users
async function getAllUsers() {
    let sql = `
      SELECT * FROM USER;
    `;

    return await con.query(sql);
}

// UPDATE - Update user information
async function updateUser(userId, user) {
    let sql = `
        UPDATE USER
        SET first_name = ?, last_name = ?, email = ?, username = ?
        WHERE user_id = ?;
    `;

    return await con.query(sql, [
        user.firstName,
        user.lastName,
        user.email,
        user.userName,
        userId
    ]);
}

// DELETE - Delete user
async function deleteUser(userId) {
    let sql = `
        DELETE FROM USER
        WHERE user_id = ?;
    `;

    return await con.query(sql, [userId]);
}

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};