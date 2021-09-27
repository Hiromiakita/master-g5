const EndpointsDAO = require("../dao/endpoints");

class EndpointsService {
    // Recibimos los datos que vienen en el request.body desde la capa de controlador y destructuramos (obtenemos) solo los datos que necesitamos insertar a la tabla que creamos en la base de datos
    firstQuery() {
        return EndpointsDAO.firstQuery();
    }

    secondQuery() {
        return EndpointsDAO.secondQuery();
    }
}

// Exportamos la clase para utilzarla en otros archivos
module.exports = new EndpointsService();
