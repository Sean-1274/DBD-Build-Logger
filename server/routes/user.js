const express = require("express");
const router = express.Router();
const User = require("../models/user");

router
.get("/getAllUsers", async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.post("/register", async (req, res) => {
    try {
        const user = await User.registerUser(req.body);
        res.send({ ...user, password: undefined });
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.post("/login", async (req, res) => {
    try {
        const user = await User.loginUser(req.body);
        res.send({ ...user, password: undefined });
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.put("/update/:userId", async (req, res) => {
    try {
        const result = await User.updateUser(req.params.userId, req.body);
        res.send(result);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.delete("/delete/:userId", async (req, res) => {
    try {
        const result = await User.deleteUser(req.params.userId);
        res.send(result);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
});

module.exports = router;