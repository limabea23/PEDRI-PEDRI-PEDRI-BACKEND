const express = require("express");
const router = express.Router();
const galeriaController = require("../controllers/galeriaController");
const upload = require("../config/upload.js");

router.get("/galeria", galeriaController.getAllGalerias);
router.get("/galeria/:id", galeriaController.getGaleria);
router.post("/galeria", upload.single("photo"), galeriaController.createGaleria);
router.put("/galeria/:id", galeriaController.updateGaleria);
router.delete("/galeria/:id", galeriaController.deleteGaleria);

module.exports = router;