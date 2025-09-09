const express = require("express");
const router = express.Router();
const noticiasController = require("../controllers/noticiasController");

router.get("/noticias", noticiasController.getAllNoticias);
router.get("/noticias/:id", noticiasController.getNoticia);
router.post("/noticias", noticiasController.createNoticia);
router.put("/noticias/:id", noticiasController.updateNoticia);
router.delete("/noticias/:id", noticiasController.deleteNoticia);

module.exports = router;