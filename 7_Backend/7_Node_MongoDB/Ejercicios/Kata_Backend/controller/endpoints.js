const EndpointsService = require("../services/endpoints");
class EndpointsController {
    async firstQuery(request, response) {
        try {
            const items = await EndpointsService.firstQuery();
            response.status(200).json(items);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async secondQuery(request, response) {
        try {
            const items = await EndpointsService.secondQuery();
            response.status(200).json(items);
        } catch (error) {
            response.status(500).json(error);
        }
    }

    async createCustomer(request, response) {
        try {
            const id = await EndpointsService.createCustomer(request.body);
            response
                .status(201)
                .json({ message: `Usuario creado con id ${id}` });
        } catch (error) {
            console.error(error);
            response.status(500).json(error);
        }
    }
}

module.exports = new EndpointsController();
