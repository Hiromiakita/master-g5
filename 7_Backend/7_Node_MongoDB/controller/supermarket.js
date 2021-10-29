//Importamos nuestro archivo de storage de Google Cloud y Firebase
const storage = require("../utils/storage");

//Importamos el archivos de modelos.
const marketModels = require("../model/supermarket");

// Invocamos a ambos modelos para que se puedan hacer las operaciones CRUD
const articleModel = marketModels.articleModel;
const ticketModel = marketModels.ticketModel;
const fileModel = marketModels.filesModel;

// Hacemos una clase que contiene los distintos metodos CRUD para los esquemas de articulos y tickets
class MarketControllers {
    async uploadFiles(req, res) {
        // Creamos una nueva instancia del modelo para guardar dentro de el los datos que le mande en la peticion y se intente crear un nuevo documento (registro)
        const file = new fileModel({
            file: req.body.file,
        });
        return file
            .save()
            .then((newFile) => {
                res.status(201).json({
                    success: true,
                    message: "Archivo agregado a la coleccion",
                    articleCreated: newFile,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo agregar el archivo a la coleccion",
                    error: err.message,
                });
            });
    }

    async createArticle(req, res) {
        // Creamos una nueva instancia del modelo para guardar dentro de el los datos que le mande en la peticion y se intente crear un nuevo documento (registro)
        const article = new articleModel({
            nombre: req.body.nombre,
            precio: req.body.precio,
            existencias: req.body.existencias,
            article_pic: req.body.picture,
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
    }

    createTicket = (req, res) => {
        // INVESTIGAR COMO PODEMOS AGREGAR MAS DE UN ARTICULO AL TICKET

        // Buscara primero si existen los articulos que se quieren agregar al ticket
        articleModel
            .findById(req.body.articleId)
            .exec()
            .then((article) => {
                if (!article) {
                    res.status(404).json({
                        success: false,
                        message: "No se encontro el articulo en la coleccion",
                    });
                } else {
                    // Creamos una nueva instancia del modelo para guardar dentro de el los datos que le mande en la peticion y se intente crear un nuevo documento (registro)
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
                }
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
        return (
            ticketModel
                .find()
                // Con el populate hacemos el enlace con la propiedad donde tenemos la referencia en el esquema y filtramos los campos a mostrar con el select
                .populate({
                    path: "articulos",
                    select: { existencias: 0, __v: 0 },
                })
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
                })
        );
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

    findTicket(req, res) {
        const ticketId = req.params.id;
        return (
            ticketModel
                .findById(ticketId)
                // Con el populate hacemos el enlace con la propiedad donde tenemos la referencia en el esquema y filtramos los campos a mostrar con el select
                .populate({
                    path: "articulos",
                    select: { existencias: 0, __v: 0 },
                })
                .exec()
                .then((Ticket) => {
                    res.status(200).json({
                        success: true,
                        message: "Ticket encontrado",
                        TicketFound: Ticket,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        success: false,
                        message:
                            "No se pudo encontrar el ticket en la coleccion",
                        error: err.message,
                    });
                })
        );
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

    updateTicket(req, res) {
        const ticketId = req.params.id;
        return ticketModel
            .findByIdAndUpdate(ticketId, { $set: req.body }, { new: true })
            .exec()
            .then((Ticket) => {
                res.status(200).json({
                    success: true,
                    message: "Ticket actualizado",
                    newTicket: Ticket,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo actualizar el ticket en la coleccion",
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

    deleteTicket(req, res) {
        const ticketId = req.params.id;
        return ticketModel
            .findByIdAndDelete(ticketId)
            .exec()
            .then((Ticket) => {
                res.status(204).json({
                    success: true,
                    message: "Ticket eliminado",
                    TicketDeleted: Ticket,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "No se pudo eliminar el ticket en la coleccion",
                    error: err.message,
                });
            });
    }
}

module.exports = new MarketControllers();
