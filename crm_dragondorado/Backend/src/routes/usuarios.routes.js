const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarios.controller');
const { authenticateToken, authorizeRoles } = require("../middlewares/auth.middleware");

router.get("/", authenticateToken, UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete("/:id", authenticateToken, authorizeRoles([1]), UsuarioController.delete);

module.exports = router;
