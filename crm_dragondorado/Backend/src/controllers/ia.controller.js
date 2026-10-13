const prisma = require("../config/db.js");
const IAService = require("../services/ia.service.js");

const IAController = {
  responder: async (req, res, next) => {
    try {
      const mensaje = String(req.body?.mensaje || req.body?.message || "").trim();
      if (!mensaje) return res.status(400).json({ message: "El mensaje es obligatorio" });
      if (mensaje.length > 1000) return res.status(400).json({ message: "El mensaje no puede superar 1000 caracteres" });

      const resultado = await IAService.responder({
        mensaje,
        idUsuario: req.user?.id_usuario || null,
        canal: String(req.body?.canal || "web").slice(0, 30),
      });
      return res.json(resultado);
    } catch (error) {
      return next(error);
    }
  },

  marcarFeedback: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      if (!Number.isInteger(id)) return res.status(400).json({ message: "Conversación inválida" });
      const util = Boolean(req.body?.util);
      const conversacion = await prisma.ia_conversaciones.findUnique({ where: { id_conversacion: id } });
      if (!conversacion) return res.status(404).json({ message: "Conversación no encontrada" });
      await prisma.ia_conversaciones.update({
        where: { id_conversacion: id },
        data: { resuelta: util },
      });
      return res.json({ ok: true, resuelta: util });
    } catch (error) {
      return next(error);
    }
  },

  metricas: async (_req, res, next) => {
    try {
      const [total, resueltas, conversaciones] = await Promise.all([
        prisma.ia_conversaciones.count(),
        prisma.ia_conversaciones.count({ where: { resuelta: true } }),
        prisma.ia_conversaciones.findMany({
          select: { intencion: true, confianza: true, resuelta: true, fecha: true },
          orderBy: { fecha: "desc" },
          take: 1000,
        }),
      ]);
      const porIntencion = conversaciones.reduce((acc, item) => {
        acc[item.intencion] = (acc[item.intencion] || 0) + 1;
        return acc;
      }, {});
      return res.json({
        total,
        resueltas,
        porcentajePrimerContacto: total ? Number(((resueltas / total) * 100).toFixed(1)) : 0,
        porIntencion,
      });
    } catch (error) {
      return next(error);
    }
  },

  auditarSEO: async (_req, res, next) => {
    try {
      const productos = await prisma.productos.findMany({
        include: { categoria: true, ingredienteproducto: true },
        orderBy: { nombre_producto: "asc" },
      });
      const faltantes = productos.filter((producto) => {
        const tags = String(producto.tags_seo || "").trim();
        return !producto.descripcion || !tags;
      });
      return res.json({
        total: productos.length,
        completos: productos.length - faltantes.length,
        faltantes: faltantes.length,
        porcentajeCompletitud: productos.length ? Number((((productos.length - faltantes.length) / productos.length) * 100).toFixed(1)) : 100,
        productos: faltantes.map((producto) => ({
          id_producto: producto.id_producto,
          nombre_producto: producto.nombre_producto,
          descripcion: Boolean(producto.descripcion),
          tags_seo: Boolean(String(producto.tags_seo || "").trim()),
        })),
      });
    } catch (error) {
      return next(error);
    }
  },

  generarSEO: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const producto = await prisma.productos.findUnique({
        where: { id_producto: id },
        include: { categoria: true, ingredienteproducto: true },
      });
      if (!producto) return res.status(404).json({ message: "Producto no encontrado" });

      const contenido = IAService.generarContenidoSEO({
        nombre_producto: producto.nombre_producto,
        categoria: producto.categoria?.nombre_categoria,
        ingredientes: producto.ingredienteproducto?.map((i) => i.nombre),
      });
      const actualizado = await prisma.productos.update({
        where: { id_producto: id },
        data: {
          descripcion: contenido.descripcion,
          descripcion_corta: contenido.descripcion_corta,
          tags_seo: contenido.tags_seo,
          seo_generado_en: new Date(),
        },
        include: { categoria: true },
      });
      return res.json({ producto: actualizado, generadoPor: "motor-ia-local" });
    } catch (error) {
      return next(error);
    }
  },

  planMarketing: async (_req, res, next) => {
    try {
      const plan = await IAService.generarPlanMarketing();
      return res.json({ generadoEn: new Date().toISOString(), plan, fuente: "carta-crm" });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = IAController;
