const express = require("express");
const router = express.Router();
const noticiasController = require("../controllers/noticiasController");
const upload = require("../config/upload.js");

router.get("/noticias", noticiasController.getAllNoticias);
router.get("/noticias/:id", noticiasController.getNoticia);
router.post("/noticias", upload.single("photo"), noticiasController.createNoticia);
router.put("/noticias/:id", noticiasController.updateNoticia);
router.delete("/noticias/:id", noticiasController.deleteNoticia);

module.exports = router;