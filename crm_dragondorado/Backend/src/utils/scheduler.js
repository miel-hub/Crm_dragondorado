const reseteoService = require("../services/reseteo.service");
const logger = require("./logger.js");

let intervalo = null;

/**
 * Inicia el scheduler de reseteo semanal
 * Verifica cada hora si es necesario resetear los puntajes
 */
function iniciarScheduler() {
  logger.info("🕐 Iniciando scheduler de reseteo semanal...");
  
  // Verificar inmediatamente al iniciar
  reseteoService.verificarYResetear()
    .then((resultado) => {
      if (resultado.success && resultado.usuariosActualizados) {
        logger.success(`✓ Reseteo inicial completado: ${resultado.usuariosActualizados} usuarios`);
      }
    })
    .catch((error) => {
      logger.error("Error en verificación inicial:", error);
    });

  // Verificar cada hora (3600000 ms)
  intervalo = setInterval(async () => {
    try {
      await reseteoService.verificarYResetear();
    } catch (error) {
      logger.error("Error en scheduler de reseteo:", error);
    }
  }, 3600000); // 1 hora

  logger.success("✓ Scheduler configurado: verificará cada hora");
}

/**
 * Detiene el scheduler
 */
function detenerScheduler() {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
    logger.info("⏹ Scheduler de reseteo semanal detenido");
  }
}

/**
 * Obtiene el estado del scheduler
 */
function obtenerEstado() {
  return {
    activo: intervalo !== null,
    intervalo: "1 hora"
  };
}

module.exports = {
  iniciarScheduler,
  detenerScheduler,
  obtenerEstado
};
