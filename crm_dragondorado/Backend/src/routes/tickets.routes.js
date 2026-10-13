// crm_dragon_dorado/Backend/src/routes/tickets.routes.js
const express = require("express");
const router = express.Router();
const TicketController = require("../controllers/tickets.controller");
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware");

// CRUD principal
router.get("/", authenticateToken, TicketController.getAll);
router.get("/:id", authenticateToken, TicketController.getById);
router.post("/", authenticateToken, TicketController.create);
router.put("/:id", authenticateToken, TicketController.update);
router.delete("/:id", authenticateToken, authorizeRoles(["admin"]), TicketController.delete);

// Extra
router.get("/usuario/:id_usuario", authenticateToken, TicketController.getByUsuario);

// 🔹 Nuevo: obtener ticket por código
router.get("/codigo/:codigo", authenticateToken, TicketController.getByCodigo);

// 🔹 Nuevo: marcar ticket como usado
router.put("/usar/:codigo", authenticateToken, TicketController.usarTicket);

module.exports = router;
