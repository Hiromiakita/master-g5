const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const app = express();
const endpointsController = require("../controller/endpoints");

app.set("key", config.key);

router.use((req, res, next) => {
    const token = req.headers["access-token"];
    if (token) {
        jwt.verify(token, app.get("key"), (err, decode) => {
            if (err) {
                return res.json({
                    response: "Token no valido",
                    error: err,
                });
            } else {
                req.decode = decode;
                next();
            }
        });
    } else {
        return res.json({ response: "No se ha encontrado un token de acceso" });
    }
});

router.get("/", (req, res) => {
    res.send("Ejercicio de Knex");
});

router.get("/first-query", endpointsController.firstQuery);
router.get("/second-query", endpointsController.secondQuery);

module.exports = router;
