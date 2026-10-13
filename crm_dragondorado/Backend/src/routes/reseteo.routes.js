const express = require("express");
const router = express.Router();
const reseteoService = require("../services/reseteo.service");
const { authenticateToken } = require("../middlewares/auth.middleware");

/**
 * GET /api/reseteo/info
 * Obtiene información sobre el último reseteo y el próximo programado
 */
router.get("/info", authenticateToken, async (req, res) => {
  try {
    const info = await reseteoService.obtenerInfoReseteo();
    
    if (!info) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener información de reseteo"
      });
    }

    res.json({
      success: true,
      data: info
    });
  } catch (error) {
    console.error("Error en /info:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/**
 * POST /api/reseteo/verificar
 * Verifica si es necesario resetear y lo ejecuta si corresponde
 * Solo para administradores
 */
router.post("/verificar", authenticateToken, async (req, res) => {
  try {
    // Verificar que el usuario sea administrador (rol 1)
    if (req.user.rol_usuario !== 1) {
      return res.status(403).json({
        success: false,
        message: "No tienes permisos para realizar esta acción"
      });
    }

    const resultado = await reseteoService.verificarYResetear();
    
    res.json(resultado);
  } catch (error) {
    console.error("Error en /verificar:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

/**
 * POST /api/reseteo/forzar
 * Fuerza un reseteo inmediato sin verificar condiciones
 * Solo para administradores - USAR CON CUIDADO
 */
router.post("/forzar", authenticateToken, async (req, res) => {
  try {
    // Verificar que el usuario sea administrador (rol 1)
    if (req.user.rol_usuario !== 1) {
      return res.status(403).json({
        success: false,
        message: "No tienes permisos para realizar esta acción"
      });
    }

    const resultado = await reseteoService.resetearPuntajes();
    
    res.json(resultado);
  } catch (error) {
    console.error("Error en /forzar:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
