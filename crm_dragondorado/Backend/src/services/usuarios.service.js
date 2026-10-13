const prisma = require("../config/db.js");
const bcrypt = require("../utils/bcrypt.js");

const UsuarioService = {
  // Obtener todos los usuarios (con juegos y ventas)
  getAll: async () => {
    const usuarios = await prisma.usuarios.findMany({
      include: {
        ventas: true,
      },
    });

    // Agregar totalPedidos a cada usuario
    return usuarios.map((usuario) => ({
      ...usuario,
      totalPedidos: usuario.ventas.length,
      score: usuario.score || 0,
    }));
  },

  // Obtener usuario por ID
  getById: async (id) => {
    const usuario = await prisma.usuarios.findUnique({
      where: { id_usuario: parseInt(id) },
      include: {
        ventas: true,
      },
    });

    if (!usuario) return null;

    return {
      ...usuario,
      totalPedidos: usuario.ventas.length,
      score: usuario.score || 0,
    };
  },

  // Crear nuevo usuario
  create: async (data) => {
    const {
      rol_usuario,
      nombre_usuario,
      correo_usuario,
      clave_usuario,
      telefono_usuario,
      direccion_usuario,
      contador_bubbleTea,
      regalo_bubbleTea,
      score,
    } = data;

    // Validaciones básicas
    if (!nombre_usuario || !correo_usuario || !clave_usuario || !rol_usuario) {
      throw new Error("Faltan campos obligatorios");
    }

    // Verificar si ya existe el correo
    const existente = await prisma.usuarios.findUnique({
      where: { correo_usuario },
    });
    if (existente) throw new Error("El correo ya está registrado");

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(clave_usuario, 10);

    // Crear usuario
    return await prisma.usuarios.create({
      data: {
        rol_usuario: parseInt(rol_usuario),
        nombre_usuario,
        correo_usuario,
        clave_usuario: hashedPassword,
        telefono_usuario: telefono_usuario || null,
        direccion_usuario: direccion_usuario || null,
        fecha_registro: new Date(),
        contador_bubbleTea: parseInt(contador_bubbleTea) || 0,
        regalo_bubbleTea: regalo_bubbleTea,
        score: parseInt(score) || 0,
      },
    });
  },

  // Actualizar usuario
  update: async (id, data) => {
    const { clave_usuario } = data;

    // Si se envía una nueva clave, la encripta
    if (clave_usuario) {
      data.clave_usuario = await bcrypt.hash(clave_usuario, 10);
    }

    return await prisma.usuarios.update({
      where: { id_usuario: parseInt(id) },
      data,
    });
  },

  // Eliminar usuario
  delete: async (id) => {
    return await prisma.usuarios.delete({
      where: { id_usuario: parseInt(id) },
    });
  },
};

module.exports = UsuarioService;
