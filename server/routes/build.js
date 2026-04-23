const express = require("express");
const router = express.Router();
const Build = require("../models/build");

router.get("/getAllBuilds", async (req, res) => {
    try {
        const builds = await Build.getAllBuilds();
        res.send(builds);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
});

module.exports = router;