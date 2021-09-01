// Importamos el personService para pasar la data de la capa controlador a la capa servicios
const personService = require("../services/person");

class PersonController {
    // recibimos la peticion POST que viene en la capa queries
    async createPerson(request, response) {
        // Pasamos la data a la capa de servicios y si esta nos devuelve una respuesta, mandaremos un mensaje al usuario con el id del elemento que se creó
        try {
            const id = await personService.createPerson(request.body);
            response.status(201).json(id);
        } catch (error) {
            // En caso de haber error nos arroja un mensaje con el error que manda la base de datos
            console.error(error);
            response.status(500).json(error);
        }
    }
    async findPersons(request, response) {
        try {
            const items = await personService.findPersons();
            response.status(200).json(items);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async updatePerson(request, response) {
        try {
            const updateBody = await personService.updatePerson(
                request.body,
                request.params.id
            );
            response
                .status(200)
                .send(
                    `El usuario con id ${request.params.id} se ha actualizado correctamente`
                )
                .json(updateBody);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

// Exportamos la clase para utilzarla en otros archivos
module.exports = new PersonController();
