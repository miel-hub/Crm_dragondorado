const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/dashboard.controller");
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware");

// Todas las rutas requieren autenticación y rol de administrador (rol_usuario = 1)
router.use(authenticateToken);
router.use(authorizeRoles([1]));

// GET /api/dashboard/productos-mas-vendidos?mes=11&anio=2025
router.get("/productos-mas-vendidos", DashboardController.getProductosMasVendidos);

// GET /api/dashboard/productos-menos-vendidos?mes=11&anio=2025
router.get("/productos-menos-vendidos", DashboardController.getProductosMenosVendidos);

// GET /api/dashboard/usuarios-registrados?mes=11&anio=2025
router.get("/usuarios-registrados", DashboardController.getTotalUsuariosRegistrados);

// GET /api/dashboard/accesos-por-tipo?anio=2025
router.get("/accesos-por-tipo", DashboardController.getAccesosPorTipo);

// GET /api/dashboard/resumen?mes=11&anio=2025
router.get("/resumen", DashboardController.getResumenDashboard);

module.exports = router;
