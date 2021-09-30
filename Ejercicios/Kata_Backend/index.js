const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config/config");
const app = express();

const homeRouter = require("./routes/index");
const endpointsRouter = require("./routes/endpoints");

require("dotenv").config();
const PORT = process.env.PORT || "3000";

app.set("key", config.key);

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/", homeRouter);
app.use("/queries", endpointsRouter);

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});

app.post("/login", (req, res) => {
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
});
