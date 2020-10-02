const router = require("express").Router();
router.get("/", async (req, res) => {
    res.send("response from demo req");
});

module.exports = router;
