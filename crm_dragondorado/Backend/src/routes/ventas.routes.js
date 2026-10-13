const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventas.controller");
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware");

router.post("/", ventasController.crearVenta);
router.get("/", ventasController.obtenerVentas);
router.get("/usuario/:usuarioId/seguimiento", authenticateToken, ventasController.obtenerSeguimientoPorUsuario);
router.get("/:id", ventasController.obtenerVentaPorId);
router.put("/:id", ventasController.actualizarVenta);
router.patch("/:id/delivery", authenticateToken, authorizeRoles([1, 3]), ventasController.actualizarDatosDelivery);
router.delete("/:id", ventasController.eliminarVenta);
router.get("/usuario/:id", ventasController.obtenerVentasPorUsuario);
router.get("/usuario/:id/fidelidad", ventasController.obtenerVentasFidelidadPorUsuario);

module.exports = router;
