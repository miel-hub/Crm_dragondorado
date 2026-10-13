// src/middlewares/auth.middleware.js
const jwtUtils = require("../utils/jwt");
const logger = require("../utils/logger");

async function authenticateToken(req, res, next) {
  try {
    logger.debug('Verificando autenticación para:', req.method, req.path);
    
    // 1️⃣ Busca token en encabezado Authorization
    const authHeader = req.headers["authorization"];
    let token = null;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
      logger.debug('Token encontrado en Authorization header');
    }

    // 2️⃣ Si no hay en header, busca en cookie
    if (!token && req.cookies.token) {
      token = req.cookies.token;
      logger.debug('Token encontrado en cookie');
    }

    // 3️⃣ Si sigue sin token, error
    if (!token) {
      logger.debug('No se encontró token en headers ni cookies');
      logger.debug('Cookies recibidas:', Object.keys(req.cookies));
      return res.status(401).json({ message: "Token no proporcionado" });
    }

    // 4️⃣ Verifica token
    const decoded = jwtUtils.verifyToken(token);
    req.user = decoded;
    logger.debug('Usuario autenticado:', decoded.correo_usuario);
    next();
  } catch (error) {
    logger.error("Error de autenticación JWT:", error.message);
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
}

function authorizeRoles(rolesPermitidos = []) {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
      }

      const { rol_usuario } = req.user;
      if (!rolesPermitidos.includes(rol_usuario)) {
        return res.status(403).json({ message: "Acceso denegado: rol no autorizado" });
      }

      next();
    } catch (error) {
      console.error("Error en autorización de roles:", error.message);
      return res.status(500).json({ message: "Error interno de autorización" });
    }
  };
}

// El chatbot también atiende visitantes anónimos. Este middleware aprovecha
// la sesión si existe, pero no bloquea la conversación cuando no hay cookie.
function optionalAuthenticateToken(req, _res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies?.token;

    if (token) req.user = jwtUtils.verifyToken(token);
  } catch (_error) {
    // Sesión ausente o expirada: continuar como visitante.
  }
  next();
}

function refreshToken(req, res) {
  try {
    const authHeader = req.headers["authorization"];
    const token =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }

    const decoded = jwtUtils.verifyToken(token);
    const newToken = jwtUtils.generateToken({
      id_usuario: decoded.id_usuario,
      rol_usuario: decoded.rol_usuario,
      correo_usuario: decoded.correo_usuario,
    });

    return res.json({ token: newToken });
  } catch (error) {
    console.error("Error al refrescar token:", error.message);
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
}

module.exports = {
  authenticateToken,
  optionalAuthenticateToken,
  authorizeRoles,
  refreshToken,
};
