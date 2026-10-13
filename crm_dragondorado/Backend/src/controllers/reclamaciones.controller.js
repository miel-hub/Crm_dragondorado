const EmailService = require("../services/email.service.js");
const FeedbackService = require("../services/feedback.service.js");
const logger = require("../utils/logger.js");

const ReclamacionesController = {
  // Crear nuevo reclamo/queja/sugerencia
  crearReclamacion: async (req, res) => {
    try {
      const { nombre, correo, telefono, tipo, mensaje } = req.body;

      // Validar campos requeridos
      if (!nombre) {
        return res.status(400).json({ message: "El nombre es obligatorio" });
      }
      if (!correo) {
        return res.status(400).json({ message: "El correo electrónico es obligatorio" });
      }
      if (!mensaje) {
        return res.status(400).json({ message: "El mensaje es obligatorio" });
      }

      // Validar formato de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        return res.status(400).json({ message: "El formato del correo electrónico no es válido" });
      }

      // Validar longitud del mensaje
      if (mensaje.length < 20) {
        return res.status(400).json({ message: "El mensaje debe tener al menos 20 caracteres" });
      }

      const tipoReclamacion = tipo || "reclamo";

      logger.info(`Nueva ${tipoReclamacion} recibida de:`, nombre, correo);

      // Persistir el caso permite medir reseñas negativas sin atender en 72 h,
      // NPS y categorías recurrentes desde el dashboard de IA.
      try {
        await FeedbackService.crear({
          nombre,
          correo,
          mensaje,
          canal: "libro-reclamaciones",
        });
      } catch (feedbackError) {
        logger.error("Error guardando feedback de reclamación:", feedbackError);
      }

      // Enviar correo de confirmación al usuario
      try {
        await EmailService.enviarConfirmacionReclamacion({
          nombre,
          correo,
          telefono,
          tipo: tipoReclamacion,
          mensaje,
        });
        logger.success(`Correo de confirmación enviado a: ${correo}`);
      } catch (emailError) {
        logger.error("Error enviando correo de confirmación:", emailError);
        // No fallar si el correo falla, pero registrarlo
      }

      // Enviar notificación al administrador
      try {
        await EmailService.enviarNotificacionReclamacionAdmin({
          nombre,
          correo,
          telefono,
          tipo: tipoReclamacion,
          mensaje,
        });
        logger.success("Notificación enviada al administrador");
      } catch (emailError) {
        logger.error("Error enviando notificación al admin:", emailError);
      }

      return res.status(201).json({
        message: `${tipoReclamacion.charAt(0).toUpperCase() + tipoReclamacion.slice(1)} enviado exitosamente`,
        success: true,
      });
    } catch (error) {
      logger.error("Error al procesar reclamación:", error);
      return res.status(500).json({
        message: "Error al procesar la solicitud. Por favor, intenta nuevamente.",
      });
    }
  },
};

module.exports = ReclamacionesController;
