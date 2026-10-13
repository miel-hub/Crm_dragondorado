// utils/logger.js - Sistema de logging profesional

const isDevelopment = process.env.NODE_ENV !== 'production';

const logger = {
  // Debug: Solo en desarrollo
  debug: (...args) => {
    if (isDevelopment) {
      console.log('🔍', ...args);
    }
  },

  // Info: Importante en producción
  info: (...args) => {
    console.log('ℹ️', ...args);
  },

  // Success: Operaciones exitosas
  success: (...args) => {
    console.log('✅', ...args);
  },

  // Warning: Advertencias
  warn: (...args) => {
    console.warn('⚠️', ...args);
  },

  // Error: Errores críticos
  error: (...args) => {
    console.error('❌', ...args);
  },

  // HTTP requests (solo desarrollo)
  http: (method, path, status) => {
    if (isDevelopment) {
      const statusEmoji = status >= 200 && status < 300 ? '✅' : status >= 400 ? '❌' : '⚠️';
      console.log(`${statusEmoji} ${method} ${path} - ${status}`);
    }
  }
};

module.exports = logger;
