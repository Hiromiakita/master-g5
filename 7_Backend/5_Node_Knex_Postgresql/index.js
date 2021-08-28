// importamos express y lo guardamos en "app" para utilizar sus metodos
const express = require("express");
const app = express();

// Importamos la carpeta "queries" que es donde hacemos la consulta al endpoint
const router = require("./queries");

// Declaramos el puerto donde correra el servidor local
const PORT = 3000;

// Decodificamos el body que menmanda el servidor para poder leerlo
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(router);

app.get("/", (request, response) => {
    response.json({ info: "uso de KNEX, POSTGRES Y EXPRESS" });
});

// decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});
