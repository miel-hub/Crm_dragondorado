// src/routes/auth.routes.js
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/check-session", AuthController.checkSession);
router.put("/change-password", AuthController.changePassword);

module.exports = router;
