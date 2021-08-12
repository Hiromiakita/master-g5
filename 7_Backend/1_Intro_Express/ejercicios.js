// Ejercicio 1: Intro a Express.js

// ¿Cómo envío un JSON como respuesta?
// ¿Cómo envío el status code?

const express = require('express');

const app = express();

const PORT = 3000;

// 1. Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json: 
//             { 'mensaje':'hola mundo' }

app.get('/api/', (request, response) => {
    // response.status(200);
    // response.json({ mensaja: 'hola mundo' });

    response
        .status(200)
        .json({ mensaje: 'hola mundo' });
})


// 2. Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente:
//             { 'resultado': 7 }


app.get('/api/suma', (req, res) => {
    const {num1, num2} = req.query;
    const resultadoSuma = parseInt(num1) + parseInt(num2);

    res
        .status(200)
        .json({resultado: resultadoSuma});
})

// 3. Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//             { 'usuario': 'Edwin' }

app.get('/api/:usuario', (req, res) => {
    const {usuario} = req.params;
    res
        .status(200)
        .json({usuario});
})


// 4. Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
// } }

// 5. Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:

// { "nombre": "Hiromi", "ocupacion": "Sensei" }

// Entonces, el servidor debe responder con un objeto idéntico al que envía el cliente, junto con un status de respuesta 200.

// 6.  Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, a través de una petición POST que responda con el status 200

// 7.  Crea un endpoint para una petición de tipo DELETE donde envíes un ID (un número cualquiera) a través de params. 

// 8. Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje "se ha eliminado el objeto con ID 3", de lo contrario, si envían cualquier otro número como ID, responde con un status 404 y el mensaje "No se encontró el objeto con el ID especificado".

app.listen(PORT, () => console.log(`Server runnig at port: ${PORT} `));