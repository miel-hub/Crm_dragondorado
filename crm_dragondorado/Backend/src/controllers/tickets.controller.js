// crm_dragon_dorado/Backend/src/controllers/tickets.controller.js
const TicketService = require("../services/tickets.service");

const TicketController = {
  getAll: async (req, res, next) => {
    try {
      const tickets = await TicketService.getAll();
      res.json(tickets);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const ticket = await TicketService.getById(req.params.id);
      if (!ticket)
        return res.status(404).json({ message: "Ticket no encontrado" });
      res.json(ticket);
    } catch (err) {
      next(err);
    }
  },

  // 🔹 Nuevo: obtener ticket por código
  getByCodigo: async (req, res, next) => {
    try {
      const ticket = await TicketService.getByCodigo(req.params.codigo);
      if (!ticket)
        return res.status(404).json({ message: "Ticket no encontrado" });
      res.json({ ticket });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const nuevoTicket = await TicketService.create(req.body);
      res.status(201).json(nuevoTicket);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const ticket = await TicketService.update(req.params.id, req.body);
      res.json(ticket);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      await TicketService.delete(req.params.id);
      res.json({ message: "Ticket eliminado correctamente" });
    } catch (err) {
      next(err);
    }
  },

  getByUsuario: async (req, res, next) => {
    try {
      const tickets = await TicketService.getByUsuario(req.params.id_usuario);
      res.json(tickets);
    } catch (err) {
      next(err);
    }
  },

  // 🔹 Nuevo: marcar ticket como usado
  usarTicket: async (req, res, next) => {
    try {
      const ticket = await TicketService.usarTicket(req.params.codigo);
      res.json({ message: "Ticket marcado como usado", ticket });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = TicketController;
