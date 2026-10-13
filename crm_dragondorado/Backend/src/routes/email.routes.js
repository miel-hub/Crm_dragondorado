const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/email.controller.js");
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware.js");

router.get("/open/:token", EmailController.abrir);
router.get("/click/:token", EmailController.clic);
router.get("/metrics", authenticateToken, authorizeRoles([1]), EmailController.metricas);

module.exports = router;
