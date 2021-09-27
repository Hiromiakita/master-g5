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
}

module.exports = new EndpointsController();
