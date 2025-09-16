const express = require("express");
const router = express.Router();
const listagemController = require("../controllers/listagemController");
const upload = require("../config/upload.js");

router.get("/listagem", listagemController.getAllListagens);
router.get("/listagem/:id", listagemController.getListagem);
router.post("/listagem", upload.single("photo"), listagemController.createListagem);
router.put("/listagem/:id", listagemController.updateListagem);
router.delete("/listagem/:id", listagemController.deleteListagem);

module.exports = router;