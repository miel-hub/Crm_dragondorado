const express = require("express");
const router = express.Router();
const IAController = require("../controllers/ia.controller.js");
const { authenticateToken, optionalAuthenticateToken, authorizeRoles } = require("../middlewares/auth.middleware.js");

router.post("/message", optionalAuthenticateToken, IAController.responder);
router.post("/conversation/:id/feedback", optionalAuthenticateToken, IAController.marcarFeedback);

// Métricas y generación SEO exponen datos internos: solo administradores.
router.get("/metrics", authenticateToken, authorizeRoles([1]), IAController.metricas);
router.get("/seo/audit", authenticateToken, authorizeRoles([1]), IAController.auditarSEO);
router.post("/seo/products/:id/generate", authenticateToken, authorizeRoles([1]), IAController.generarSEO);
router.get("/marketing/weekly-plan", authenticateToken, authorizeRoles([1]), IAController.planMarketing);

module.exports = router;
