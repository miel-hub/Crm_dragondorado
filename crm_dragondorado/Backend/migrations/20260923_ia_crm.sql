-- Migración del módulo IA/CRM de Dragón Dorado.
-- Ejecutar una sola vez después de las migraciones existentes.

ALTER TABLE productos
  ADD COLUMN descripcion_corta VARCHAR(160) NULL,
  ADD COLUMN tags_seo TEXT NULL,
  ADD COLUMN seo_generado_en DATETIME NULL;

CREATE TABLE IF NOT EXISTS ia_conversaciones (
  id_conversacion INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NULL,
  mensaje_usuario TEXT NOT NULL,
  respuesta_ia TEXT NOT NULL,
  intencion VARCHAR(80) NOT NULL,
  confianza DECIMAL(5,2) NULL,
  resuelta TINYINT(1) NOT NULL DEFAULT 0,
  canal VARCHAR(30) NOT NULL DEFAULT 'web',
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_conversacion),
  KEY ia_conversaciones_id_usuario_idx (id_usuario),
  KEY ia_conversaciones_fecha_idx (fecha),
  KEY ia_conversaciones_resuelta_idx (resuelta),
  CONSTRAINT ia_conversaciones_usuario_fk FOREIGN KEY (id_usuario)
    REFERENCES usuarios (id_usuario) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS feedback (
  id_feedback INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NULL,
  mensaje TEXT NOT NULL,
  canal VARCHAR(30) NOT NULL DEFAULT 'web',
  sentimiento VARCHAR(20) NOT NULL DEFAULT 'neutro',
  categoria VARCHAR(40) NOT NULL DEFAULT 'otros',
  criticidad INT NOT NULL DEFAULT 1,
  nps INT NULL,
  atendido TINYINT(1) NOT NULL DEFAULT 0,
  respuesta TEXT NULL,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_atencion DATETIME NULL,
  PRIMARY KEY (id_feedback),
  KEY feedback_atendido_idx (atendido),
  KEY feedback_fecha_idx (fecha_creacion),
  KEY feedback_sentimiento_idx (sentimiento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS email_eventos (
  id_evento INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NULL,
  correo VARCHAR(255) NOT NULL,
  tipo VARCHAR(40) NOT NULL DEFAULT 'bienvenida',
  token VARCHAR(80) NOT NULL,
  fecha_envio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_apertura DATETIME NULL,
  fecha_clic DATETIME NULL,
  PRIMARY KEY (id_evento),
  UNIQUE KEY email_eventos_token_uq (token),
  KEY email_eventos_correo_idx (correo),
  CONSTRAINT email_eventos_usuario_fk FOREIGN KEY (id_usuario)
    REFERENCES usuarios (id_usuario) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reservas (
  id_reserva INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NULL,
  nombre VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NULL,
  telefono VARCHAR(30) NULL,
  fecha_reserva DATETIME NOT NULL,
  personas INT NOT NULL,
  salon VARCHAR(80) NULL,
  estado VARCHAR(30) NOT NULL DEFAULT 'pendiente',
  notas TEXT NULL,
  creado_en DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_reserva),
  KEY reservas_fecha_idx (fecha_reserva),
  KEY reservas_estado_idx (estado),
  KEY reservas_id_usuario_idx (id_usuario),
  CONSTRAINT reservas_usuario_fk FOREIGN KEY (id_usuario)
    REFERENCES usuarios (id_usuario) ON UPDATE RESTRICT ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
