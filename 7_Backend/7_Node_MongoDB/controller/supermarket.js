const marketModels = require("../model/supermarket");
const articleModel = marketModels.articleModel;
const ticketModel = marketModels.ticketModel;

class MarketControllers {
    createArticle = (req, res) => {
        const article = new articleModel({
            nombre: req.body.nombre,
            precio: req.body.precio,
            existencias: req.body.existencias,
        });
        return article
            .save()
            .then((newArticle) => {
                res.status(201).json({
                    success: true,
                    message: "Articulo agregado a la coleccion",
                    articleCreated: newArticle,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo agregar el articulo a la coleccion",
                    error: err.message,
                });
            });
    };

    createTicket = (req, res) => {
        articleModel
            .findById(req.body.articleId)
            .exec()
            .then((article) => {
                if (!article) {
                    res.status(404).json({
                        success: false,
                        message: "No se encontro el articulo en la coleccion",
                    });
                }
                const ticket = new ticketModel({
                    subtotal: req.body.subtotal,
                    total: req.body.total,
                    iva: req.body.iva,
                    articulos: req.body.articleId,
                });
                return ticket.save().then((newArticle) => {
                    res.status(201).json({
                        success: true,
                        message: "Ticket creado",
                        ticketCreated: newArticle,
                    });
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo crear el ticket",
                    error: err,
                });
            });
    };

    findAllTickets(req, res) {
        return ticketModel
            .find()
            .populate({ path: "articulos", select: "nombre" })
            .exec()
            .then((Tickets) => {
                res.status(200).json({
                    success: true,
                    message: "Tickets encontrados",
                    ticketsFound: Tickets,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo encontrar tickets en la coleccion",
                    error: err.message,
                });
            });
    }

    findAllArticles(req, res) {
        return articleModel
            .find()
            .exec()
            .then((Articles) => {
                res.status(200).json({
                    success: true,
                    message: "Articulos encontrados",
                    articlesFound: Articles,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo encontrar articulos en la coleccion",
                    error: err.message,
                });
            });
    }

    findArticle(req, res) {
        const articleId = req.params.id;
        return articleModel
            .findById(articleId)
            .exec()
            .then((Article) => {
                res.status(200).json({
                    success: true,
                    message: "Articulo encontrado",
                    articlesFound: Article,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo encontrar el articulo en la coleccion",
                    error: err.message,
                });
            });
    }

    updateArticle(req, res) {
        const articleId = req.params.id;
        return articleModel
            .findByIdAndUpdate(articleId, { $set: req.body }, { new: true })
            .exec()
            .then((Article) => {
                res.status(200).json({
                    success: true,
                    message: "Articulo actualizado",
                    articlesFound: Article,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message:
                        "No se pudo actualizar el articulo en la coleccion",
                    error: err.message,
                });
            });
    }

    deleteArticle(req, res) {
        const articleId = req.params.id;
        return articleModel
            .findByIdAndDelete(articleId)
            .exec()
            .then((Article) => {
                res.status(204).json({
                    success: true,
                    message: "Articulo elimiando",
                    articlesFound: Article,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo eliminar el articulo en la coleccion",
                    error: err.message,
                });
            });
    }
}

module.exports = new MarketControllers();
