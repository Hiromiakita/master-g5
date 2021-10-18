// importamos express y lo guardamos en "app" para utilizar sus metodos
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const Pool = require("pg").Pool;

// Importamos la carpeta "queries" que es donde hacemos la consulta al endpoint
const router = require("./queries");

const isProduction = process.env.NODE_ENV === "production";

dotenv.config();

// Declaramos el puerto donde correra el servidor local
const PORT = process.env.PORT || 3000;

//Permitiendo el intercambio de recursos entre el servidor Node y la aplicacion React
app.use(cors());

// Decodificamos el body que menmanda el servidor para poder leerlo
app.use(
    express.urlencoded({
        extended: true,
    })
);

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`;
const pool = new Pool({
    connectionString: isProduction
        ? process.env.DATABASE_URL
        : connectionString,
    ssl: {
        rechazarUnauthorized: false,
    },
});

app.use("/api", router);

app.use(express.static(path.join(__dirname, "/frontend/dashboard/build")));

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "/frontend/dashboard/build", "index.html")
    );
});

// decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});

module.exports = pool;
