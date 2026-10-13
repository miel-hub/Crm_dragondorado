const mercadopagoService = require('../services/mercadopago.service');
const logger = require('../utils/logger');

/**
 * POST /api/mercadopago/create-preference
 * Crear preferencia de pago
 */
async function crearPreferencia(req, res) {
  try {
    logger.debug('Solicitud de creación de preferencia recibida');
    logger.debug('Body:', JSON.stringify(req.body, null, 2));
    
    const { items, payer, external_reference } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      logger.warn('Error: Items no válidos');
      return res.status(400).json({
        success: false,
        message: 'Items requeridos'
      });
    }

    if (!payer || !payer.email || !payer.name) {
      logger.warn('Error: Información del pagador incompleta');
      return res.status(400).json({
        success: false,
        message: 'Información del pagador requerida (name y email)'
      });
    }

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

    const data = {
      items,
      payer,
      external_reference,
      backUrls: {
        success: `${frontendUrl}/checkout/success`,
        failure: `${frontendUrl}/checkout/failure`,
        pending: `${frontendUrl}/checkout/pending`
      },
      autoReturn: 'approved'
    };

    const result = await mercadopagoService.crearPreferenciaPago(data);

    logger.success('Preferencia creada exitosamente');
    res.json(result);
  } catch (error) {
    logger.error('Error en crearPreferencia controller:', error.message);
    logger.debug('Stack:', error.stack);
    
    res.status(500).json({
      success: false,
      message: 'Error al crear preferencia de pago',
      error: error.message,
      details: error.cause || error.response?.data || null
    });
  }
}

/**
 * GET /api/mercadopago/payment/:id
 * Obtener información de un pago
 */
async function obtenerPago(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'ID de pago requerido'
      });
    }

    const result = await mercadopagoService.obtenerPago(id);

    res.json(result);
  } catch (error) {
    console.error('Error en obtenerPago:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener información del pago',
      error: error.message
    });
  }
}

/**
 * POST /api/mercadopago/webhook
 * Webhook para recibir notificaciones de Mercado Pago
 */
async function webhook(req, res) {
  try {
    console.log('📩 Webhook recibido:', req.body);

    const result = await mercadopagoService.procesarNotificacion(req.body);

    // Aquí puedes actualizar el estado del pedido en tu base de datos
    // según el estado del pago

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error en webhook:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar webhook'
    });
  }
}

module.exports = {
  crearPreferencia,
  obtenerPago,
  webhook
};
