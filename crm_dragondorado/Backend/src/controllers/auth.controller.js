const prisma = require("../config/db.js");
const bcrypt = require("../utils/bcrypt.js");
const jwtUtils = require("../utils/jwt.js");
const EmailService = require("../services/email.service.js");
const logger = require("../utils/logger.js");

const AuthController = {
  // Registro de nuevo usuario
  register: async (req, res) => {
    try {
      const {
        rol_usuario = 2, // por defecto, usuario normal
        nombre_usuario,
        correo_usuario,
        clave_usuario,
        telefono_usuario,
        direccion_usuario,
      } = req.body;

      // Validar campos requeridos
      if (!nombre_usuario) {
        return res.status(400).json({ message: "El nombre es obligatorio" });
      }
      if (!correo_usuario) {
        return res.status(400).json({ message: "El correo electrónico es obligatorio" });
      }
      if (!clave_usuario) {
        return res.status(400).json({ message: "La contraseña es obligatoria" });
      }
      
      // Validar formato de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo_usuario)) {
        return res.status(400).json({ message: "El formato del correo electrónico no es válido" });
      }
      
      // Validar longitud de contraseña
      if (clave_usuario.length < 6) {
        return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
      }

      // Verificar si el correo ya existe
      const userExist = await prisma.usuarios.findUnique({
        where: { correo_usuario },
      });
      if (userExist)
        return res.status(400).json({ message: "El correo ya está registrado" });

      // Encriptar contraseña
      const hashedPassword = await bcrypt.hash(clave_usuario, 10);

      // Crear usuario en base de datos (CORRECCIÓN AQUÍ)
      const newUser = await prisma.usuarios.create({
        data: {
          rol_usuario: parseInt(rol_usuario) || 2,
          nombre_usuario,
          correo_usuario,
          clave_usuario: hashedPassword,
          telefono_usuario: telefono_usuario || "", // Antes era null
          direccion_usuario: direccion_usuario || "", // Antes era null
          fecha_registro: new Date(),
          contador_bubbleTea: 0,
        },
      });

      // Enviar correo de bienvenida
      try {
        await EmailService.enviarBienvenida(newUser);
        logger.info("Correo de bienvenida enviado exitosamente a:", newUser.correo_usuario);
      } catch (emailError) {
        logger.error("Error enviando correo de bienvenida:", emailError);
      }

      // Generar token JWT
      const token = jwtUtils.generateToken({
        id_usuario: newUser.id_usuario,
        rol_usuario: newUser.rol_usuario,
        correo_usuario: newUser.correo_usuario,
      });

      // Guardar token en cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 día
      });

      logger.debug('Cookie de autenticación establecida para:', newUser.correo_usuario);

      return res.status(201).json({
        message: "Usuario registrado exitosamente",
        usuario: {
          id_usuario: newUser.id_usuario,
          nombre_usuario: newUser.nombre_usuario,
          rol_usuario: newUser.rol_usuario,
        },
      });
    } catch (error) {
      logger.error("Error en registro:", error);
      if (error.code === 'P2002') {
        return res.status(400).json({ message: "El correo ya está registrado" });
      }
      return res.status(500).json({ 
        message: "Error al procesar el registro. Por favor, intenta nuevamente." 
      });
    }
  },

  // Iniciar sesión
  login: async (req, res) => {
    try {
      const { correo_usuario, clave_usuario } = req.body;

      if (!correo_usuario) {
        return res.status(400).json({ message: "El correo electrónico es requerido" });
      }
      if (!clave_usuario) {
        return res.status(400).json({ message: "La contraseña es requerida" });
      }

      const user = await prisma.usuarios.findUnique({
        where: { correo_usuario },
      });

      if (!user) {
        return res.status(404).json({ 
          message: "No existe una cuenta con este correo electrónico" 
        });
      }

      const validPassword = await bcrypt.compare(
        clave_usuario,
        user.clave_usuario
      );
      
      if (!validPassword) {
        return res.status(401).json({ 
          message: "La contraseña es incorrecta. Por favor, verifica e intenta nuevamente." 
        });
      }

      const token = jwtUtils.generateToken({
        id_usuario: user.id_usuario,
        rol_usuario: user.rol_usuario,
        correo_usuario: user.correo_usuario,
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      logger.debug('Cookie de autenticación establecida para:', user.correo_usuario);

      return res.json({
        message: "Inicio de sesión exitoso",
        usuario: {
          id_usuario: user.id_usuario,
          nombre_usuario: user.nombre_usuario,
          rol_usuario: user.rol_usuario,
          correo_usuario: user.correo_usuario,
          telefono_usuario: user.telefono_usuario,
          direccion_usuario: user.direccion_usuario,
          fecha_registro: user.fecha_registro,
          contador_bubbleTea: user.contador_bubbleTea,
        },
      });
    } catch (error) {
      logger.error("Error en login:", error);
      return res.status(500).json({ 
        message: "Error al procesar el inicio de sesión. Por favor, verifica tu conexión e intenta nuevamente." 
      });
    }
  },

  // Cerrar sesión
  logout: (req, res) => {
    res.clearCookie("token");
    return res.json({ message: "Sesión cerrada exitosamente" });
  },

  // Verificar sesión actual
  checkSession: async (req, res) => {
    try {
      const token = req.cookies.token;

      if (!token) {
        return res.json({
          ok: false,
          usuario: null,
        });
      }

      const decoded = jwtUtils.verifyToken(token);

      const user = await prisma.usuarios.findUnique({
        where: { id_usuario: decoded.id_usuario },
      });

      if (!user) {
        return res.json({
          ok: false,
          usuario: null,
        });
      }

      return res.json({
        ok: true,
        usuario: {
          id_usuario: user.id_usuario,
          nombre_usuario: user.nombre_usuario,
          correo_usuario: user.correo_usuario,
          telefono_usuario: user.telefono_usuario,
          direccion_usuario: user.direccion_usuario,
          rol_usuario: user.rol_usuario,
          contador_bubbleTea: user.contador_bubbleTea,
          fecha_registro: user.fecha_registro,
        },
      });
    } catch (error) {
      return res.json({
        ok: false,
        usuario: null,
      });
    }
  },

  // Cambiar contraseña
  changePassword: async (req, res) => {
    try {
      const token = req.cookies.token; 
      if (!token) {
        return res.status(401).json({ message: "No autenticado" });
      }

      const decoded = jwtUtils.verifyToken(token);
      const userId = decoded.id_usuario;
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Debes llenar todos los campos" });
      }

      const user = await prisma.usuarios.findUnique({
        where: { id_usuario: userId },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const validPassword = await bcrypt.compare(
        currentPassword,
        user.clave_usuario
      );
      if (!validPassword) {
        return res.status(400).json({ message: "La contraseña actual es incorrecta" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await prisma.usuarios.update({
        where: { id_usuario: userId },
        data: { clave_usuario: hashedPassword },
      });

      return res.json({ message: "Contraseña actualizada correctamente" });
    } catch (error) {
      logger.error("Error al cambiar contraseña:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = AuthController;