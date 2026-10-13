const express = require('express');
const router = express.Router();
const mercadopagoController = require('../controllers/mercadopago.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');

/**
 * POST /api/mercadopago/create-preference
 * Crear preferencia de pago (requiere autenticación)
 */
router.post('/create-preference', authenticateToken, mercadopagoController.crearPreferencia);

/**
 * GET /api/mercadopago/payment/:id
 * Obtener información de un pago (requiere autenticación)
 */
router.get('/payment/:id', authenticateToken, mercadopagoController.obtenerPago);

/**
 * POST /api/mercadopago/webhook
 * Webhook para notificaciones de Mercado Pago (público)
 */
router.post('/webhook', mercadopagoController.webhook);

module.exports = router;
