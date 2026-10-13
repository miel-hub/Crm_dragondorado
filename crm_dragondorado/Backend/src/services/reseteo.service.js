const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * Obtiene el número de semana del año según ISO 8601
 * Lunes es el primer día de la semana
 */
function obtenerSemanaDelAnio(fecha) {
  const date = new Date(fecha);
  // Establecer a las 00:00:00
  date.setHours(0, 0, 0, 0);
  // Establecer al jueves de la semana actual (ISO 8601)
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  // Obtener el primer día del año
  const yearStart = new Date(date.getFullYear(), 0, 1);
  // Calcular el número de semana completa
  const weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return weekNumber;
}

/**
 * Obtiene el lunes de la semana actual a las 00:00
 */
function obtenerLunesActual() {
  const ahora = new Date();
  const dia = ahora.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
  const diff = dia === 0 ? -6 : 1 - dia; // Si es domingo, retroceder 6 días
  const lunes = new Date(ahora);
  lunes.setDate(ahora.getDate() + diff);
  lunes.setHours(0, 0, 0, 0);
  return lunes;
}

/**
 * Verifica si es necesario resetear los puntajes
 * Retorna true si ya pasó el lunes de esta semana y no se ha reseteado
 */
async function necesitaReseteo() {
  try {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();
    const semanaActual = obtenerSemanaDelAnio(ahora);
    
    // Buscar el último reseteo
    const ultimoReseteo = await prisma.reseteo_semanal.findFirst({
      orderBy: {
        fecha_ultimo_reset: 'desc'
      }
    });

    // Si no hay registro, necesita reseteo
    if (!ultimoReseteo) {
      return true;
    }

    // Si el año o la semana son diferentes, necesita reseteo
    if (ultimoReseteo.anio !== anioActual || ultimoReseteo.semana_anio !== semanaActual) {
      const lunesActual = obtenerLunesActual();
      // Solo resetear si ya pasó el lunes de esta semana
      if (ahora >= lunesActual) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error("Error al verificar necesidad de reseteo:", error);
    return false;
  }
}

/**
 * Resetea todos los puntajes de usuarios a 0
 */
async function resetearPuntajes() {
  try {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();
    const semanaActual = obtenerSemanaDelAnio(ahora);

    console.log(`[${ahora.toISOString()}] Iniciando reseteo semanal de puntajes...`);
    console.log(`Año: ${anioActual}, Semana: ${semanaActual}`);

    // Actualizar todos los scores a 0
    const resultado = await prisma.usuarios.updateMany({
      data: {
        score: 0
      }
    });

    console.log(`✓ Puntajes reseteados: ${resultado.count} usuarios actualizados`);

    // Registrar el reseteo
    await prisma.reseteo_semanal.create({
      data: {
        fecha_ultimo_reset: ahora,
        semana_anio: semanaActual,
        anio: anioActual
      }
    });

    console.log(`✓ Reseteo semanal registrado exitosamente`);

    return {
      success: true,
      usuariosActualizados: resultado.count,
      fecha: ahora,
      semana: semanaActual,
      anio: anioActual
    };
  } catch (error) {
    console.error("Error al resetear puntajes:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Verifica y ejecuta el reseteo si es necesario
 * Esta función se llama al iniciar el servidor y periódicamente
 */
async function verificarYResetear() {
  try {
    const necesita = await necesitaReseteo();
    
    if (necesita) {
      console.log("⚠ Se detectó que es necesario resetear los puntajes");
      const resultado = await resetearPuntajes();
      return resultado;
    } else {
      console.log("✓ Los puntajes ya están actualizados para esta semana");
      return {
        success: true,
        mensaje: "No es necesario resetear"
      };
    }
  } catch (error) {
    console.error("Error en verificación de reseteo:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Obtiene información sobre el último reseteo
 */
async function obtenerInfoReseteo() {
  try {
    const ultimoReseteo = await prisma.reseteo_semanal.findFirst({
      orderBy: {
        fecha_ultimo_reset: 'desc'
      }
    });

    const ahora = new Date();
    const semanaActual = obtenerSemanaDelAnio(ahora);
    const proximoLunes = obtenerLunesActual();
    proximoLunes.setDate(proximoLunes.getDate() + 7);

    return {
      ultimoReseteo: ultimoReseteo ? {
        fecha: ultimoReseteo.fecha_ultimo_reset,
        semana: ultimoReseteo.semana_anio,
        anio: ultimoReseteo.anio
      } : null,
      semanaActual: semanaActual,
      anioActual: ahora.getFullYear(),
      proximoReseteo: proximoLunes
    };
  } catch (error) {
    console.error("Error al obtener info de reseteo:", error);
    return null;
  }
}

module.exports = {
  verificarYResetear,
  resetearPuntajes,
  necesitaReseteo,
  obtenerInfoReseteo,
  obtenerLunesActual,
  obtenerSemanaDelAnio
};
