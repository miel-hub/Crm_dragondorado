const prisma = require("../config/db.js");

// GIF transparente de 1x1 para registrar apertura sin exponer información del cliente.
const PIXEL = Buffer.from("R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", "base64");

const EmailController = {
  abrir: async (req, res) => {
    try {
      await prisma.email_eventos.updateMany({
        where: { token: req.params.token, fecha_apertura: null },
        data: { fecha_apertura: new Date() },
      });
    } catch (error) {
      console.error("[Email] No se pudo registrar apertura:", error.message);
    }
    res.set({ "Content-Type": "image/gif", "Cache-Control": "no-store, no-cache, must-revalidate" });
    return res.status(200).send(PIXEL);
  },

  clic: async (req, res) => {
    try {
      await prisma.email_eventos.updateMany({
        where: { token: req.params.token, fecha_clic: null },
        data: { fecha_clic: new Date() },
      });
    } catch (error) {
      console.error("[Email] No se pudo registrar clic:", error.message);
    }
    return res.redirect(302, `${process.env.FRONTEND_URL || "http://localhost:5173"}/catalogo`);
  },

  metricas: async (_req, res, next) => {
    try {
      const [enviados, abiertos, clics] = await Promise.all([
        prisma.email_eventos.count({ where: { tipo: "bienvenida" } }),
        prisma.email_eventos.count({ where: { tipo: "bienvenida", fecha_apertura: { not: null } } }),
        prisma.email_eventos.count({ where: { tipo: "bienvenida", fecha_clic: { not: null } } }),
      ]);
      return res.json({
        enviados,
        abiertos,
        clics,
        tasaApertura: enviados ? Number(((abiertos / enviados) * 100).toFixed(1)) : 0,
        objetivoApertura: 40,
      });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = EmailController;
