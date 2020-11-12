const router = require("express").Router();

router.get("/api/users", (req, res) => {
    res.json({
        "name": "Hunter"
    });
});

module.exports = router;