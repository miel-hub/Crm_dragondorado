const prisma = require("../config/db.js");

const REGLAS = [
  { categoria: "delivery", palabras: ["delivery", "reparto", "demora", "llego", "envio"] },
  { categoria: "alimentos", palabras: ["comida", "plato", "sabor", "salado", "frio", "carne", "pollo", "arroz"] },
  { categoria: "atencion", palabras: ["mesero", "atencion", "atendieron", "personal", "trato"] },
  { categoria: "limpieza", palabras: ["sucio", "limpieza", "higiene", "baño"] },
  { categoria: "precio", palabras: ["precio", "caro", "costo", "cobro"] },
  { categoria: "app_crm", palabras: ["app", "web", "chatbot", "pagina", "sistema"] },
  { categoria: "fidelidad", palabras: ["puntos", "sello", "fidelidad", "premio"] },
];

const POSITIVAS = ["excelente", "rico", "delicioso", "recomiendo", "amable", "rapido", "bueno", "encanto", "feliz", "perfecto"];
const NEGATIVAS = ["malo", "pesimo", "pésimo", "horrible", "demora", "tarde", "frio", "frío", "sucio", "queja", "reclamo", "nunca", "decepcion", "decepción", "intoxic"];
const CRITICAS = ["intoxic", "enferme", "enfermé", "denuncia", "agresion", "agresión", "discrimin", "peligro"];

function normalizar(texto = "") {
  return texto.toLocaleLowerCase("es-PE").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function clasificar(mensaje) {
  const texto = normalizar(mensaje);
  const negativo = NEGATIVAS.some((palabra) => texto.includes(normalizar(palabra)));
  const positivo = POSITIVAS.some((palabra) => texto.includes(normalizar(palabra)));
  const criticidad = CRITICAS.some((palabra) => texto.includes(normalizar(palabra))) ? 5 : negativo ? 3 : 1;
  const regla = REGLAS.find((item) => item.palabras.some((palabra) => texto.includes(normalizar(palabra))));

  return {
    sentimiento: negativo && !positivo ? "negativo" : positivo && !negativo ? "positivo" : "neutro",
    categoria: regla?.categoria || "otros",
    criticidad,
  };
}

async function crear(datos) {
  const clasificacion = clasificar(datos.mensaje);
  const nps = datos.nps === undefined || datos.nps === null || datos.nps === ""
    ? null
    : Math.max(0, Math.min(10, Number(datos.nps)));

  return prisma.feedback.create({
    data: {
      nombre: String(datos.nombre).trim(),
      correo: datos.correo ? String(datos.correo).trim() : null,
      mensaje: String(datos.mensaje).trim(),
      canal: String(datos.canal || "web").slice(0, 30),
      sentimiento: clasificacion.sentimiento,
      categoria: clasificacion.categoria,
      criticidad: clasificacion.criticidad,
      nps: Number.isFinite(nps) ? nps : null,
    },
  });
}

module.exports = { clasificar, crear };
