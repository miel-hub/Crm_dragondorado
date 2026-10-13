const DetalleVentaService = require("../services/detalleventa.service");

const DetalleVentaController = {
  async listar(req, res) {
    try {
      const detalles = await DetalleVentaService.obtenerTodos();
      return res.json(detalles);
    } catch (error) {
      console.error("Error al listar detalleventa:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  async obtener(req, res) {
    try {
      const { id } = req.params;
      const detalle = await DetalleVentaService.obtenerPorId(id);
      if (!detalle)
        return res.status(404).json({ message: "Detalle de venta no encontrado" });
      return res.json(detalle);
    } catch (error) {
      console.error("Error al obtener detalleventa:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  async crear(req, res) {
    try {
      const { id_venta, id_producto, cantidad, subtotal } = req.body;
      if (!id_venta || !id_producto || !cantidad || !subtotal) {
        return res
          .status(400)
          .json({ message: "Todos los campos son obligatorios" });
      }

      const nuevo = await DetalleVentaService.crear({
        id_venta,
        id_producto,
        cantidad,
        subtotal,
      });

      return res.status(201).json({
        message: "Detalle de venta creado correctamente",
        detalle: nuevo,
      });
    } catch (error) {
      console.error("Error al crear detalleventa:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { id_venta, id_producto, cantidad, subtotal } = req.body;

      const actualizado = await DetalleVentaService.actualizar(id, {
        id_venta,
        id_producto,
        cantidad,
        subtotal,
      });

      return res.json({
        message: "Detalle de venta actualizado correctamente",
        detalle: actualizado,
      });
    } catch (error) {
      console.error("Error al actualizar detalleventa:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      await DetalleVentaService.eliminar(id);
      return res.json({ message: "Detalle de venta eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar detalleventa:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = DetalleVentaController;
