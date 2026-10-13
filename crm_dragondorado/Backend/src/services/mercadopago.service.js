const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');
const logger = require('../utils/logger');

// Mercado Pago es opcional durante el desarrollo del chatbot y del catálogo.
// Se inicializa solo cuando existe la credencial para no bloquear todo el API.
const client = process.env.MERCADOPAGO_ACCESS_TOKEN
  ? new MercadoPagoConfig({
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
      options: { timeout: 5000, idempotencyKey: 'DEV' },
    })
  : null;
const preference = client ? new Preference(client) : null;
const payment = client ? new Payment(client) : null;

if (!client) logger.warn('MERCADOPAGO_ACCESS_TOKEN no está definido; pagos deshabilitados hasta configurar .env');

/**
 * Crear preferencia de pago para checkout
 * @param {Object} data - Datos del pedido
 * @returns {Promise<Object>} - Preferencia creada con init_point
 */
async function crearPreferenciaPago(data) {
  try {
    if (!preference) throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env');
    // Validar que el access token esté configurado
    if (!process.env.MERCADOPAGO_ACCESS_TOKEN || process.env.MERCADOPAGO_ACCESS_TOKEN === '') {
      throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env');
    }

    const { items, payer, backUrls, autoReturn } = data;

    // Construir objeto payer con validaciones
    const payerData = {
      name: payer.name,
      email: payer.email
    };

    // Solo agregar teléfono si existe y no está vacío
    if (payer.phone && payer.phone.trim() !== '') {
      payerData.phone = {
        number: payer.phone
      };
    }

    const preferenceBody = {
      items: items.map(item => ({
        id: item.id.toString(),
        title: item.title,
        description: item.description || item.title,
        quantity: parseInt(item.quantity),
        unit_price: parseFloat(item.unit_price),
        currency_id: 'PEN'
      })),
      payer: payerData,
      back_urls: {
        success: backUrls.success,
        failure: backUrls.failure,
        pending: backUrls.pending
      },
      statement_descriptor: 'Dragon Dorado - Chifa',
      external_reference: data.external_reference,
      notification_url: process.env.MERCADOPAGO_NOTIFICATION_URL,
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 12,
        default_installments: 1
      }
    };

    logger.debug('Access Token configurado:', process.env.MERCADOPAGO_ACCESS_TOKEN ? process.env.MERCADOPAGO_ACCESS_TOKEN.substring(0, 20) + '...' : 'NO DEFINIDO');
    logger.debug('Creando preferencia con body:', JSON.stringify(preferenceBody, null, 2));

    // El SDK v2.x espera { body: {...} }
    const result = await preference.create({ body: preferenceBody });
    
    logger.success('Preferencia creada exitosamente:', result.id);
    
    return {
      success: true,
      preference_id: result.id,
      init_point: result.init_point,
      sandbox_init_point: result.sandbox_init_point
    };
  } catch (error) {
    logger.error('Error detallado al crear preferencia de Mercado Pago:');
    logger.error('- Mensaje:', error.message);
    logger.error('- Status:', error.status);
    logger.debug('- Causa:', error.cause);
    
    // Intentar extraer más detalles del error de Mercado Pago
    if (error.cause) {
      logger.debug('- Detalles adicionales:', JSON.stringify(error.cause, null, 2));
    }
    
    throw error;
  }
}

/**
 * Obtener información de un pago por ID
 * @param {string} paymentId - ID del pago
 * @returns {Promise<Object>} - Información del pago
 */
async function obtenerPago(paymentId) {
  try {
    if (!payment) throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env');
    const result = await payment.get({ id: paymentId });
    
    return {
      success: true,
      payment: {
        id: result.id,
        status: result.status,
        status_detail: result.status_detail,
        transaction_amount: result.transaction_amount,
        payment_method_id: result.payment_method_id,
        payment_type_id: result.payment_type_id,
        date_approved: result.date_approved,
        payer: result.payer,
        external_reference: result.external_reference
      }
    };
  } catch (error) {
    console.error('Error al obtener pago:', error);
    throw error;
  }
}

/**
 * Procesar notificación de webhook de Mercado Pago
 * @param {Object} data - Datos del webhook
 * @returns {Promise<Object>} - Resultado del procesamiento
 */
async function procesarNotificacion(data) {
  try {
    const { type, data: notificationData } = data;

    if (type === 'payment') {
      const paymentInfo = await obtenerPago(notificationData.id);
      
      return {
        success: true,
        type: 'payment',
        payment: paymentInfo.payment
      };
    }

    return {
      success: true,
      type: type,
      message: 'Notificación procesada'
    };
  } catch (error) {
    console.error('Error al procesar notificación:', error);
    throw error;
  }
}

module.exports = {
  crearPreferenciaPago,
  obtenerPago,
  procesarNotificacion
};
