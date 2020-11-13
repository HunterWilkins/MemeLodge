const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.User.findAll({}).then(dbUsers => res.json(dbUsers)).catch(err => console.log(err));
});

router.post("/", ({body}, res) => {
    db.User.create({
        email: body.email,
        password: body.password
    }).then(dbUser => {
        res.json(dbUser);
    }).catch(err => console.log(err));
});

module.exports = router;