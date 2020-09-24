const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("response from demo req");
});

module.exports = router;
