# DOCUMENTO TÉCNICO — Inteligencia Artificial y Prompt Engineering
## Restaurante Dragón Dorado (Lima, Perú)

**Versión:** 1.0 (21/09/2026)
**Tema académico:** Inteligencia Artificial y Prompt Engineering
**Modelo LLM target:** OpenAI GPT-4o / GPT-4o-mini
**Dueño funcional:** Equipo Dragón Dorado — Área de Innovación Digital

---

## INDICE
1. **Introducción y Objetivos**
2. **4 Casos de Uso de IA Priorizados**
   2.1 🤖 Caso 1 — Chatbot Atención al Cliente ("Asistente del Dragón")
   2.2 📝 Caso 2 — Generador de Descripciones de Platos
   2.3 📱 Caso 3 — Asistente de Marketing y Redes Sociales
   2.4 📊 Caso 4 — Analizador de Feedback y Generador de Reportes
3. **Diseño de Prompts (Prompt Engineering Framework)**
4. **Propuesta de Arquitectura Chatbot / Asistente Inteligente**
5. **4 Automatizaciones Mediante IA Generativa**
6. **Stack Técnico Sugerido**
7. **Métricas de Éxito y KPIs**
8. **Próximos Pasos y Roadmap MVP**

---

## 1. INTRODUCCIÓN Y OBJETIVOS

El proyecto de Inteligencia Artificial se integra al CRM del restaurante **CHIFA DRAGÓN DORADO** con 3 objetivos académicos y 2 empresariales:

### 🎯 Objetivos Académicos
1. **Diseñar un framework de Prompt Engineering** para dominio gastronómico chifa peruano.
2. **Implementar un mockup funcional** de chatbot integrado al CRM React existente.
3. **Construir un banco de prompts versionado** (≥ 20 prompts) reutilizable por el área de marketing, operaciones y atención al cliente.

### 💼 Objetivos Empresariales
1. **Reducir 40% el tiempo promedio de atención** (WhatsApp, Instagram, Messenger, Chat web) con respuestas IA de primera línea.
2. **Automatizar 80% del contenido semanal de redes sociales** @DragonDorado y creación de descripciones de carta.

---

## 2. 4 CASOS DE USO DE IA PRIORIZADOS

---

### 2.1 🤖 CASO 1 — Chatbot Atención al Cliente ("Asistente del Dragón")
**Tipo:** Conversacional · RAG (Retrieval Augmented Generation)
**Canales:** Web Widget (CRM), WhatsApp Business, Instagram DM, Messenger
**Modelo recomendado:** GPT-4o-mini (bajo costo) para atención general / GPT-4o para casos complejos

#### 2.1.1 Alcance funcional
- ✅ Horario del Dragón, días feriados, fechas de cierre
- ✅ Dirección, accesos, estacionamiento, Google Maps (Jr. de la Unión 500, Lima 15001)
- ✅ Carta digital: categorías, ingredientes principales, niveles de picante, alergenos (mariscos, soya, gluten, lacteos, frutos secos)
- ✅ Métodos de pago: Yape, Plin, tarjeta, efectivo, Mercado Pago
- ✅ Delivery: zonas cubiertas en Lima, tiempos estimados, delivery partners (Rappi/Uber Eats/PedidosYa)
- ✅ **Programa Fidelidad Chifa**: cómo acumular puntos (≥ S/150 = Plato Especial GRATIS), canje, beneficios top 5 juego
- ✅ Reservas para grupos / eventos privados: cupos, disponibilidad, prepago requerido
- ✅ Libro de reclamaciones (SERVICIO NACIONAL DE PROTECCIÓN AL CONSUMIDOR)
- ❌ Transacciones reales de pago → derivar a agente humano

#### 2.1.2 Matriz Derivación Humano vs IA
| Nivel Confianza IA | Acción |
|---|---|
| ≥ 90% | Responde IA automáticamente |
| 70% — 89% | Acompaña respuesta botón "¿Te sirvió? 👍 / 👎 Derivar al Dragón Humano" |
| < 70% | Deriva DIRECTAMENTE a agente humano + crea ticket Zendesk |

---

### 2.2 📝 CASO 2 — Generador de Descripciones de Platos (Prompt Engineering Productivo)
**Tipo:** Generativo · Few-Shot Learning · Chain-of-Thought
**Usuarios objetivo:** Jefe de Cocina, Jefe de Marketing
**Modelo target:** GPT-4o (creatividad y alineación marca)

#### 2.2.2 Entradas / Salidas
**Entradas:**
- Nombre del plato (ej: "Arroz Chaufa con Camarones Titán")
- Ingredientes base (lista simple)
- Categoría: 6 categorías chifa default del CRM
- Nivel picante: 🌶️ 1-5
- Precio sugerido (S/)
- Alergenos

**Salidas (1 Plato → 4 outputs):**
1. **Descripción corta menú físico** (max 120 caracteres)
2. **Descripción larga CRM Web** (max 250 caracteres · copy venta)
3. **4 variantes de copy para Instagram / TikTok** (hashtags incluidos)
4. **Etiquetas SEO** para buscador interno del catálogo

---

### 2.3 📱 CASO 3 — Asistente de Marketing y Redes Sociales
**Tipo:** Generativo · Planificación de Contenido
**Canales:** Instagram, Facebook, TikTok
**Modelo target:** GPT-4o

#### 2.3.1 Plan Semanal Automático (7 días)
| Día | Tema Contenido | Formato |
|---|---|---|
| Lunes | 🔥 Plato Especial Lunes | Carrousel 3 slides |
| Miércoles | 🐉 Historia Nosotros | Reel vertical 15s (guion copy + voz off) |
| Viernes | 💳 Promoción Fidelidad | Post único copy |
| Sábado | 🎥 Cliente feliz UGC | Guion story + sticker encuesta |
| Domingo | 🧑🍳 Detrás del wok (behind scenes) | Reel voz off |
| 2 posts extra rotativos | Eventos / Collaboraciones / TBT | A definir |

**Incluye:** Paleta de marca obligatoria (#8B0000, #DC143C, #FFD700, #1a1a1a), tono "Dragón Carismático" (no tan formal, cercano, familiar limeño).

---

### 2.4 📊 CASO 4 — Analizador de Feedback y Generador de Reportes
**Tipo:** Analítico · Clasificación · Zero-Shot
**Fuentes de Datos:** Reseñas Google Maps, Facebook, Instagram Comments, Libro Reclamaciones Interno, Tickets WhatsApp, Formulario Contacto CRM
**Modelo target:** GPT-4o-mini (alto volumen, bajo costo)

#### 2.4.1 Taxonomía de Clasificación IA
- 👍 **Sentimiento:** Positivo / Neutro / Negativo
- 🎯 **Categoría:** Alimentos, Atención, Limpieza, Precio, Delivery, App CRM, Fidelidad, Otros
- ⚠️ **Nivel Criticidad:** Bajo / Medio / Alto / Crítico (Derivación inmediata)
- 🏷️ **Etiquetas personalizadas:** "muy salado", "cantidad insuficiente", "mesero grosero", "wok perfecto", "lomo tierno", etc.

#### 2.4.2 Output del Analizador
- **Reporte semanal PDF** (email gerente): Top 5 elogios, Top 5 problemas, comparativa semana anterior, sugerencias IA de mejora (3 acciones accionables)
- **Dashboard Tableau/PowerBI** conexión ODBC → nube

---

## 3. DISEÑO DE PROMPTS (FRAMEWORK DRAGÓN DORADO ©)

### 3.1 Estructura Estándar Obligatoria (7 Partes)
Todo prompt del banco sigue esta estructura para reproducibilidad:

```
[1] ROLE / ROL ............... (System Prompt: "Eres X experto en Y")
[2] CONTEXTO ................ (Variables, datos negocio, fecha)
[3] TAREA / GOAL ............ (Objetivo específico medible)
[4] CONSTRAINTS / RULES ..... (Reglas obligatorias que NO puede romper)
[5] FEW-SHOT EXAMPLES ....... (2-5 ejemplos Input → Output real)
[6] OUTPUT FORMAT ........... (Estructura de salida: JSON / Markdown / Lista)
[7] TONE OF VOICE / BRAND ... (Paleta, tono, emojis permitidos, voz marca Dragon)
```

### 3.2 Paleta Lingüística Marca "Dragón Carismático"
| Elemento | Regla |
|---|---|
| Saludo inicial | **"¡🐉 Aló! Soy el Asistente del Dragón, ¿qué sazón te preparo hoy?"** |
| Emojis permitidos | 🐉🔥🥡🥢🧋🥟🍜🫶📍📞🕐 |
| Emojis PROHIBIDOS | ❌☕🧁🍰🥐 (cafetería, marca anterior Mi Dulce Tesoro) |
| Referencias geográficas | Siempre "Jr. de la Unión 500, Lima 15001" (nunca Tumbes) |
| Fidelidad | Siempre "Plato Especial GRATIS" (nunca "bubble tea gratis") |

---

## 4. PROPUESTA DE ARQUITECTURA CHATBOT

### 4.1 Diagrama de Alto Nivel
```
    [USUARIO FINAL]
         │
         ▼
┌──────────────────────────────┐
│  🎨 CANALES DE ENTRADA       │  Web Widget · WhatsApp · IG · FB
└──────────────────────────────┘
         │
         ▼
┌──────────────────────────────┐
│  🧠 ORQUESTADOR IA (LangChain)
│  • Nivel Confianza Clasificador
│  • Router Casos Uso
│  • Matriz Derivación Humano
└──────────────────────────────┘
         │           │                    │
         ▼           ▼                    ▼
   [ GPT-4o ]  [ Base Conocimiento ]   [ ZENDESK ]
   [RAG + Prompts KNN Embeddings]      [Agente Humano]
    (Vector DB Pinecone)               [ Tickets · Asignación SLA ]
         │
         ▼
┌──────────────────────────────┐
│ 💾 CRM Dragón Dorado (SQL)   ←── Datos productos, clientes, fidelidad
└──────────────────────────────┘
```

### 4.2 Base de Conocimiento (RAG Knowledge Base)
Fuentes semanales para embedding:
1. 📄 Carta digital actualizada (6 categorías)
2. 📄 Políticas de atención, cambios, devoluciones
3. 📄 Términos programa Fidelidad Chifa
4. 📄 FAQs cliente (50 preguntas frecuentes)
5. 📄 Horarios + feriados + eventos privados
6. 📄 Mapa de cobertura Delivery Lima por distritos

**Modelo Embeddings:** text-embedding-3-small (OpenAI)
**Almacenamiento:** Pinecone / pgvector en MySQL Supabase

### 4.3 Mockup UI Widget (MVP Actual)
El mockup entregado en `/components/ia-chatbot-widget.tsx` simula:
- Botón flotante 🐉 color dorado (#FFD700) esquina inferior derecha
- Panel chat con header branding Dragón Dorado
- **12 sugerencias de consulta quick reply** precargadas
- Respuestas IA simuladas hardcodeadas alineadas a marca
- Botón "Hablar con un Dragón Humano 🧑💬" derivación

---

## 5. 4 AUTOMATIZACIONES MEDIANTE IA GENERATIVA

### ⚙️ AUT-001: Actualización Descripciones Nuevos Platos
**Trigger:** Cada vez que jefe de cocina inserta un nuevo producto en tabla `productos` CRM (Trigger Prisma / PostgreSQL)
**Pipeline:**
1. Recibe datos plato (nombre, ingredientes, categoría, precio, alergenos)
2. Ejecuta Prompt ID PROD-001
3. Genera 4 outputs (corta, larga, 4 RRSS, SEO)
4. Actualiza automáticamente columnas `descripcion`, `tags_seo` en tabla productos
5. Envía Slack notificación al equipo Marketing: "¡🐉 Nuevo plato listo para publicar!"
**Ahorro:** 30 min / plato × 8 platos nuevos / mes = 4h semanales

---

### ⚙️ AUT-002: Plan de Contenido RRSS Semanal (Lunes 06:00 AM)
**Scheduler:** Cron job Backend Node.js todos los lunes 6:00 AM
**Pipeline:**
1. Obtiene datos semana actual: feriados, eventos, promoción temporal, plato especial
2. Ejecuta Prompt ID MARK-001
3. Genera plan 7 días (5 publicaciones + 2 extra)
4. Crea 28 piezas de copy (4 variantes / publicación)
5. Sube plan a Google Sheets / Notion
6. Sugiere horarios óptimos posteo (12:30pm almuerzo / 8:30pm cena)
**Ahorro:** 6h / semana equipo marketing → 80% tiempo liberado

---

### ⚙️ AUT-003: Resumen Diario Atención al Cliente + Alertas
**Trigger:** Todos los días 22:30 (fin horario chifa)
**Pipeline:**
1. Extrae todas las conversaciones chatbot del día
2. Clasifica con CASE-003 (sentimiento / categoría / criticidad)
3. Calcula métricas: N conversaciones, % resolución IA, Top 5 preguntas, tiempos respuesta
4. Identifica casos Nivel de Criticidad = ALTO/CRÍTICO (genera ALERTA WhatsApp inmediata a Gerente)
5. Compone correo resumen diario y envía a contacto@dragondorado.com
6. Persiste reporte JSON en storage /reportes/

---

### ⚙️ AUT-004: Respuestas Personalizadas Bienvenida + Cumpleaños Cliente
**Trigger:** 
- Evento Registro usuario en CRM
- Cada 06:00 AM verifica lista de cumpleaños clientes
**Pipeline:**
1. Obtiene datos: nombre, distrito, categoría favorita compra histórica
2. Ejecuta Prompt ID CUST-001 (bienvenida) o CUST-002 (cumpleaños)
3. Personaliza copia del programa Fidelidad
4. Conecta a Nodemailer / WhatsApp Twilio → envía comunicación 1:1
5. Crea tarea seguimiento día 7 en CRM (nurture)

---

## 6. STACK TÉCNICO SUGERIDO MVP
| Capa | Herramientas | Licencia |
|---|---|---|
| LLM Core | OpenAI GPT-4o · GPT-4o-mini · text-embedding-3-small | Pay-as-you-go |
| Orquestación | LangChain JS / LangGraph v0.2 | MIT |
| Base Vectorial | Pinecone Serverless (starter) o pgvector MySQL | Freemium |
| UI Chat Web | shadcn/ui + React 19 (widget entregado) | MIT |
| Canales OMNI | WhatsApp Business Cloud API · Instagram Graph API | Meta BSP |
| Derivación Humano | Zendesk o FreshDesk | Trial 14 días |
| Automatizaciones | Node.js 22 + node-cron + Backend Express existente | Mismo CRM |
| Observabilidad IA | LangSmith (debug prompts) | Free tier |
| Seguridad datos | PII masking, rate limit 100 req/usuario/día | Helmet.js |

---

## 7. MÉTRICAS DE ÉXITO Y KPIs SEMESTRALES

| Indicador | Actual (Pre-IA) | Target Q4 2026 |
|---|---|---|
| Tiempo Medio Respuesta Cliente | 42 min | 🎯 < 2 min (80% IA) |
| % Resoluciones 1° Contacto IA | 0% | 🎯 ≥ 60% |
| % Reseñas Negativas sin atender 72h | 35% | 🎯 ≤ 5% |
| Horas Marketing contenido semanal | 6h | 🎯 ≤ 1h |
| Descripciones platos faltantes SEO | 40% | 🎯 0% |
| Tasa Apertura Bienvenida clientes | 22% | 🎯 ≥ 40% (personalizado IA) |
| NPS Promedio Mensual | 38 | 🎯 ≥ 55 (+17 pts) |

---

## 8. PRÓXIMOS PASOS Y ROADMAP MVP
| Fase | Fecha | Entregable |
|---|---|---|
| 🥉 FASE 1 (MVP Presentación académica) | SEMANA 7 | ✅ **Documento Técnico** + ✅ **Banco Prompts ≥ 20** + ✅ **Mockup Widget React CRM activo** |
| 🥈 FASE 2 (MVP Test Cerrado) | SEMANA 8-9 | Integración Pinecone Embeddings + Base Conocimiento (200 docs) · Pruebas con 10 usuarios Beta · 50 conversaciones etiquetadas |
| 🥇 FASE 3 (Piloto en vivo) | SEMANA 10 | Canal Web Widget 100% real GPT-4o-mini + Aut-004 Bienvenida Correo · Métricas 15 días de data |
| 🏆 FASE 4 (Escalado OMNI) | SEMANA 11-12 | WhatsApp Business Cloud API + Analizador Feedback Aut-003 · Reporte final de métricas |

---

## ANEXOS
- **Anexo 01:** Evidencia Mockup React — Componente `Frontend/src/components/ia-chatbot-widget.tsx` integrado en `layout.tsx`
- **Anexo 02:** Banco Completo Prompts — `/entregables-ia/02_Banco_de_Prompts_Dragon_Dorado.md` (24 prompts versionados)
- **Anexo 03:** Repositorio Prompt Engineering Git — Branch `feature/ia-prompt-engineering` (tags de versionado semántico v1.0.0)

---
**© Restaurante Dragón Dorado — Lima 2026 · Documento Técnico v1.0 · Prompt Engineering Académico**
