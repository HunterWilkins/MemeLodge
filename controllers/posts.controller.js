const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Post.findAll({}).then(dbUsers => res.json(dbUsers)).catch(err => console.log(err));
});

router.post("/", ({body}, res) => {
    db.Post.create(body).then(dbPost => res.json(dbPost)).catch(err => console.log(err));
})

module.exports = router;