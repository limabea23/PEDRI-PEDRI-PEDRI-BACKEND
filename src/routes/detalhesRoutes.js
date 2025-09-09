const express = require("express");
const router = express.Router();
const detalhesController = require("../controllers/detalhesController");

router.get("/detalhes", detalhesController.getAllDetalhes);
router.get("/detalhes/:id", detalhesController.getDetalhe);
router.post("/detalhes", detalhesController.createDetalhe);
router.put("/detalhes/:id", detalhesController.updateDetalhe);
router.delete("/detalhes/:id", detalhesController.deleteDetalhe);

module.exports = router;