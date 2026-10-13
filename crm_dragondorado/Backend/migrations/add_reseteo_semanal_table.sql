-- Crear tabla para controlar el reseteo semanal de puntajes
CREATE TABLE IF NOT EXISTS `reseteo_semanal` (
  `id_reseteo` INT NOT NULL AUTO_INCREMENT,
  `fecha_ultimo_reset` DATETIME(0) NOT NULL,
  `semana_anio` INT NOT NULL,
  `anio` INT NOT NULL,
  PRIMARY KEY (`id_reseteo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Crear índice para búsquedas más rápidas
CREATE INDEX `idx_anio_semana` ON `reseteo_semanal` (`anio`, `semana_anio`);

-- Comentario sobre la tabla
-- Esta tabla registra cada reseteo semanal de puntajes de usuarios
-- El sistema verifica automáticamente cada hora si es necesario resetear los puntajes
-- Los reseteos se realizan cada lunes a las 00:00 hrs
