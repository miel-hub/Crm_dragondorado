"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bot,
  X,
  Send,
  Clock,
  MapPin,
  CreditCard,
  Menu,
  Gift,
  CalendarHeart,
  UserCircle2,
  PackageSearch,
  Loader2,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { calificarRespuestaChatbot, enviarMensajeChatbot } from "@/lib/api"

type Mensaje = {
  id: string
  tipo: "ia" | "usuario"
  texto: string
  hora: string
  conversationId?: number | null
  valoracion?: "si" | "no"
}

const QUICK_REPLIES = [
  { id: "qr-01", label: "📋 Ver la carta", icon: Menu, intento: 3 },
  { id: "qr-02", label: "🕐 Horarios y feriados", icon: Clock, intento: 1 },
  { id: "qr-03", label: "📍 Ubicación y Maps", icon: MapPin, intento: 2 },
  { id: "qr-04", label: "💳 Delivery y pagos", icon: CreditCard, intento: 5 },
  { id: "qr-05", label: "🐉 Fidelidad Chifa", icon: Gift, intento: 7 },
  {
    id: "qr-06",
    label: "📅 Reservar mesa / evento",
    icon: CalendarHeart,
    intento: 6,
  },
  {
    id: "qr-07",
    label: "📦 Estado de mi pedido",
    icon: PackageSearch,
    intento: 8,
  },
]

const HORA = () =>
  new Date().toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
  })

const RESPUESTAS_IA: Record<number, string> = {
  1:
    "🕐 Nuestros horarios del Dragón en Lima 🐉\n\n" +
    "Lunes a Viernes:  **8:00 am — 10:00 pm** 🌙\n" +
    "Sábados y Domingos:  **8:00 am — 6:30 pm** ☀️\n\n" +
    "Feriados excepcionales: 25 dic · 1 ene · 1 may · 28-29 jul · 8 oct (cierre total)\n" +
    "24 dic y 31 dic:  cierre 2:00 pm 🌲",

  2:
    "📍 **Nido del Dragón — Jr. de la Unión 500, Lima 15001** 🔥\n\n" +
    "🗺️ Google Maps: https://maps.app.goo.gl/aL3CQdSJhXk5QfBv7\n" +
    "Referencia: 2 cuadras Plaza San Martín, frente a Galería El Oso.\n" +
    "🚗 Parking cercano: Jr. Huallaga 345 (S/ 5 x hora)\n" +
    "♿ Acceso movilidad reducida: ✅ Sí, rampas en ingreso",

  3:
    "📋 Nuestra carta (6 categorías estrella) 🐉🥢\n\n" +
    "🥡 Arroces Chaufa · Pollo / Mixto / Camarón / Chancho / Veg\n" +
    "🥢 Tallarines Saltados · Lomo / Pollo / Mixto / Verde\n" +
    "🥟 Wantanes y Fritos · Gyoza / Rollitos / Wantán\n" +
    "🍜 Sopas y Caldos · Wontón / Aguadito / Gallina\n" +
    "🐉 Especiales del Dragón · Kung Pao / Tausi / Tipakay\n" +
    "🧋 Bebidas y Postres · Chicha morada · Limonada · Tres leches\n\n" +
    "¿Qué categoría te gustó más? Te recomiendo 2 platos.",

  5:
    "🛵 **Delivery y Métodos de Pago** 💰\n\n" +
    "💳 Aceptamos: Efectivo · VISA · Mastercard · Amex · Yape · Plin · BIM · QR Mercado Pago\n" +
    "🎁 *Paga Yape y recoge en tienda: 20% OFF automático*\n\n" +
    "🛵 Apps partners: Rappi · Uber Eats · PedidosYa\n" +
    "🏍️ Delivery propio: Lima Cercado (30-40 min)",

  7:
    "🐉 **Programa Fidelidad Chifa** — ¡3 pasos a tu Plato Especial GRATIS!\n\n" +
    "1️⃣ Compra **≥ S/ 150** (con boleta) = 1 🐉 sello\n" +
    "2️⃣ Acumula 5 sellos en tu cuenta CRM\n" +
    "3️⃣ Canjea en caja → **Plato Especial del Dragón GRATIS** 🥡🎁\n\n" +
    "🔥 Extra: Top 1 Juego semanal → **30% OFF** Plato Especial\n" +
    "Vigencia por sello: 180 días naturales.",

  6:
    "📅 **Reservas y Eventos Privados** 🍾\n\n" +
    "👥 Salón principal: 12 mesas, máximo 8 personas cada una\n" +
    "🥂 Salón privado La Guarida del Dragón: 20-35 personas\n\n" +
    "⏰ Anticipación: grupos 72 h · individual 24 h\n" +
    "📞 Confirmación por WhatsApp: +51 951 979 404\n" +
    "🎂 ¿Cumpleaños o aniversario? ¡Decoración Dragón gratis!",

  8:
    "📦 Para consultar el estado real de tu pedido, inicia sesión y vuelve a escribir «¿Dónde está mi pedido?».",

  999:
    "👋 ¡Mucho gusto! Soy **el Asistente del Dragón** 🐉\n\n" +
    "Respondo tus consultas en menos de 30 segundos sobre nuestra carta, ubicación, horarios, reservas y programa de fidelidad chifa.\n\n" +
    "¿En qué puedo ayudarte hoy?",
}

export default function IAChatbotWidget() {
  const [abierto, setAbierto] = useState(false)

  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: "m-000",
      tipo: "ia",
      texto: RESPUESTAS_IA[999],
      hora: HORA(),
    },
  ])

  const [input, setInput] = useState("")
  const [cargando, setCargando] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = scrollRef.current

    if (!elemento) return

    requestAnimationFrame(() => {
      elemento.scrollTo({
        top: elemento.scrollHeight,
        behavior: "smooth",
      })
    })
  }, [mensajes])

  const agregarMensaje = (
    tipo: Mensaje["tipo"],
    texto: string,
    conversationId: number | null = null,
  ) => {
    setMensajes((prev) => [
      ...prev,
      {
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        tipo,
        texto,
        hora: HORA(),
        conversationId,
      },
    ])
  }

  const responderLocal = (intento: number, textoUsuario: string) => {
    window.setTimeout(() => {
      const textoIa =
        RESPUESTAS_IA[intento] ??
        `🐉 Recibí tu consulta: "${textoUsuario}".\n\n` +
          "Para mayor detalle habla con un Dragón Humano 🧑💬\n" +
          "WhatsApp: +51 951 979 404 ✅"

      agregarMensaje("ia", textoIa)
      setCargando(false)
    }, 350)
  }

  const consultarAsistente = async (textoUsuario: string, intentoFallback: number) => {
    agregarMensaje("usuario", textoUsuario)
    setCargando(true)
    try {
      const resultado = await enviarMensajeChatbot(textoUsuario)
      agregarMensaje("ia", resultado.respuesta, resultado.id)
      setCargando(false)
    } catch (error) {
      // La demo conserva respuestas locales si el backend no está iniciado.
      console.warn("Asistente API no disponible, usando respuesta local", error)
      responderLocal(intentoFallback, textoUsuario)
    }
  }

  const valorarRespuesta = async (mensajeId: string, conversationId: number, util: boolean) => {
    setMensajes((prev) => prev.map((mensaje) =>
      mensaje.id === mensajeId
        ? { ...mensaje, valoracion: util ? "si" : "no" }
        : mensaje,
    ))
    try {
      await calificarRespuestaChatbot(conversationId, util)
    } catch (error) {
      console.warn("No se pudo guardar la valoración del chat", error)
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const texto = input.trim()
    setInput("")

    let intento = 999

    if (/horari|feri|abierto|cierr[ae]|hora/i.test(texto)) {
      intento = 1
    } else if (/ubicaci[oó]n|llegar|mapa|estaciona|direcci/i.test(texto)) {
      intento = 2
    } else if (
      /carta|menu|plato|quer[ea]r|recomiendan|categoria|que venden/i.test(
        texto,
      )
    ) {
      intento = 3
    } else if (/pago|tarjeta|yape|plin|delivery|envio|mandar/i.test(texto)) {
      intento = 5
    } else if (/fidel|puntos|gratis|plato especial|acumul|canje/i.test(texto)) {
      intento = 7
    } else if (/reser|evento|cumplea|mesa|grupo|privado/i.test(texto)) {
      intento = 6
    } else if (/pedido|orden|seguimiento|rastre|en camino/i.test(texto)) {
      intento = 8
    }

    void consultarAsistente(texto, intento)
  }

  return (
    <>
      {!abierto && (
        <button
          type="button"
          aria-label="Abrir chat Asistente del Dragón"
          onClick={() => setAbierto(true)}
          className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border-[3px] shadow-[0_10px_30px_rgba(139,0,0,0.45)] transition-transform hover:scale-110 active:scale-95"
          style={{
            background:
              "linear-gradient(135deg,#FFD700 0%, #F5C518 55%, #E1A800 100%)",
            borderColor: "#8B0000",
          }}
        >
          <span className="select-none text-3xl drop-shadow-md">🐉</span>

          <span className="absolute -top-1 -right-1 rounded-full border border-[color:var(--brand-gold)] bg-[#8B0000] px-2 py-0.5 text-[10px] font-bold text-[color:var(--brand-gold)] shadow">
            IA
          </span>
        </button>
      )}

      {abierto && (
        <div
          className="fixed right-6 bottom-6 z-50 flex min-h-0 flex-col overflow-hidden rounded-2xl shadow-2xl animate-[fadeIn_.25s_ease-out]"
          style={{
            width: "min(92vw,420px)",
            height: "min(82vh,640px)",
            border: "3px solid #8B0000",
            boxShadow:
              "0 20px 60px rgba(139,0,0,.25), 0 0 0 2px #FFD700 inset",
            background: "#ffffff",
          }}
        >
          <div
            className="flex shrink-0 items-center justify-between gap-3 px-4 py-3"
            style={{
              background:
                "linear-gradient(90deg,#8B0000 0%, #6b0000 55%, #8B0000 100%)",
              borderBottom: "3px solid #FFD700",
            }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl"
                style={{
                  background: "linear-gradient(135deg,#FFD700,#E1A800)",
                  border: "2px solid #8B0000",
                }}
              >
                <Bot className="h-6 w-6 text-[#8B0000]" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 font-serif text-base font-bold leading-tight text-white">
                  Asistente del Dragón
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                </div>

                <div className="text-xs font-medium text-[color:var(--brand-gold)]">
                  Restaurante Dragón Dorado · Lima · Online
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar chat"
              className="text-white hover:bg-white/10 hover:text-[color:var(--brand-gold)]"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-muted/30 px-3 py-4"
          >
            <div className="space-y-3">
              {mensajes.map((mensaje) => (
                <div
                  key={mensaje.id}
                  className={`flex ${
                    mensaje.tipo === "usuario"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap shadow-sm ${
                      mensaje.tipo === "usuario"
                        ? "rounded-br-md text-white"
                        : "rounded-bl-md border border-border bg-background text-foreground"
                    }`}
                    style={
                      mensaje.tipo === "usuario"
                        ? {
                            background:
                              "linear-gradient(135deg,#8B0000 0%, #6b0000 100%)",
                          }
                        : undefined
                    }
                  >
                    <div>{mensaje.texto}</div>

                    {mensaje.tipo === "ia" && mensaje.conversationId && (
                      <div className="mt-2 flex items-center gap-1 border-t border-border/70 pt-1">
                        <span className="mr-1 text-[10px] text-muted-foreground">¿Te sirvió?</span>
                        <button
                          type="button"
                          aria-label="Marcar respuesta útil"
                          disabled={Boolean(mensaje.valoracion)}
                          onClick={() => void valorarRespuesta(mensaje.id, mensaje.conversationId as number, true)}
                          className={`rounded p-1 hover:bg-emerald-100 ${mensaje.valoracion === "si" ? "bg-emerald-100 text-emerald-700" : "text-muted-foreground"}`}
                        >
                          <ThumbsUp className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          aria-label="Marcar respuesta no útil"
                          disabled={Boolean(mensaje.valoracion)}
                          onClick={() => void valorarRespuesta(mensaje.id, mensaje.conversationId as number, false)}
                          className={`rounded p-1 hover:bg-red-100 ${mensaje.valoracion === "no" ? "bg-red-100 text-red-700" : "text-muted-foreground"}`}
                        >
                          <ThumbsDown className="h-3 w-3" />
                        </button>
                      </div>
                    )}

                    <div
                      className={`mt-1 text-[10px] ${
                        mensaje.tipo === "usuario"
                          ? "text-right text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {mensaje.hora}
                    </div>
                  </div>
                </div>
              ))}

              {cargando && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-border bg-background px-3.5 py-2.5 text-sm text-muted-foreground shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-[#8B0000]" />
                    Consultando la carta y tu CRM...
                  </div>
                </div>
              )}

              <div className="pt-2">
                <div className="mb-2 px-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                  Pregunta rápida
                </div>

                <div className="flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((pregunta) => (
                    <button
                      key={pregunta.id}
                      type="button"
                      onClick={() => void consultarAsistente(pregunta.label, pregunta.intento)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-gold)]/60 bg-background px-3 py-1.5 text-xs font-medium text-[#8B0000] shadow-sm transition-colors hover:bg-[color:var(--brand-gold)] hover:text-primary"
                    >
                      <pregunta.icon className="h-3.5 w-3.5" />
                      {pregunta.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-border bg-background px-3 py-2.5">
            <a
              href="https://wa.me/51951979404"
              target="_blank"
              rel="noreferrer"
              className="mb-2 flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,0,.18), rgba(220,20,60,.12))",
                color: "#8B0000",
                border: "1px dashed #8B000088",
              }}
            >
              <UserCircle2 className="h-4 w-4" />
              ¿Prefieres hablar con un Dragón Humano? · WhatsApp 👉 +51 951
              979 404
            </a>

            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta al Dragón 🐉🔥..."
                className="h-10 bg-muted/50 focus-visible:ring-[#8B0000]"
                aria-label="Escribe mensaje para el Asistente IA"
                disabled={cargando}
              />

              <Button
                type="submit"
                size="icon"
                aria-label="Enviar mensaje"
                className="h-10 w-10"
                disabled={cargando}
                style={{
                  background:
                    "linear-gradient(135deg,#8B0000,#6b0000)",
                }}
              >
                <Send className="h-4 w-4 text-[color:var(--brand-gold)]" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
