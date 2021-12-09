const router = require("express").Router();

const assets = require("../model/assets");

router.get("/all", (req, res) => {
    assets.getAll().then(data => {
        console.log(data);
        res.json(data);
    });
});


module.exports = router;