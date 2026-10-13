# Implementación IA/CRM — Dragón Dorado

## Qué se corrigió

El widget ya no depende únicamente de textos fijos. Ahora envía la consulta a `POST /api/ia/message` y el backend:

- consulta productos, stock, categorías, ingredientes, alérgenos y precios desde Prisma;
- identifica preguntas sobre carta, horarios, ubicación, pagos, delivery, reservas y fidelidad;
- usa las ventas del usuario autenticado para calcular consumo y sellos de fidelidad;
- registra cada conversación, intención, confianza y resolución en el primer contacto;
- muestra botones de valoración útil/no útil y permite medir la resolución real;
- mantiene una respuesta local de respaldo si el backend está apagado.

## Punto 6: correo de bienvenida

Sí debe implementarse porque el indicador actual es una tasa de apertura de 22%. El registro ya enviaba el correo, pero faltaba saber si se abría. Esta versión agrega:

- pixel de apertura en `GET /api/email/open/:token`;
- seguimiento del clic del botón «Ver Menú» en `GET /api/email/click/:token`;
- métricas de enviados, abiertos, clics y tasa de apertura en `GET /api/email/metrics`;
- nombre del cliente escapado y CTA medible.

Para medir aperturas en producción, `PUBLIC_API_URL` debe ser una URL pública HTTPS del backend. Algunos clientes de correo bloquean imágenes; en esos casos el clic sirve como señal complementaria.

## Puntos relacionados que también quedaron cubiertos

| Problema | Implementación |
|---|---|
| 42 min de respuesta | Chatbot web conectado a la API y a la base de datos; el endpoint responde sin depender de un operador. |
| 0% de resolución en primer contacto | Registro `ia_conversaciones`, valoración del usuario y métrica de resolución. |
| 35% de reseñas negativas sin atender en 72 h | Tabla `feedback`, clasificación inicial de sentimiento/categoría y métrica de pendientes fuera de SLA. |
| 6 h semanales de contenido | Auditoría y generación de descripción corta, descripción web y tags SEO desde el panel admin. |
| 40% de platos sin descripción o SEO | Campos `descripcion_corta`, `tags_seo`, auditoría y botón «Generar» por plato. |
| 22% de apertura de bienvenida | Tracking de apertura y clic descrito arriba. |
| NPS 38 | Recepción de feedback con NPS de 0 a 10 y cálculo de promotores/detractores. |
| Reservas | Tabla y API `POST /api/reservas` con validación de anticipación y cupos. |

Además, `GET /api/ia/marketing/weekly-plan` arma un calendario de siete días con hooks, copies, hashtags y CTA usando la carta disponible del CRM. Si se habilita OpenAI, el mismo contexto puede pasar por el modelo para una redacción más creativa.

## Migración y ejecución

1. Configura `Backend/.env` usando `.env.example`.
2. Ejecuta una vez `Backend/migrations/20260923_ia_crm.sql` en MySQL.
3. Desde `Backend`, ejecuta `npm install` y `npm run build` para regenerar Prisma.
4. Inicia el backend con `npm run dev`.
5. Inicia el frontend con `npm install` y `npm run dev`.
6. Entra como administrador a `/dashboard/admin/ia` para ver las métricas y completar el SEO de la carta.

## IA generativa opcional

El flujo funciona sin proveedor externo con respuestas verificadas desde el CRM. Si el equipo tiene una clave de OpenAI, puede habilitar la capa generativa configurando:

```env
OPENAI_API_KEY=...
CHATBOT_USE_OPENAI=true
OPENAI_CHAT_MODEL=gpt-4o-mini
```

El modelo recibe únicamente el contexto recuperado por el CRM y la respuesta verificada se mantiene como respaldo. WhatsApp, Instagram, Zendesk, Pinecone y correo SMTP siguen requiriendo sus credenciales y webhooks reales; no se simulan como conexiones activas.
