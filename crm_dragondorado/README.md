# CRM Mi Dulce Tesoro 🍰

Sistema de gestión de clientes y ventas para pastelería con integración de Mercado Pago.

## 📋 Características

- ✅ Gestión de usuarios y autenticación con JWT
- ✅ Catálogo de productos con categorías
- ✅ Carrito de compras
- ✅ Sistema de tickets de descuento
- ✅ **Integración con Mercado Pago** (Yape, Plin, tarjetas)
- ✅ Historial de pedidos
- ✅ Panel de administración
- ✅ Notificaciones por email
- ✅ Reseteo semanal de puntajes
- ✅ Asistente IA conectado al catálogo y a la fidelización
- ✅ Panel de IA con resolución, NPS, feedback, apertura de bienvenida y auditoría SEO

---

## 🚀 Deployment en Producción

**La aplicación está lista para producción en AWS.**

📖 **Guías completas:**
- [🌐 DEPLOYMENT_AWS.md](./DEPLOYMENT_AWS.md) - Guía paso a paso para AWS
- [✅ PRODUCTION_READY.md](./PRODUCTION_READY.md) - Checklist y documentación

---

## ⚙️ Instalación y Ejecución (Desarrollo Local)

### 🖥️ Frontend
1. Abre una terminal y dirígete a la carpeta del frontend:
   ```bash
   cd crm_midulcetesoro/Frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Luego abre el navegador en [http://localhost:5173](http://localhost:5173)

---

### 🧩 Backend
1. Abre otra terminal y dirígete a la carpeta del backend:
   ```bash
   cd crm_midulcetesoro/Backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. **Configura las variables de entorno:**
   ```bash
   # Copia el archivo de ejemplo
   cp .env.example .env
   
   # Edita .env con tus credenciales
   nano .env
   ```
   Ver `.env.example` para las variables requeridas.

4. Ejecuta las migraciones de base de datos:
   ```bash
   npm run build
   npx prisma migrate dev
   ```

5. Inicia el servidor:
   ```bash
   npm run dev
   ```
6. El backend se ejecutará por defecto en [http://localhost:3000](http://localhost:3000)

---

## 🌐 Desarrollo con Ngrok (Opcional)

Si necesitas exponer tu frontend a internet (para probar desde móvil o compartir):

📖 **[Guía de Ngrok](./NGROK_SIMPLE.md)** - Configuración simple en 5 minutos

---

## 📚 Documentación Adicional

- [🤖 Implementación IA/CRM](./IMPLEMENTACION_IA_CRM.md) - conexiones, migración y endpoints nuevos
- [📦 Parte 6: pedidos y delivery](./PEDIDOS_DELIVERY_PARTE6.md) - checkout, reparto y seguimiento en el chatbot

- [💳 Integración Mercado Pago](./MERCADOPAGO_INTEGRATION.md)
- [📧 Configuración de Email](./EMAIL_CONFIGURATION.md)
- [🍪 Autenticación con Cookies](./COOKIES_AUTH_DOCUMENTATION.md)
- [🔄 Sistema de Reseteo Semanal](./RESETEO_SEMANAL_DOCUMENTATION.md)

---

## 🛠️ Stack Tecnológico

### Frontend
- React + TypeScript
- Vite
- TailwindCSS
- Radix UI
- React Router

### Backend
- Node.js + Express
- Prisma ORM
- MySQL (AWS RDS)
- JWT Authentication
- Nodemailer
- Mercado Pago SDK v2

---

## 👥 Roles de Usuario

- **Cliente**: Comprar productos, ver historial, usar tickets
- **Cocinero**: Ver pedidos activos
- **Administrador**: Gestión completa del sistema

---

## 🔐 Seguridad

- Autenticación con JWT
- Cookies HttpOnly y Secure
- CORS configurado
- Validación de datos
- Sanitización de inputs

---

## 📞 Soporte

Para deployment en producción, consulta [DEPLOYMENT_AWS.md](./DEPLOYMENT_AWS.md)
