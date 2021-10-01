const express = require("express");
const router = express.Router();
const endpointsController = require("../controller/endpoints");

router.get("/", (req, res) => {
    res.send("Ejercicio de Knex");
});

router.get("/first-query", endpointsController.firstQuery);
router.get("/second-query", endpointsController.secondQuery);

module.exports = router;
