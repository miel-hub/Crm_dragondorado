const express = require("express");
const router = express.Router();
const ReclamacionesController = require("../controllers/reclamaciones.controller.js");

// Crear nuevo reclamo/queja/sugerencia
router.post("/", ReclamacionesController.crearReclamacion);

module.exports = router;
