const express = require("express");
const router = express.Router();
//Importamos el archivo del controlador para acceder a los metodos CRUD
const marketControllers = require("../controller/supermarket");

const uploadImage = require("../middleware/multer");

//Crear cada enpoint que ejecuta una accion CRUD diferente (desde el controlador) para ambos esquemas
router.post("/upload", [
    uploadImage.single("file"),
    marketControllers.uploadFiles,
]);
router.post("/create-article", [
    uploadImage.single("article_pic"),
    marketControllers.createArticle,
]);
router.post("/create-ticket", marketControllers.createTicket);
router.get("/all-articles", marketControllers.findAllArticles);
router.get("/all-tickets", marketControllers.findAllTickets);
router.get("/article/:id", marketControllers.findArticle);
router.get("/ticket/:id", marketControllers.findTicket);
router.patch("/update-article/:id", marketControllers.updateArticle);
router.patch("/update-ticket/:id", marketControllers.updateTicket);
router.delete("/delete-article/:id", marketControllers.deleteArticle);
router.delete("/delete-ticket/:id", marketControllers.deleteTicket);

module.exports = router;
