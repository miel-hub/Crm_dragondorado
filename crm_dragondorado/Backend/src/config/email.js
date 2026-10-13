// Backend/src/config/email.js
const nodemailer = require("nodemailer");

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true para puerto 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verificar conexión solo cuando hay credenciales. Así el API del chatbot y
// del catálogo puede levantarse localmente sin SMTP configurado.
if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
  transporter.verify(function (error) {
    if (error) {
      console.error("❌ Error al configurar el servicio de email:", error);
    } else {
      console.log("✅ Servidor de email listo para enviar mensajes");
    }
  });
}

module.exports = transporter;
