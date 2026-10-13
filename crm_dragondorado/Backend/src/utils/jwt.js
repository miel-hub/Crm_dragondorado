const jwt = require("jsonwebtoken");
const logger = require("./logger.js");

const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRES_IN = "1d";

function generateToken(payload) {
  try {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
    return token;
  } catch (error) {
    logger.error("Error al generar token JWT:", error);
    throw error;
  }
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    logger.error("Token inválido o expirado:", error);
    throw new Error("Token inválido o expirado");
  }
}

function extractToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  return authHeader.split(" ")[1];
}

module.exports = { generateToken, verifyToken, extractToken };