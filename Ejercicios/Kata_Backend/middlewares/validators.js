const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const router = express.Router();
const config = require("../config/config");

app.set("key", config.key);
app.use(errors());

const validationSchema = {
    createToken: (req, res) => {
        if (
            req.body.user === "manutejada@gmail.com" &&
            req.body.password === "h0l@mund0"
        ) {
            const payload = {
                check: true,
            };
            const token = jwt.sign(payload, app.get("key"), {
                expiresIn: 300,
            });
            res.json({
                response: "Autenticacion exitosa",
                token: token,
            });
        }
    },

    verifyToken: router.use((req, res, next) => {
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
            return res.json({
                response: "No se ha encontrado un token de acceso",
            });
        }
    }),

    loginParameters: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user: Joi.string()
                .email()
                .required()
                .error(
                    new Error("El usuario es requerido y debe ser un correo")
                ),
            password: Joi.string()
                .required()
                .error(
                    new Error("El password es requerido y debe ser una cadena")
                ),
        }),
    }),
};

module.exports = validationSchema;
