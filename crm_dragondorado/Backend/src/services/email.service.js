// Backend/src/services/email.service.js
const transporter = require("../config/email");
const prisma = require("../config/db.js");
const { crearToken } = require("./ia.service.js");

function escaparHtml(valor) {
  return String(valor || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function urlApiPublica() {
  return (process.env.PUBLIC_API_URL || process.env.BACKEND_URL || "http://localhost:3000").replace(/\/$/, "");
}

const EmailService = {
  /**
   * Enviar correo de bienvenida a un nuevo usuario
   */
  enviarBienvenida: async (usuario) => {
    const nombre = escaparHtml(usuario.nombre_usuario);
    const token = crearToken();
    let trackingPixel = "";
    let enlaceMenu = `${process.env.FRONTEND_URL || "http://localhost:5173"}/catalogo`;

    try {
      await prisma.email_eventos.create({
        data: {
          id_usuario: usuario.id_usuario || null,
          correo: usuario.correo_usuario,
          tipo: "bienvenida",
          token,
        },
      });
      trackingPixel = `<img src="${urlApiPublica()}/api/email/open/${token}" width="1" height="1" alt="" style="display:none" />`;
      enlaceMenu = `${urlApiPublica()}/api/email/click/${token}`;
    } catch (trackingError) {
      // El correo debe seguir enviándose aunque todavía no se haya aplicado
      // la migración de analítica en una instalación local.
      console.error("⚠️ No se pudo crear el evento del correo de bienvenida:", trackingError.message);
    }

    const mailOptions = {
      from: `"Dragón Dorado - Chifa" <${process.env.EMAIL_USER}>`,
      to: usuario.correo_usuario,
      subject: "¡Bienvenido a Dragón Dorado! 🐉🔥",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%); color: #FFD700; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .benefit { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #FFD700; border-radius: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            .button { background: #8B0000; color: #FFD700; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Bienvenido/a a Dragón Dorado! 🐉🔥</h1>
            </div>
            <div class="content">
              <h2>¡Hola ${nombre}! 👋</h2>
              <p>Estamos muy felices de tenerte con nosotros. Tu cuenta ha sido creada exitosamente.</p>
              
              <h3>🎁 Beneficios de ser usuario registrado:</h3>
              
              <div class="benefit">
                <strong>🥡 Programa de Fidelidad Chifa</strong>
                <p>Por cada S/ 150 en consumición, recibe un PLATO ESPECIAL GRATIS. Acumula puntos automáticamente.</p>
              </div>
              
              <div class="benefit">
                <strong>🎮 Juega y Gana</strong>
                <p>Participa en nuestro juego interactivo y gana tickets de descuento. ¡Los mejores jugadores reciben premios especiales!</p>
              </div>
              
              <div class="benefit">
                <strong>🎫 Tickets de Descuento</strong>
                <p>Recibe tickets exclusivos con descuentos de hasta 30% en tus platos chifa favoritos.</p>
              </div>
              
              <div class="benefit">
                <strong>📱 Seguimiento de Pedidos</strong>
                <p>Recibe notificaciones por correo sobre el estado de tus pedidos en tiempo real.</p>
              </div>
              
              <div class="benefit">
                <strong>⭐ Historial y Puntos</strong>
                <p>Consulta tu historial de pedidos y acumula puntos por cada consumo.</p>
              </div>
              
              <p style="margin-top: 30px;">¿Qué esperas? ¡Explora nuestro menú y disfruta del auténtico sabor chifa peruano!</p>
              
              <div style="text-align: center;">
                <a href="${enlaceMenu}" class="button">Ver Menú</a>
              </div>
            </div>
            <div class="footer">
              <p>Dragón Dorado - Auténtica comida chifa peruana</p>
              <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
              ${trackingPixel}
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Correo de bienvenida enviado a: ${usuario.correo_usuario}`);
    } catch (error) {
      console.error("❌ Error enviando correo de bienvenida:", error);
      throw error;
    }
  },

  /**
   * Enviar notificación de nuevo pedido
   */
  enviarNotificacionPedido: async (usuario, venta) => {
    const mailOptions = {
      from: `"Dragón Dorado - Chifa" <${process.env.EMAIL_USER}>`,
      to: usuario.correo_usuario,
      subject: `Pedido #${venta.id_venta} recibido - Dragón Dorado 🥡`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%); color: #FFD700; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .order-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .product-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .total { font-size: 20px; font-weight: bold; color: #8B0000; margin-top: 15px; text-align: right; }
            .status-badge { display: inline-block; padding: 8px 15px; background: #DC143C; color: #FFD700; border-radius: 5px; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Pedido Recibido! 🎉</h1>
              <p>Pedido #${venta.id_venta}</p>
            </div>
            <div class="content">
              <h2>¡Gracias por tu pedido, ${usuario.nombre_usuario}! 🙏</h2>
              <p>Hemos recibido tu pedido correctamente y estamos preparándolo con mucho sazón.</p>
              
              <div class="order-details">
                <h3>Detalles del Pedido:</h3>
                <p><strong>Número de Pedido:</strong> #${venta.id_venta}</p>
                <p><strong>Fecha:</strong> ${new Date(venta.fecha_venta).toLocaleString('es-PE')}</p>
                <p><strong>Estado:</strong> <span class="status-badge">Por Confirmar</span></p>
                
                <h4 style="margin-top: 20px;">Platos:</h4>
                ${venta.detalleventa.map(item => `
                  <div class="product-item">
                    <span>${item.cantidad}x ${item.productos.nombre_producto}</span>
                    <span>S/ ${Number(item.subtotal).toFixed(2)}</span>
                  </div>
                `).join('')}
                
                <div class="total">
                  Total: S/ ${Number(venta.total).toFixed(2)}
                </div>
              </div>
              
              <p>Te notificaremos por correo cuando tu pedido cambie de estado.</p>
              <p><strong>Estados del pedido:</strong></p>
              <ul>
                <li>🔴 Por Confirmar - Acabamos de recibir tu pedido</li>
                <li>🟡 En Preparación - Nuestros cocineros lo están preparando</li>
                <li>🟢 Por Recoger / Delivery - Tu pedido está listo</li>
                <li>⚪ Entregado - Pedido completado. ¡Buen provecho!</li>
              </ul>
            </div>
            <div class="footer">
              <p>Dragón Dorado - Auténtica comida chifa peruana</p>
              <p>Si tienes alguna pregunta sobre tu pedido, contáctanos.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Notificación de pedido enviada a: ${usuario.correo_usuario}`);
    } catch (error) {
      console.error("❌ Error enviando notificación de pedido:", error);
      throw error;
    }
  },

  /**
   * Enviar notificación de cambio de estado del pedido
   */
  enviarCambioEstado: async (usuario, venta, estadoAnterior) => {
    const estadoInfo = {
      "por confirmar": { emoji: "🔴", color: "#DC143C", mensaje: "Tu pedido ha sido recibido y está por confirmar" },
      "en preparacion": { emoji: "🟡", color: "#DAA520", mensaje: "¡Nuestros cocineros están preparando tu pedido con sazón de dragón!" },
      "por recoger": { emoji: "🟢", color: "#4caf50", mensaje: "¡Tu pedido está listo para recoger o en camino!" },
      "entregado": { emoji: "⚪", color: "#9e9e9e", mensaje: "Tu pedido ha sido entregado. ¡Que lo disfrutes!" },
    };

    const info = estadoInfo[venta.estado] || estadoInfo["por confirmar"];

    const mailOptions = {
      from: `"Dragón Dorado - Chifa" <${process.env.EMAIL_USER}>`,
      to: usuario.correo_usuario,
      subject: `${info.emoji} Actualización de tu Pedido #${venta.id_venta}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%); color: #FFD700; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .status-box { background: white; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0; border: 3px solid ${info.color}; }
            .status-emoji { font-size: 60px; margin-bottom: 15px; }
            .status-text { font-size: 24px; font-weight: bold; color: ${info.color}; margin: 10px 0; }
            .order-summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .product-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Estado de tu Pedido Actualizado ${info.emoji}</h1>
              <p>Pedido #${venta.id_venta}</p>
            </div>
            <div class="content">
              <h2>¡Hola ${usuario.nombre_usuario}! 👋</h2>
              
              <div class="status-box">
                <div class="status-emoji">${info.emoji}</div>
                <div class="status-text">${venta.estado.toUpperCase()}</div>
                <p style="font-size: 16px; color: #666; margin-top: 15px;">${info.mensaje}</p>
              </div>
              
              ${venta.estado === "por recoger" ? `
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #FFD700; margin: 20px 0;">
                  <strong>⏰ ¡Tu pedido está listo!</strong>
                  <p>Puedes pasar a recogerlo cuando gustes. ¡Te esperamos 🐉!</p>
                </div>
              ` : ''}
              
              ${venta.estado === "entregado" ? `
                <div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0;">
                  <strong>🎉 ¡Gracias por tu preferencia!</strong>
                  <p>Esperamos que disfrutes mucho de nuestro sabor chifa. ¡Te esperamos pronto en Dragón Dorado!</p>
                </div>
              ` : ''}
              
              <div class="order-summary">
                <h3>Resumen del Pedido:</h3>
                <p><strong>Número:</strong> #${venta.id_venta}</p>
                <p><strong>Fecha:</strong> ${new Date(venta.fecha_venta).toLocaleString('es-PE')}</p>
                
                <h4 style="margin-top: 15px;">Platos:</h4>
                ${venta.detalleventa.map(item => `
                  <div class="product-item">
                    <span>${item.cantidad}x ${item.productos.nombre_producto}</span>
                    <span>S/ ${Number(item.subtotal).toFixed(2)}</span>
                  </div>
                `).join('')}
                
                <div style="font-size: 18px; font-weight: bold; color: #8B0000; margin-top: 15px; text-align: right;">
                  Total: S/ ${Number(venta.total).toFixed(2)}
                </div>
              </div>
              
              <p style="margin-top: 20px; color: #666;">
                Puedes ver todos tus pedidos en tu panel de usuario.
              </p>
            </div>
            <div class="footer">
              <p>Dragón Dorado - Auténtica comida chifa peruana</p>
              <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Notificación de cambio de estado enviada a: ${usuario.correo_usuario}`);
    } catch (error) {
      console.error("❌ Error enviando notificación de cambio de estado:", error);
      throw error;
    }
  },

  /**
   * Enviar confirmación de reclamación al usuario
   */
  enviarConfirmacionReclamacion: async (datos) => {
    const tipoTitulo = {
      reclamo: "Reclamo",
      queja: "Queja",
      sugerencia: "Sugerencia"
    };

    const mailOptions = {
      from: `"Dragón Dorado - Chifa" <${process.env.EMAIL_USER}>`,
      to: datos.correo,
      subject: `Confirmación de ${tipoTitulo[datos.tipo]} Recibido - Dragón Dorado 🥢`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%); color: #FFD700; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFD700; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🥢 ${tipoTitulo[datos.tipo]} Recibido</h1>
            </div>
            <div class="content">
              <h2>¡Hola ${datos.nombre}! 👋</h2>
              <p>Hemos recibido tu ${datos.tipo} y queremos agradecerte por tomarte el tiempo de contactarnos.</p>
              
              <div class="message-box">
                <h3>Resumen de tu ${datos.tipo}:</h3>
                <p><strong>Nombre:</strong> ${datos.nombre}</p>
                <p><strong>Correo:</strong> ${datos.correo}</p>
                ${datos.telefono ? `<p><strong>Teléfono:</strong> ${datos.telefono}</p>` : ''}
                <p><strong>Tipo:</strong> ${tipoTitulo[datos.tipo]}</p>
                <p><strong>Mensaje:</strong></p>
                <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${datos.mensaje}</p>
              </div>
              
              <div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <strong>⏰ Tiempo de respuesta:</strong>
                <p>Nuestro equipo revisará tu ${datos.tipo} en un plazo de 24-48 horas hábiles. Te contactaremos a través de este correo con una respuesta.</p>
              </div>
              
              <p>Tu opinión es muy importante para nosotros y nos ayuda a mejorar nuestro sabor y servicio continuamente.</p>
              
              <p style="margin-top: 30px;">
                <strong>¿Necesitas ayuda inmediata?</strong><br>
                Llámanos al: <a href="tel:+51951979404">(+51) 951-979-404</a><br>
                Estamos en: Jr. de la Unión 500, Lima 15001
              </p>
            </div>
            <div class="footer">
              <p>Dragón Dorado - Auténtica comida chifa peruana</p>
              <p>Este correo confirma la recepción de tu ${datos.tipo}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Confirmación de reclamación enviada a: ${datos.correo}`);
    } catch (error) {
      console.error("❌ Error enviando confirmación de reclamación:", error);
      throw error;
    }
  },

  /**
   * Enviar notificación al administrador sobre nueva reclamación
   */
  enviarNotificacionReclamacionAdmin: async (datos) => {
    const tipoTitulo = {
      reclamo: "Reclamo",
      queja: "Queja",
      sugerencia: "Sugerencia"
    };

    const mailOptions = {
      from: `"Sistema Dragón Dorado" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Enviar al correo del administrador
      subject: `🚨 Nuevo ${tipoTitulo[datos.tipo]} Recibido - Libro de Reclamaciones`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #DC143C; color: #FFD700; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .alert-box { background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFD700; }
            .data-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .label { font-weight: bold; color: #666; }
            .value { color: #333; margin-left: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚨 Nuevo ${tipoTitulo[datos.tipo]}</h1>
              <p>Libro de Reclamaciones - Dragón Dorado</p>
            </div>
            <div class="content">
              <div class="alert-box">
                <strong>⚠️ Acción Requerida</strong>
                <p>Se ha recibido un nuevo ${datos.tipo} que requiere tu atención. Por favor, revisa los detalles y responde al cliente en un plazo de 24-48 horas.</p>
              </div>
              
              <div class="data-box">
                <h3>Información del Cliente:</h3>
                <p><span class="label">Nombre:</span><span class="value">${datos.nombre}</span></p>
                <p><span class="label">Correo:</span><span class="value">${datos.correo}</span></p>
                ${datos.telefono ? `<p><span class="label">Teléfono:</span><span class="value">${datos.telefono}</span></p>` : ''}
                <p><span class="label">Tipo:</span><span class="value">${tipoTitulo[datos.tipo]}</span></p>
                <p><span class="label">Fecha:</span><span class="value">${new Date().toLocaleString('es-PE')}</span></p>
              </div>
              
              <div class="data-box">
                <h3>Mensaje:</h3>
                <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${datos.mensaje}</p>
              </div>
              
              <div style="background: #d4edda; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <strong>✅ Confirmación enviada</strong>
                <p>El cliente ha recibido un correo de confirmación automático.</p>
              </div>
              
              <p style="margin-top: 30px; text-align: center;">
                <strong>Responde directamente a:</strong><br>
                <a href="mailto:${datos.correo}">${datos.correo}</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Notificación de reclamación enviada al administrador`);
    } catch (error) {
      console.error("❌ Error enviando notificación al admin:", error);
      throw error;
    }
  },
};

module.exports = EmailService;
