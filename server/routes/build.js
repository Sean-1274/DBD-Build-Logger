const express = require("express");
const router = express.Router();
const Build = require("../models/build");

router
.get("/getAllBuilds", async (req, res) => {
    try {
        const builds = await Build.getAllBuilds();
        res.send(builds);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.post("/create", async (req, res) => {
    try {
        const result = await Build.createBuild(req.body);
        res.send(result);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.get("/getByUser/:userId", async (req, res) => {
    try {
        const builds = await Build.getBuildsByUser(req.params.userId);
        res.send(builds);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.put("/update/:buildId", async (req, res) => {
    try {
        const result = await Build.updateBuild(req.params.buildId, req.body);
        res.send(result);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.delete("/delete/:buildId", async (req, res) => {
    try {
        const result = await Build.deleteBuild(req.params.buildId);
        res.send(result);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
});

module.exports = router;