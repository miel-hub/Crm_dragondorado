const prisma = require("../config/db.js");
const EmailService = require("./email.service.js");
const logger = require("../utils/logger.js");

const ESTADOS_PEDIDO = new Set([
  "por confirmar",
  "en preparacion",
  "por recoger",
  "en camino",
  "entregado",
  "cancelado",
]);

function normalizarDatosVenta(data = {}, { parcial = false } = {}) {
  const salida = {};
  const camposNumericos = [
    "id_usuario",
    "id_metodoPago",
    "id_comprobante",
    "tiempo_estimado_min",
  ];
  const camposTexto = [
    "metodo_entrega",
    "direccion_entrega",
    "referencia_entrega",
    "repartidor",
    "telefono_repartidor",
  ];

  if (!parcial || data.id_usuario !== undefined) salida.id_usuario = Number(data.id_usuario);
  if (!parcial || data.fecha_venta !== undefined) salida.fecha_venta = new Date(data.fecha_venta);
  if (!parcial || data.total !== undefined) salida.total = Number(data.total);
  for (const campo of ["id_metodoPago", "id_comprobante"]) {
    if (!parcial || data[campo] !== undefined) salida[campo] = Number(data[campo]);
  }

  if (!parcial || data.estado !== undefined) {
    const estado = String(data.estado || "por confirmar").trim().toLowerCase();
    if (!ESTADOS_PEDIDO.has(estado)) {
      throw new Error(`Estado de pedido no válido: ${estado}`);
    }
    salida.estado = estado;
    salida.entregado_en = estado === "entregado" ? new Date() : null;
  }

  if (!parcial || data.metodo_entrega !== undefined) {
    const metodo = String(data.metodo_entrega || "pickup").trim().toLowerCase();
    if (!["pickup", "dine-in", "delivery"].includes(metodo)) {
      throw new Error(`Método de entrega no válido: ${metodo}`);
    }
    salida.metodo_entrega = metodo;
  }

  for (const campo of camposTexto.slice(1)) {
    if (data[campo] !== undefined) {
      const valor = data[campo] == null ? null : String(data[campo]).trim();
      salida[campo] = valor || null;
    }
  }

  if (data.tiempo_estimado_min !== undefined) {
    const minutos = data.tiempo_estimado_min === null || data.tiempo_estimado_min === ""
      ? null
      : Number(data.tiempo_estimado_min);
    if (minutos !== null && (!Number.isInteger(minutos) || minutos < 0 || minutos > 240)) {
      throw new Error("El tiempo estimado debe ser un número entero entre 0 y 240 minutos");
    }
    salida.tiempo_estimado_min = minutos;
  }

  // Los campos administrativos no se envían como undefined a Prisma.
  for (const [clave, valor] of Object.entries(salida)) {
    if (valor === undefined || (typeof valor === "number" && Number.isNaN(valor))) {
      delete salida[clave];
    }
  }
  return salida;
}

const ventasService = {
  async crearVenta(data) {
    try {
      const ventaData = normalizarDatosVenta(data);
      const nuevaVenta = await prisma.ventas.create({
        data: ventaData,
        include: {
          usuarios: true,
          detalleventa: {
            include: {
              productos: true,
            },
          },
        },
      });

      // Enviar correo de notificación de pedido (sin bloquear)
      if (nuevaVenta.usuarios) {
        EmailService.enviarNotificacionPedido(nuevaVenta.usuarios, nuevaVenta).catch(err =>
          logger.error("Error enviando notificación de pedido:", err)
        );
      }

      return nuevaVenta;
    } catch (error) {
      logger.error("Error al crear la venta:", error);
      throw error;
    }
  },

  async obtenerVentas() {
    try {
      const ventas = await prisma.ventas.findMany({
        include: {
          usuarios: true,
          metodopago: true,
          comprobante: true,
          detalleventa: {
          include: {
            productos: true,
          },
        },
        },
      });
      return ventas;
    } catch (error) {
      logger.error("Error al obtener las ventas:", error);
      throw error;
    }
  },

  async obtenerVentaPorId(id) {
    try {
      const venta = await prisma.ventas.findUnique({
        where: { id_venta: parseInt(id) },
        include: {
          usuarios: true,
          metodopago: true,
          comprobante: true,
          detalleventa: {
          include: {
            productos: true,
          },
        },
        },
      });
      return venta;
    } catch (error) {
      logger.error("Error al obtener la venta:", error);
      throw error;
    }
  },

  async actualizarVenta(id, data) {
    try {
      // Obtener el estado anterior antes de actualizar
      const ventaAnterior = await prisma.ventas.findUnique({
        where: { id_venta: parseInt(id) },
      });

      const ventaActualizada = await prisma.ventas.update({
        where: { id_venta: parseInt(id) },
        data: normalizarDatosVenta(data, { parcial: true }),
        include: {
          usuarios: true,
          detalleventa: {
            include: {
              productos: true,
            },
          },
        },
      });

      // Si cambió el estado, enviar notificación por correo
      if (data.estado && ventaAnterior.estado !== data.estado && ventaActualizada.usuarios) {
        EmailService.enviarCambioEstado(
          ventaActualizada.usuarios,
          ventaActualizada,
          ventaAnterior.estado
        ).catch(err =>
          logger.error("Error enviando notificación de cambio de estado:", err)
        );
      }

      return ventaActualizada;
    } catch (error) {
      console.error("Error al actualizar la venta:", error);
      throw error;
    }
  },

  async eliminarVenta(id) {
    try {
      const ventaEliminada = await prisma.ventas.delete({
        where: { id_venta: parseInt(id) },
      });
      return ventaEliminada;
    } catch (error) {
      console.error("Error al eliminar la venta:", error);
      throw error;
    }
  },

  async obtenerVentasPorUsuario(id_usuario) {
    try {
      const ventas = await prisma.ventas.findMany({
        where: { id_usuario: parseInt(id_usuario) },
        orderBy: { fecha_venta: "desc" },
        include: {
          metodopago: true,
          comprobante: true,
          detalleventa: {
            include: {
              productos: true,
            },
          },
        },
      });
      return ventas;
    } catch (error) {
      console.error("Error al obtener las ventas del usuario:", error);
      throw error;
    }
  },

  async obtenerVentasFidelidadPorUsuario(id_usuario) {
    try {
      const ventas = await prisma.ventas.findMany({
        where: {
          id_usuario: parseInt(id_usuario),
          detalleventa: {
            some: {
              id_producto: {
                gt: 0,
              },
            },
          },
        },
        orderBy: { fecha_venta: "desc" },
        include: {
          metodopago: true,
          comprobante: true,
          detalleventa: {
            include: {
              productos: true,
            },
          },
        },
      });

      return ventas;
    } catch (error) {
      console.error("Error al obtener ventas de Fidelidad Chifa:", error);
      throw error;
    }
  },

  /**
   * Devuelve el pedido solicitado por su dueño para el seguimiento del chatbot.
   * Si no se envía un ID, toma el pedido más reciente que aún no fue entregado.
   */
  async obtenerSeguimientoPorUsuario(id_usuario, id_venta = null) {
    const where = { id_usuario: parseInt(id_usuario) };
    if (id_venta) {
      where.id_venta = parseInt(id_venta);
    } else {
      where.estado = { notIn: ["entregado", "cancelado"] };
    }

    return prisma.ventas.findFirst({
      where,
      orderBy: { fecha_venta: "desc" },
      include: {
        detalleventa: { include: { productos: true } },
        metodopago: true,
      },
    });
  },

  /** Actualiza los datos que el personal registra al enviar un pedido a reparto. */
  async actualizarDatosDelivery(id, data) {
    const actualizacion = normalizarDatosVenta(
      { ...data, metodo_entrega: "delivery" },
      { parcial: true },
    );
    return prisma.ventas.update({
      where: { id_venta: parseInt(id) },
      data: actualizacion,
      include: {
        usuarios: true,
        detalleventa: { include: { productos: true } },
      },
    });
  },
};

module.exports = ventasService;
