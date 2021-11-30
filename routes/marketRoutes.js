const express = require("express");
const router = express.Router();
//Importamos el archivo del controlador para acceder a los metodos CRUD
const marketControllers = require("../controller/supermarket");

// Importamos la instancia de multer
const uploadImage = require("../middleware/multer");
const manageFiles = require("../middleware/manageFiles");

// Evaluamos si debe guadar la imagen en el equipo o en la nube, dependiendo del entorno de desarrollo, manejamos el procesamiento de la imagen con la instancia de multer cuando la envia el cliente (Imnsonia), indicandole cual es la propiedad de nuestro esquema que contendra el archivo y despues ejecutamos la accion del controlador
router.post("/upload", [
    manageFiles,
    uploadImage.single("file"),
    marketControllers.uploadFiles,
]);
// Evaluamos si debe guadar la imagen en el equipo o en la nube, dependiendo del entorno de desarrollo, manejamos el procesamiento de la imagen con la instancia de multer cuando la envia el cliente (Imnsonia), indicandole cual es la propiedad de nuestro esquema que contendra el archivo y despues ejecutamos la accion del controlador
router.post("/create-article", [
    manageFiles,
    uploadImage.single("article_pic"),
    marketControllers.createArticle,
]);
//Crear cada enpoint que ejecuta una accion CRUD diferente (desde el controlador) para ambos esquemas
router.post("/create-ticket", marketControllers.createTicket);
router.get("/all-articles", marketControllers.findAllArticles);
router.get("/all-tickets", marketControllers.findAllTickets);
router.get("/article/:id", marketControllers.findArticle);
router.get("/ticket/:id", marketControllers.findTicket);
// Evaluamos si debe guadar la imagen en el equipo o en la nube, dependiendo del entorno de desarrollo, manejamos el procesamiento de la imagen con la instancia de multer cuando la envia el cliente (Imnsonia), indicandole cual es la propiedad de nuestro esquema que contendra el archivo y despues ejecutamos la accion del controlador
router.patch("/update-article/:id", [
    manageFiles,
    uploadImage.single("article_pic"),
    marketControllers.updateArticle,
]);
router.patch("/update-ticket/:id", marketControllers.updateTicket);
router.delete("/delete-article/:id", marketControllers.deleteArticle);
router.delete("/delete-ticket/:id", marketControllers.deleteTicket);

module.exports = router;
