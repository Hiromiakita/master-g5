const mongoose = require("mongoose");
// importamos express y lo guardamos en "app" para utilizar sus metodos
const express = require("express");
const app = express();
const marketRoutes = require("./routes/marketRoutes");

// Declaramos el puerto donde correra el servidor local
const PORT = 3000;

// Decodificamos el body que menmanda el servidor para poder leerlo
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/api", marketRoutes);

mongoose
    .connect(
        "mongodb+srv://manu:KWHE6zaLIYDAfl6M@devf.owinl.mongodb.net/Devf?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch((err) => {
        console.log("Error al conectarse a la base de datos", err);
    });

// Mandamos un mensaje cuando se acceda a la ruta raiz de mi servidor local
app.get("/", (request, response) => {
    response.json({ info: "API utilizando NODE, MONGODB Y EXPRESS" });
});

// decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});
