const express = require("express");
const router = express.Router();
const ReservasController = require("../controllers/reservas.controller.js");
const { authenticateToken, optionalAuthenticateToken, authorizeRoles } = require("../middlewares/auth.middleware.js");

router.post("/", optionalAuthenticateToken, ReservasController.crear);
router.get("/", authenticateToken, authorizeRoles([1]), ReservasController.listar);
router.patch("/:id/estado", authenticateToken, authorizeRoles([1]), ReservasController.actualizarEstado);

module.exports = router;
