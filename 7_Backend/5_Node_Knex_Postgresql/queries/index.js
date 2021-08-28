//Importamos la libreria de express para utilizar su ROUTER
const express = require("express");

// Guardamos en la constante router los metodos que trae express.Router()
const router = express.Router();

// Importamos el controlador para pasar la data de la capa queries a la capa controlador
const personController = require("../controller/person");

// Utilizamos el metodo POST que viene de express.Router y le enviamos como parametro el metodo createPerson del controlador, para que este lo reciba y lo pase al servicio, esperando una respuesta
router.post("/person", personController.createPerson);

module.exports = router;
