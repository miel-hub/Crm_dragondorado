const UsuarioService = require('../services/usuarios.service');

const UsuarioController = {
  getAll: async (req, res, next) => {
    try {
      const usuarios = await UsuarioService.getAll();
      res.json(usuarios);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const usuario = await UsuarioService.getById(req.params.id);
      if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
      const totalPedidos = usuario.ventas.length;
      res.json({ ...usuario, totalPedidos });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const nuevoUsuario = await UsuarioService.create(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const usuario = await UsuarioService.update(req.params.id, req.body);
      res.json(usuario);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      await UsuarioService.delete(req.params.id);
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = UsuarioController;
