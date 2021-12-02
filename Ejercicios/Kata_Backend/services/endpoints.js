const EndpointsDAO = require("../dao/endpoints");
const validationSchema = require("../middlewares/validators");

class EndpointsService {
    // Recibimos los datos que vienen en el request.body desde la capa de controlador y destructuramos (obtenemos) solo los datos que necesitamos insertar a la tabla que creamos en la base de datos
    firstQuery() {
        return EndpointsDAO.firstQuery();
    }

    secondQuery() {
        return EndpointsDAO.secondQuery();
    }

    async createCustomer(customerDta) {
        let { first_name, last_name, email, password } = customerDta;

        if (password) password = await validationSchema.hashPassword(password);

        return EndpointsDAO.createCustomer(
            first_name,
            last_name,
            email,
            password
        );
    }
}

// Exportamos la clase para utilzarla en otros archivos
module.exports = new EndpointsService();
