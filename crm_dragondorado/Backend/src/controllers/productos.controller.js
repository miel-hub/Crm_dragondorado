const ProductoService = require('../services/productos.service');

const ProductoController = {
  getAll: async (req, res, next) => {
    try {
      const productos = await ProductoService.getAll();
      res.json(productos);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const producto = await ProductoService.getById(req.params.id);
      if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
      res.json(producto);
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const nuevoProducto = await ProductoService.create(req.body);
      res.status(201).json(nuevoProducto);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const producto = await ProductoService.update(req.params.id, req.body);
      res.json(producto);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      await ProductoService.delete(req.params.id);
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ProductoController;
