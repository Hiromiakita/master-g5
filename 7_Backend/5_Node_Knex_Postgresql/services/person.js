// Importamos el personService para pasar la data de la capa servicios a la capa de acceso a datos
const PersonDAO = require("../dao/person");

class PersonService {
    // Recibimos los datos que vienen en el request.body desde la capa de controlador y destructuramos (obtenemos) solo los datos que necesitamos insertar a la tabla que creamos en la base de datos
    createPerson(personDta) {
        const { firstName, email } = personDta;

        // Pasamos estos datos a la capa de acceso a datos
        return PersonDAO.createPerson(firstName, email);
    }
}

// Exportamos la clase para utilzarla en otros archivos
module.exports = new PersonService();
