const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const config = require("../config/config");
const { default: axios } = require("axios");

app.set("key", config.key);

const validationSchema = {
    createToken: router.post(
        "/login",
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                user: Joi.string().email().required(),
                password: Joi.string().required(),
            }),
        }),
        (req, res) => {
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
        }
    ),

    // verifyToken: router.use((req, res, next) => {
    //     const token = req.headers["access-token"];
    //     if (token) {
    //         jwt.verify(token, app.get("key"), (err, decode) => {
    //             if (err) {
    //                 return res.json({
    //                     response: "Token no valido",
    //                     error: err,
    //                 });
    //             } else {
    //                 req.decode = decode;
    //                 next();
    //             }
    //         });
    //     } else {
    //         return res.json({
    //             response: "No se ha encontrado un token de acceso",
    //         });
    //     }
    // }),

    hashPassword: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) reject(err);
                resolve(salt);
            });
        });
    },
};

module.exports = validationSchema;
