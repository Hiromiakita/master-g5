// Importar y almacenar en una variable paquete npm -> express
const express = require('express');

// Almacenamos en app lo que me entrega la función express al ser ejecutada
const app = express();

// Es común o buena práctica que el puerto sea una constante
const PORT = 3002;

// request -> información de la petición que hace el cliente
// response -> respuesta que enviaremos al cliente

app.get('/', (req, res) => {
    res.send('¡Respuesta de tu primer API!')
});

app.get('/api/v1/usuarios', (req, res) => {
    res.send('Info de todos los usuario');
});

// endpoints con params
app.get('/api/v1/usuarios/:id/codigos/:codigo/', (req, res) => {
    // req.params es un objeto con los params que obtenemos del endpoint de la petición
    console.log(req.params);
    console.log(req.params.id);

    // Extrayendo cada propiedad del objeto params
    // const idUser = req.params.id;
    // const codigoUser = req.params.codigo;

    // Extraer cada propiedad destructurando el objeto params
    const {id, codigo} = req.params;

    res.send(`Estás accediendo al usuario con el id ${id} y a su código ${codigo}`);
});

// endpoints con queries (query params)

app.get('/api/v1/usuarios/buscar', (req, res) => {
    console.log(req.query);
    const { q } = req.query;

    res.send(`Tu búsqueda es: ${q}`);
})


// Dirección local donde está corriendo nuestro backend
app.listen(PORT, () => console.log(`Backend corriendo en el puerto ${PORT}`));
