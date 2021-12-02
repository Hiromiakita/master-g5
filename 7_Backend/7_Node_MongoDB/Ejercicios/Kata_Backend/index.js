const { errors } = require("celebrate");
const express = require("express");
const cors = require("cors");
const validationSchema = require("./middlewares/validators");
const endpointsController = require("./controller/endpoints");
const app = express();

const homeRouter = require("./routes/index");
const endpointsRouter = require("./routes/endpoints");

require("dotenv").config();
const PORT = process.env.PORT || "3000";

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/", homeRouter);
app.use(validationSchema.createToken);
app.use("/queries", endpointsRouter);
app.post("/signup", endpointsController.createCustomer);

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});

app.use(errors());
