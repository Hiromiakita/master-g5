const express = require("express");
const router = express.Router();
const marketControllers = require("../controller/supermarket");

router.post("/create-article", marketControllers.createArticle);
router.get("/all-articles", marketControllers.findAllArticles);
router.get("/article/:id", marketControllers.findArticle);
router.patch("/update-article/:id", marketControllers.updateArticle);
router.delete("/delete-article/:id", marketControllers.deleteArticle);

module.exports = router;
