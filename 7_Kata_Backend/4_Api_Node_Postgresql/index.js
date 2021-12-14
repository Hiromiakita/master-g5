// importamos express y lo guardamos en "app" para utilizar sus metodos
const express = require("express");
const app = express();
const db = require("./queries");

// Declaramos el puerto donde correra el servidor local
const PORT = 3000;

// Decodificamos el body que menmanda el servidor para poder leerlo
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Mandamos un mensaje cuando se acceda a la ruta raiz de mi servidor local
app.get("/", (request, response) => {
    response.json({ info: "API utilizando NODE, POSTGRES Y EXPRESS" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

// decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en el puerto ${PORT}`);
});
