const prisma = require("../config/db.js");

const ReservasController = {
  crear: async (req, res, next) => {
    try {
      const { nombre, correo, telefono, fecha_reserva, personas, salon, notas } = req.body || {};
      const cantidad = Number(personas);
      const fecha = new Date(fecha_reserva);
      if (!nombre || !fecha_reserva || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > 35) {
        return res.status(400).json({ message: "Nombre, fecha y número de personas válido son obligatorios" });
      }
      if (Number.isNaN(fecha.getTime()) || fecha <= new Date()) {
        return res.status(400).json({ message: "La fecha de reserva debe ser futura" });
      }

      const horasAnticipacion = (fecha.getTime() - Date.now()) / (60 * 60 * 1000);
      if (cantidad > 8 && horasAnticipacion < 72) {
        return res.status(400).json({ message: "Las reservas grupales requieren 72 horas de anticipación" });
      }
      if (cantidad <= 8 && horasAnticipacion < 24) {
        return res.status(400).json({ message: "Las reservas individuales requieren 24 horas de anticipación" });
      }

      const inicioDia = new Date(fecha);
      inicioDia.setHours(0, 0, 0, 0);
      const finDia = new Date(inicioDia);
      finDia.setDate(finDia.getDate() + 1);
      const existentes = await prisma.reservas.aggregate({
        where: {
          fecha_reserva: { gte: inicioDia, lt: finDia },
          estado: { in: ["pendiente", "confirmada"] },
        },
        _sum: { personas: true },
      });
      const personasReservadas = Number(existentes._sum.personas || 0);
      const limite = salon === "privado" ? 35 : 96;
      if (personasReservadas + cantidad > limite) {
        return res.status(409).json({ message: "No hay cupos disponibles para esa fecha", personasReservadas, limite });
      }

      const reserva = await prisma.reservas.create({
        data: {
          id_usuario: req.user?.id_usuario || null,
          nombre: String(nombre).trim(),
          correo: correo ? String(correo).trim() : null,
          telefono: telefono ? String(telefono).trim() : null,
          fecha_reserva: fecha,
          personas: cantidad,
          salon: salon || (cantidad > 8 ? "privado" : "principal"),
          notas: notas ? String(notas).trim() : null,
        },
      });
      return res.status(201).json({ message: "Solicitud de reserva recibida", reserva });
    } catch (error) {
      return next(error);
    }
  },

  listar: async (_req, res, next) => {
    try {
      const reservas = await prisma.reservas.findMany({
        include: { usuarios: { select: { nombre_usuario: true, correo_usuario: true } } },
        orderBy: { fecha_reserva: "asc" },
        take: 200,
      });
      return res.json(reservas);
    } catch (error) {
      return next(error);
    }
  },

  actualizarEstado: async (req, res, next) => {
    try {
      const estados = ["pendiente", "confirmada", "atendida", "cancelada"];
      if (!estados.includes(req.body?.estado)) return res.status(400).json({ message: "Estado no válido" });
      const reserva = await prisma.reservas.update({
        where: { id_reserva: Number(req.params.id) },
        data: { estado: req.body.estado },
      });
      return res.json(reserva);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ReservasController;
