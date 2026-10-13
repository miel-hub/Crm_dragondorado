const express = require("express");
const router = express.Router();
const DetalleVentaController = require("../controllers/detalleventa.controller");

// Rutas CRUD para detalleventa
router.get("/", DetalleVentaController.listar);
router.get("/:id", DetalleVentaController.obtener);
router.post("/", DetalleVentaController.crear);
router.put("/:id", DetalleVentaController.actualizar);
router.delete("/:id", DetalleVentaController.eliminar);

module.exports = router;
