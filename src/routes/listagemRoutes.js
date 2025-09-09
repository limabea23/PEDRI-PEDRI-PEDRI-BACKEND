const express = require("express");
const router = express.Router();
const listagemController = require("../controllers/listagemController");

router.get("/listagem", listagemController.getAllListagens);
router.get("/listagem/:id", listagemController.getListagem);
router.post("/listagem", listagemController.createListagem);
router.put("/listagem/:id", listagemController.updateListagem);
router.delete("/listagem/:id", listagemController.deleteListagem);

module.exports = router;