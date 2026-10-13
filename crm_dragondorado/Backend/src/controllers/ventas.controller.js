const ventasService = require("../services/ventas.service");

const ventasController = {
  async crearVenta(req, res) {
    try {
      const venta = await ventasService.crearVenta(req.body);
      res.status(201).json({ message: "Venta creada exitosamente", venta });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear la venta", error: error.message });
    }
  },

  async obtenerVentas(req, res) {
    try {
      const ventas = await ventasService.obtenerVentas();
      res.status(200).json(ventas);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener las ventas", error: error.message });
    }
  },

  async obtenerVentaPorId(req, res) {
    try {
      const venta = await ventasService.obtenerVentaPorId(req.params.id);
      if (!venta)
        return res.status(404).json({ message: "Venta no encontrada" });
      res.status(200).json(venta);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener la venta", error: error.message });
    }
  },

  async actualizarVenta(req, res) {
    try {
      const ventaActualizada = await ventasService.actualizarVenta(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: "Venta actualizada correctamente",
        venta: ventaActualizada,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar la venta",
        error: error.message,
      });
    }
  },

  async eliminarVenta(req, res) {
    try {
      const ventaEliminada = await ventasService.eliminarVenta(req.params.id);
      res.status(200).json({
        message: "Venta eliminada correctamente",
        venta: ventaEliminada,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar la venta",
        error: error.message,
      });
    }
  },

  async obtenerVentasPorUsuario(req, res) {
    const { id } = req.params;
    try {
      const ventas = await ventasService.obtenerVentasPorUsuario(id);
      res.status(200).json(ventas);
    } catch (error) {
      console.error("Error al obtener ventas del usuario:", error);
      res.status(500).json({
        message: "Error al obtener las ventas del usuario",
        error: error.message,
      });
    }
  },

  async obtenerVentasFidelidadPorUsuario(req, res) {
    const { id } = req.params;
    try {
      const ventas = await ventasService.obtenerVentasFidelidadPorUsuario(
        id
      );
      res.status(200).json(ventas);
    } catch (error) {
      console.error("Error al obtener ventas de Fidelidad Chifa:", error);
      res.status(500).json({
        message: "Error al obtener las ventas del programa Fidelidad Chifa",
        error: error.message,
      });
    }
  },

  async obtenerSeguimientoPorUsuario(req, res) {
    try {
      const idUsuarioSolicitado = Number(req.params.usuarioId || req.user?.id_usuario);
      const idVenta = req.query.id ? Number(req.query.id) : null;
      if (!Number.isInteger(idUsuarioSolicitado) || idUsuarioSolicitado <= 0) {
        return res.status(400).json({ message: "Usuario inválido" });
      }

      // Un cliente solo puede consultar sus propios pedidos. Administración y
      // cocina pueden consultar el usuario indicado para atender incidencias.
      const esPersonal = [1, 3].includes(Number(req.user?.rol_usuario));
      if (!esPersonal && idUsuarioSolicitado !== Number(req.user?.id_usuario)) {
        return res.status(403).json({ message: "No puedes consultar este pedido" });
      }

      const venta = await ventasService.obtenerSeguimientoPorUsuario(
        idUsuarioSolicitado,
        Number.isInteger(idVenta) && idVenta > 0 ? idVenta : null,
      );
      if (!venta) {
        return res.status(404).json({ message: "No hay un pedido activo para consultar" });
      }
      return res.json(venta);
    } catch (error) {
      console.error("Error al consultar seguimiento del pedido:", error);
      return res.status(500).json({ message: "Error al consultar el seguimiento", error: error.message });
    }
  },

  async actualizarDatosDelivery(req, res) {
    try {
      const id = Number(req.params.id);
      if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ message: "Pedido inválido" });
      }
      const venta = await ventasService.actualizarDatosDelivery(id, req.body || {});
      return res.json({ message: "Seguimiento de delivery actualizado", venta });
    } catch (error) {
      console.error("Error al actualizar seguimiento de delivery:", error);
      return res.status(400).json({ message: error.message || "No se pudo actualizar el delivery" });
    }
  },
};

module.exports = ventasController;
