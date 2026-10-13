const crypto = require("crypto");
const prisma = require("../config/db.js");

const STOP_WORDS = new Set([
  "que", "qué", "hay", "tienen", "tiene", "con", "del", "los", "las",
  "una", "uno", "para", "por", "quiero", "dame", "ver", "me", "el",
  "la", "un", "de", "y", "o", "en", "al", "es", "son", "plato", "platos",
]);

const KNOWLEDGE = {
  horarios:
    "🕐 Atendemos de lunes a viernes de 8:00 a. m. a 10:00 p. m. y sábados y domingos de 8:00 a. m. a 6:30 p. m. Los feriados pueden tener un horario especial.",
  ubicacion:
    "📍 Estamos en Jr. de la Unión 500, Lima 15001, a dos cuadras de la Plaza San Martín. Puedes ver la ubicación en Google Maps: https://maps.app.goo.gl/aL3CQdSJhXk5QfBv7",
  pagos:
    "💳 Aceptamos efectivo, VISA, Mastercard, Amex, Yape, Plin y QR de Mercado Pago. Para delivery también puedes pedir por Rappi, Uber Eats o PedidosYa.",
  delivery:
    "🛵 Tenemos delivery propio en Lima Cercado (tiempo estimado: 30–40 minutos) y también atención por Rappi, Uber Eats y PedidosYa.",
  reservas:
    "📅 Para una reserva individual solicita atención con 24 horas de anticipación; para grupos, con 72 horas. El salón privado admite de 20 a 35 personas. Confirma por WhatsApp al +51 951 979 404.",
  fidelidad:
    "🐉 Por cada compra acumulada de S/ 150 con boleta obtienes un sello. Con 5 sellos puedes canjear un Plato Especial del Dragón GRATIS. Los sellos vencen a los 180 días.",
};

function normalizar(texto = "") {
  return texto
    .toLocaleLowerCase("es-PE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokensRelevantes(texto) {
  return normalizar(texto)
    .split(" ")
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function detectarIntencion(texto = "") {
  const t = normalizar(texto);
  if (/horari|feriad|abiert|cerrad|hora/.test(t)) return "horarios";
  if (/ubicaci|direccion|llegar|mapa|estacionamiento|parking/.test(t)) return "ubicacion";
  if (/donde.*(pedido|orden)|estado.*(pedido|orden|delivery|envio)|seguimiento|rastre|pedido.*llega|cuando.*llega|cuant.*(llega|falta)|en camino/.test(t)) return "seguimiento_pedido";
  if (/delivery|envio|repart|rappi|uber eats|pedidosya|mandar/.test(t)) return "delivery";
  if (/pago|tarjeta|yape|plin|efectivo|mercado pago/.test(t)) return "pagos";
  if (/fidel|puntos|sello|gratis|canje|beneficio|acumul/.test(t)) return "fidelidad";
  if (/reserv|evento|cumple|mesa|grupo|salon|privad/.test(t)) return "reservas";
  if (/carta|menu|men[uú]|plato|comida|ingrediente|alerg|pollo|chancho|camaron|marisco|veg/.test(t)) {
    return "menu";
  }
  return "desconocida";
}

function formatoPrecio(valor) {
  const numero = Number(valor);
  return Number.isFinite(numero) ? `S/ ${numero.toFixed(2)}` : "precio por confirmar";
}

function limpiarDescripcion(texto, nombre) {
  const descripcion = String(texto || "").trim();
  return descripcion || `${nombre} preparado al wok con la sazón de Dragón Dorado.`;
}

async function obtenerProductosDisponibles(mensaje) {
  try {
    const productos = await prisma.productos.findMany({
      where: { stock: { gt: 0 } },
      include: {
        categoria: true,
        ingredienteproducto: true,
        alergenoproducto: true,
      },
      orderBy: { nombre_producto: "asc" },
      take: 100,
    });

    const tokens = tokensRelevantes(mensaje);
    if (!tokens.length) return productos.slice(0, 8);

    const coincidencias = productos.filter((producto) => {
  const textoProducto = normalizar([
    producto.nombre_producto,
    producto.descripcion,
    producto.descripcion_corta,
    producto.categoria?.nombre_categoria,
    ...(producto.ingredienteproducto || []).map((i) => i.nombre),
  ]
    .filter(Boolean)
    .join(" "));

  return tokens.some((token) => textoProducto.includes(token));
});

return coincidencias.length > 0
  ? coincidencias.slice(0, 8)
  : productos.slice(0, 8);

    // Si la pregunta contiene una categoría o ingrediente que no existe, no
    // mostramos platos aleatorios: eso evita respuestas inventadas.
    return coincidencias.slice(0, 8);
  } catch (error) {
    // El asistente sigue respondiendo las preguntas generales aunque la BD no
    // esté disponible durante una demostración o mantenimiento.
    console.error("[IA] No se pudo consultar productos:", error.message);
    return [];
  }
}

async function obtenerFidelidad(idUsuario) {
  if (!idUsuario) return null;

  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { id_usuario: Number(idUsuario) },
      select: { id_usuario: true, nombre_usuario: true, contador_bubbleTea: true, score: true },
    });
    if (!usuario) return null;

    const acumulado = await prisma.ventas.aggregate({
      where: {
        id_usuario: usuario.id_usuario,
        estado: { not: "cancelado" },
      },
      _sum: { total: true },
    });

    const consumo = Number(acumulado._sum.total || 0);
    const sellosTotales = Math.floor(consumo / 150);
    const sellosCiclo = sellosTotales % 5;
    return {
      nombre: usuario.nombre_usuario,
      consumo,
      sellosTotales,
      sellosCiclo,
      faltan: 5 - sellosCiclo,
      score: Number(usuario.score || 0),
      legacyCounter: Number(usuario.contador_bubbleTea || 0),
    };
  } catch (error) {
    console.error("[IA] No se pudo consultar fidelización:", error.message);
    return null;
  }
}

function respuestaMenu(productos) {
  if (!productos.length) {
    return "🥡 No encontré platos disponibles que coincidan con esa búsqueda. Prueba con otra categoría o escribe «ver la carta» para mostrarte las opciones disponibles.";
  }

  const detalle = productos.map((producto) => {
    const ingredientes = (producto.ingredienteproducto || []).map((i) => i.nombre).join(", ");
    const alergenos = (producto.alergenoproducto || []).map((a) => a.nombre).join(", ");
    const extras = [ingredientes && `Ingredientes: ${ingredientes}`, alergenos && `Alérgenos: ${alergenos}`]
      .filter(Boolean)
      .join(" · ");
    return `• **${producto.nombre_producto}** — ${formatoPrecio(producto.precio)}\n  ${limpiarDescripcion(producto.descripcion, producto.nombre_producto)}${extras ? `\n  ${extras}` : ""}`;
  }).join("\n\n");

  return `📋 Encontré estos platos en la carta actual:\n\n${detalle}\n\n¿Quieres que te recomiende uno según tu presupuesto o preferencia?`;
}

function respuestaFidelidad(perfil) {
  if (!perfil) {
    return `${KNOWLEDGE.fidelidad}\n\n🔐 Inicia sesión para consultar tu avance personal y tus sellos acumulados.`;
  }
  return `🐉 ¡Hola, ${perfil.nombre}!\n\nHas acumulado **${perfil.sellosTotales} sellos** con un consumo registrado de **${formatoPrecio(perfil.consumo)}**. En tu ciclo actual tienes **${perfil.sellosCiclo}/5 sellos** y te faltan **${perfil.faltan}** para canjear un Plato Especial del Dragón GRATIS.\n\n${KNOWLEDGE.fidelidad}`;
}

function etiquetaEstadoPedido(estado) {
  const etiquetas = {
    "por confirmar": "Por confirmar",
    "en preparacion": "En preparación",
    "por recoger": "Listo para recoger",
    "en camino": "En camino",
    entregado: "Entregado",
    cancelado: "Cancelado",
  };
  return etiquetas[estado] || estado || "Sin estado registrado";
}

function extraerIdPedido(mensaje = "") {
  const coincidencia = String(mensaje).match(/(?:pedido|orden|venta)\s*#?\s*(\d+)/i);
  return coincidencia ? Number(coincidencia[1]) : null;
}

function respuestaSeguimientoPedido(venta) {
  if (!venta) {
    return "📦 No encontré un pedido activo asociado a tu cuenta. Inicia sesión y escribe, por ejemplo: «¿Dónde está mi pedido?» o «estado del pedido #123».";
  }

  const metodo = venta.metodo_entrega === "delivery"
    ? "Delivery a domicilio"
    : venta.metodo_entrega === "pickup"
      ? "Recojo en tienda"
      : "Consumo en local";
  const lineas = [
    `📦 **Pedido #${venta.id_venta}**`,
    `Estado: **${etiquetaEstadoPedido(venta.estado)}**`,
    `Modalidad: **${metodo}**`,
  ];

  if (venta.metodo_entrega === "delivery") {
    if (venta.direccion_entrega) lineas.push(`Dirección: ${venta.direccion_entrega}`);
    if (venta.referencia_entrega) lineas.push(`Referencia: ${venta.referencia_entrega}`);
    if (venta.repartidor) lineas.push(`Repartidor: ${venta.repartidor}`);
    if (venta.tiempo_estimado_min != null && venta.estado !== "entregado") {
      lineas.push(`Tiempo estimado registrado: **${venta.tiempo_estimado_min} minutos**`);
    }
    if (venta.estado === "en camino" && venta.tiempo_estimado_min == null) {
      lineas.push("El pedido ya salió a reparto; todavía no se registró un tiempo estimado.");
    }
  }

  if (venta.estado === "entregado" && venta.entregado_en) {
    lineas.push(`Entregado: ${new Date(venta.entregado_en).toLocaleString("es-PE")}`);
  }
  lineas.push("Si necesitas cambiar la dirección o reportar un retraso, escríbenos al WhatsApp +51 951 979 404.");
  return lineas.join("\n");
}

async function obtenerSeguimientoPedido(idUsuario, mensaje) {
  if (!idUsuario) return null;
  try {
    const idPedido = extraerIdPedido(mensaje);
    const where = { id_usuario: Number(idUsuario) };
    if (idPedido) {
      where.id_venta = idPedido;
    } else {
      where.estado = { notIn: ["entregado", "cancelado"] };
    }
    return await prisma.ventas.findFirst({
      where,
      orderBy: { fecha_venta: "desc" },
    });
  } catch (error) {
    console.error("[IA] No se pudo consultar el seguimiento del pedido:", error.message);
    return null;
  }
}

function respuestaDesconocida() {
  return "🐉 Puedo ayudarte con la carta actual, ingredientes y alérgenos, horarios, ubicación, delivery, pagos, reservas y fidelización. Si tu consulta necesita revisión humana, escríbenos por WhatsApp al +51 951 979 404.";
}

async function respuestaOpenAI({ mensaje, intencion, respuestaBase, datos }) {
  if (process.env.CHATBOT_USE_OPENAI !== "true" || !process.env.OPENAI_API_KEY) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);
  try {
    const contexto = JSON.stringify({ intencion, respuestaBase, datos }).slice(0, 12000);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 350,
        messages: [
          {
            role: "system",
            content: "Eres el Asistente del Dragón de un restaurante chifa. Responde en español peruano, con tono cercano. Solo puedes usar el contexto entregado; si falta información, deriva a un humano. No inventes precios, stock, horarios ni reservas.",
          },
          { role: "user", content: `Pregunta: ${mensaje}\nContexto verificado del CRM:\n${contexto}` },
        ],
      }),
    });
    if (!response.ok) return null;
    const body = await response.json();
    return body.choices?.[0]?.message?.content?.trim() || null;
  } catch (error) {
    console.error("[IA] OpenAI no disponible; se usa respuesta verificada:", error.message);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function registrarConversacion(datos) {
  try {
    const registro = await prisma.ia_conversaciones.create({ data: datos });
    return registro.id_conversacion;
  } catch (error) {
    // Permite usar el widget antes de ejecutar la migración en un entorno local.
    console.error("[IA] No se pudo guardar la conversación:", error.message);
    return null;
  }
}

async function responder({ mensaje, idUsuario = null, canal = "web" }) {
  const intencion = detectarIntencion(mensaje);
  let respuesta;
  let datos = null;
  let confianza = intencion === "desconocida" ? 0.35 : 0.92;
  let resuelta = intencion !== "desconocida";

  if (intencion === "menu") {
    const productos = await obtenerProductosDisponibles(mensaje);
    datos = { productos: productos.map((p) => ({
      id_producto: p.id_producto,
      nombre_producto: p.nombre_producto,
      precio: Number(p.precio),
      stock: p.stock,
      categoria: p.categoria?.nombre_categoria || null,
    })) };
    respuesta = respuestaMenu(productos);
    if (!productos.length) {
      confianza = 0.55;
      resuelta = false;
    }
  } else if (intencion === "fidelidad") {
    const perfil = await obtenerFidelidad(idUsuario);
    respuesta = respuestaFidelidad(perfil);
    datos = perfil;
  } else if (intencion === "seguimiento_pedido") {
    const venta = await obtenerSeguimientoPedido(idUsuario, mensaje);
    if (!idUsuario) {
      respuesta = "🔐 Para consultar el estado de tu pedido debes iniciar sesión. Después escribe «¿Dónde está mi pedido?» y te mostraré el avance real.";
      confianza = 0.95;
      resuelta = true;
    } else if (!venta) {
      respuesta = respuestaSeguimientoPedido(null);
      confianza = 0.75;
      resuelta = false;
    } else {
      respuesta = respuestaSeguimientoPedido(venta);
      datos = {
        id_venta: venta.id_venta,
        estado: venta.estado,
        metodo_entrega: venta.metodo_entrega,
        direccion_entrega: venta.direccion_entrega,
        referencia_entrega: venta.referencia_entrega,
        repartidor: venta.repartidor,
        tiempo_estimado_min: venta.tiempo_estimado_min,
        entregado_en: venta.entregado_en,
      };
    }
  } else if (intencion === "horarios") {
    respuesta = KNOWLEDGE.horarios;
  } else if (intencion === "ubicacion") {
    respuesta = KNOWLEDGE.ubicacion;
  } else if (intencion === "delivery") {
    respuesta = KNOWLEDGE.delivery;
  } else if (intencion === "pagos") {
    respuesta = KNOWLEDGE.pagos;
  } else if (intencion === "reservas") {
    respuesta = KNOWLEDGE.reservas;
  } else {
    respuesta = respuestaDesconocida();
    resuelta = false;
  }

  const respuestaGenerativa = await respuestaOpenAI({ mensaje, intencion, respuestaBase: respuesta, datos });
  if (respuestaGenerativa) {
    respuesta = respuestaGenerativa;
    confianza = Math.max(confianza, 0.9);
  }

  const idConversacion = await registrarConversacion({
    id_usuario: idUsuario ? Number(idUsuario) : null,
    mensaje_usuario: mensaje,
    respuesta_ia: respuesta,
    intencion,
    confianza,
    resuelta,
    canal,
  });

  return {
    id: idConversacion,
    respuesta,
    intencion,
    confianza,
    resuelta,
    fuente: ["menu", "seguimiento_pedido"].includes(intencion) ? "base_de_datos" : "base_conocimiento",
    datos,
  };
}

async function generarPlanMarketing() {
  let platos = [];
  try {
    platos = await prisma.productos.findMany({
      where: { stock: { gt: 0 } },
      select: { nombre_producto: true, descripcion: true, precio: true },
      orderBy: { nombre_producto: "asc" },
      take: 20,
    });
  } catch (error) {
    console.error("[IA] No se pudo cargar la carta para marketing:", error.message);
  }

  const destacados = platos.slice(0, 5).map((plato) => plato.nombre_producto);
  const carta = destacados.length ? destacados : ["especialidades del wok"];
  const dias = [
    ["Lunes", "Carrusel", `Lunes de wok: descubre ${carta[0]}.`, "12:30"],
    ["Martes", "Story", "Encuesta: ¿qué sazón del Dragón te provoca hoy?", "20:30"],
    ["Miércoles", "Reel", `Behind the wok preparando ${carta[1] || carta[0]}.`, "12:30"],
    ["Jueves", "Post", "Fidelidad Chifa: acumula sellos y gana un Plato Especial GRATIS.", "20:30"],
    ["Viernes", "Reel", `Plan de viernes: ${carta[2] || carta[0]} al fuego del wok.`, "12:30"],
    ["Sábado", "Story", "Cliente feliz + llamada a reservar mesa o evento.", "20:30"],
    ["Domingo", "Carrusel", `Domingo familiar: comparte ${carta[3] || carta[0]}.`, "12:30"],
  ];

  return dias.map(([dia, formato, hook, hora], index) => ({
    dia,
    hora,
    formato,
    hook,
    copy: `${hook} 🐉🔥 Visítanos en Jr. de la Unión 500, Lima.`,
    hashtags: ["#DragonDorado", "#ChifaLima", "#SazonAlWok", "#ComidaPeruana"],
    cta: index === 5 ? "Reserva por WhatsApp" : "Ver carta y pedir",
  }));
}

function generarContenidoSEO(producto) {
  const nombre = String(producto.nombre_producto || "Plato del Dragón").trim();
  const categoria = String(producto.categoria || "comida chifa").trim();
  const ingredientes = Array.isArray(producto.ingredientes)
    ? producto.ingredientes.filter(Boolean).join(", ")
    : String(producto.ingredientes || "sazón casera, verduras y salsa de la casa");
  const base = `${nombre} preparado al wok con ${ingredientes}. Disfruta la sazón sino-peruana de Dragón Dorado en Lima.`;
  const descripcionCorta = `${nombre}: sazón dorada al wok, ${categoria.toLocaleLowerCase("es-PE")} y sabor casero.`.slice(0, 160);
  const tags = Array.from(new Set([
    nombre,
    categoria,
    "comida chifa Lima",
    "restaurante chifa",
    "sazón al wok",
    "Dragón Dorado",
    ...normalizar(ingredientes).split(" ").filter((t) => t.length > 3),
  ])).slice(0, 12);
  return {
    descripcion_corta: descripcionCorta,
    descripcion: base.slice(0, 500),
    tags_seo: tags.join(", "),
  };
}

function crearToken() {
  return crypto.randomBytes(24).toString("hex");
}

module.exports = {
  KNOWLEDGE,
  detectarIntencion,
  responder,
  generarContenidoSEO,
  generarPlanMarketing,
  registrarConversacion,
  obtenerFidelidad,
  crearToken,
  extraerIdPedido,
  respuestaSeguimientoPedido,
  respuestaSeguimientoPedido,
  obtenerSeguimientoPedido,
};

"ver",
"carta",
"menu",
"mostrar",
"muestrame",
"muéstrame",
"recomiendame",
"recomiéndame",
"recomienda",
"sugiere",
"sugerencia",
"quiero",
"opciones",
"disponibles"
