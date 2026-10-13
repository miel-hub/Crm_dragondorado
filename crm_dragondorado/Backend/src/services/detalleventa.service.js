const prisma = require("../config/db.js");

const DetalleVentaService = {
  // Obtener todos los detalles de venta
  async obtenerTodos() {
    return await prisma.detalleventa.findMany({
      include: {
        productos: true,
        ventas: true,
      },
    });
  },

  // Obtener un detalle por ID
  async obtenerPorId(id) {
    return await prisma.detalleventa.findUnique({
      where: { id_detalleVenta: Number(id) },
      include: {
        productos: true,
        ventas: true,
      },
    });
  },

  // Crear un nuevo detalle de venta
  async crear(data) {
    return await prisma.detalleventa.create({
      data: {
        id_venta: Number(data.id_venta),
        id_producto: Number(data.id_producto),
        cantidad: Number(data.cantidad),
        subtotal: Number(data.subtotal),
      },
    });
  },

  // Actualizar detalle de venta
  async actualizar(id, data) {
    return await prisma.detalleventa.update({
      where: { id_detalleVenta: Number(id) },
      data: {
        id_venta: Number(data.id_venta),
        id_producto: Number(data.id_producto),
        cantidad: Number(data.cantidad),
        subtotal: Number(data.subtotal),
      },
    });
  },

  // Eliminar detalle de venta
  async eliminar(id) {
    return await prisma.detalleventa.delete({
      where: { id_detalleVenta: Number(id) },
    });
  },
};

module.exports = DetalleVentaService;
