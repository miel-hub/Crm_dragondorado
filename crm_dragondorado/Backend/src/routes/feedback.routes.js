const express = require("express");
const router = express.Router();
const FeedbackController = require("../controllers/feedback.controller.js");
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware.js");

router.post("/", FeedbackController.crear);
router.get("/metrics", authenticateToken, authorizeRoles([1]), FeedbackController.metricas);
router.get("/", authenticateToken, authorizeRoles([1]), FeedbackController.listar);
router.patch("/:id/resolve", authenticateToken, authorizeRoles([1]), FeedbackController.resolver);

module.exports = router;
