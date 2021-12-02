var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
    response.json({ info: "uso de KNEX, POSTGRES Y EXPRESS" });
});

module.exports = router;
