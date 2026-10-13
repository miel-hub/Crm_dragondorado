const prisma = require("../config/db.js");
const FeedbackService = require("../services/feedback.service.js");

const FeedbackController = {
  crear: async (req, res, next) => {
    try {
      const { nombre, correo, mensaje, nps, canal } = req.body || {};
      if (!nombre || !mensaje) return res.status(400).json({ message: "Nombre y mensaje son obligatorios" });
      if (String(mensaje).trim().length < 10) return res.status(400).json({ message: "El mensaje debe tener al menos 10 caracteres" });
      if (nps !== undefined && nps !== null && (Number(nps) < 0 || Number(nps) > 10)) {
        return res.status(400).json({ message: "El NPS debe estar entre 0 y 10" });
      }
      const feedback = await FeedbackService.crear({ nombre, correo, mensaje, nps, canal });
      return res.status(201).json({
        message: "Gracias por compartir tu experiencia",
        id_feedback: feedback.id_feedback,
        sentimiento: feedback.sentimiento,
      });
    } catch (error) {
      return next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const feedback = await prisma.feedback.findMany({
        orderBy: { fecha_creacion: "desc" },
        take: Math.min(Number(req.query.limit) || 100, 500),
      });
      return res.json(feedback);
    } catch (error) {
      return next(error);
    }
  },

  metricas: async (_req, res, next) => {
    try {
      const ahora = new Date();
      const hace72Horas = new Date(ahora.getTime() - 72 * 60 * 60 * 1000);
      const [total, negativos, pendientes72h, npsRows] = await Promise.all([
        prisma.feedback.count(),
        prisma.feedback.count({ where: { sentimiento: "negativo" } }),
        prisma.feedback.count({ where: { sentimiento: "negativo", atendido: false, fecha_creacion: { lt: hace72Horas } } }),
        prisma.feedback.findMany({ where: { nps: { not: null } }, select: { nps: true } }),
      ]);
      const npsValores = npsRows.map((row) => Number(row.nps)).filter(Number.isFinite);
      const promotores = npsValores.filter((valor) => valor >= 9).length;
      const detractores = npsValores.filter((valor) => valor <= 6).length;
      const nps = npsValores.length ? Math.round(((promotores - detractores) / npsValores.length) * 100) : null;
      return res.json({
        total,
        negativos,
        pendientesNegativos72h: pendientes72h,
        nps,
        respuestasNPS: npsValores.length,
        objetivoNegativos72h: 5,
        objetivoNPS: 55,
      });
    } catch (error) {
      return next(error);
    }
  },

  resolver: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const feedback = await prisma.feedback.update({
        where: { id_feedback: id },
        data: {
          atendido: true,
          respuesta: req.body?.respuesta ? String(req.body.respuesta) : null,
          fecha_atencion: new Date(),
        },
      });
      return res.json(feedback);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = FeedbackController;
