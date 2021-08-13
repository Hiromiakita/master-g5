const express = require('express');
const app = express();
const myRoutes = require('./routes/myRoutes');

const PORT = 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Rutas API
app.use(myRoutes)

app.listen(PORT, () => { console.log(`Servidor corriendo en http://localhost:${PORT}`)});