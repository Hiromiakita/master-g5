const express = require("express");
const router = express.Router();
const marketControllers = require("../controller/supermarket");

router.post("/create-article", marketControllers.createArticle);
router.post("/create-ticket", marketControllers.createTicket);
router.get("/all-articles", marketControllers.findAllArticles);
router.get("/all-tickets", marketControllers.findAllTickets);
router.get("/article/:id", marketControllers.findArticle);
router.patch("/update-article/:id", marketControllers.updateArticle);
router.delete("/delete-article/:id", marketControllers.deleteArticle);

module.exports = router;
