const router = require("express").Router();

const demo = require("./demo");
const git = require("./git");
router.use("/demo", demo);
router.use("/git", git);

module.exports = router;
