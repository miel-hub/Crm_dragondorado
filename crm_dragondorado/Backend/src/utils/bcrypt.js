const bcrypt = require("bcrypt");
const logger = require("./logger.js");

// Función para encriptar una contraseña
async function hash(password, saltRounds = 10) {
  try {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (error) {
    logger.error("Error al encriptar la contraseña:", error);
    throw error;
  }
}

// Función para comparar una contraseña con su hash
async function compare(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    logger.error("Error al comparar contraseñas:", error);
    throw error;
  }
}

module.exports = { hash, compare };
