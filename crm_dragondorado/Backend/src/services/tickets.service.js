// crm_dragon_dorado/Backend/src/services/tickets.service.js
const prisma = require("../config/db.js");

const TicketService = {
  // Obtener todos los tickets
  getAll: async () => {
    return await prisma.tickets.findMany({
      orderBy: { id_ticket: "asc" },
    });
  },

  // Obtener ticket por ID
  getById: async (id) => {
    return await prisma.tickets.findUnique({
      where: { id_ticket: parseInt(id) },
    });
  },

  // 🔹 Nuevo: Obtener ticket por CÓDIGO
  getByCodigo: async (codigo) => {
    return await prisma.tickets.findUnique({
      where: { codigo_ticket: codigo },
    });
  },

  // Crear un nuevo ticket
  create: async (data) => {
    const { nombre_ticket, codigo_ticket, descuento, id_usuario } = data;

    if (!nombre_ticket || nombre_ticket.trim() === "") {
      throw new Error("El campo 'nombre_ticket' es obligatorio");
    }

    return await prisma.tickets.create({
      data: {
        nombre_ticket: nombre_ticket.trim(),
        codigo_ticket: codigo_ticket ?? null,
        descuento: descuento ?? 0,
        id_usuario: id_usuario ? parseInt(id_usuario) : null,
      },
    });
  },

  // Actualizar un ticket
  update: async (id, data) => {
    const { nombre_ticket, codigo_ticket, descuento, usado, id_usuario } = data;

    return await prisma.tickets.update({
      where: { id_ticket: parseInt(id) },
      data: {
        ...(nombre_ticket && { nombre_ticket }),
        ...(codigo_ticket && { codigo_ticket }),
        ...(descuento !== undefined && { descuento }),
        ...(usado !== undefined && { usado }),
        ...(id_usuario !== undefined && {
          id_usuario: id_usuario ? parseInt(id_usuario) : null,
        }),
      },
    });
  },

  // Eliminar un ticket
  delete: async (id) => {
    return await prisma.tickets.delete({
      where: { id_ticket: parseInt(id) },
    });
  },

  // Obtener los tickets de un usuario específico
  getByUsuario: async (id_usuario) => {
    return await prisma.tickets.findMany({
      where: { id_usuario: parseInt(id_usuario) },
      orderBy: { id_ticket: "asc" },
    });
  },

  // 🔹 Nuevo: Marcar ticket como usado
  usarTicket: async (codigo) => {
    return await prisma.tickets.update({
      where: { codigo_ticket: codigo },
      data: { usado: true },
    });
  },
};

module.exports = TicketService;
