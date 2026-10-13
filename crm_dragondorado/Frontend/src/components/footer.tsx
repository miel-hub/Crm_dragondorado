"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useUser } from "@/lib/user-context"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Footer() {
  const { user } = useUser()
  const [openModal, setOpenModal] = useState<string | null>(null)

  // No mostrar el footer si el usuario es cocinero (rol_usuario === 3)
  if (user?.rol_usuario === 3) {
    return null
  }

  const handleModalOpen = (modalType: string) => {
    setOpenModal(modalType)
  }

  const handleModalClose = () => {
    setOpenModal(null)
  }

  return (
    <>
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Horario de atención */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-24 h-24 drop-shadow-xl"
                  aria-label="Restaurante Dragón Dorado"
                  role="img"
                >
                  <defs>
                    <linearGradient id="circuloGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#8B0000" />
                      <stop offset="100%" stopColor="#DC143C" />
                    </linearGradient>
                    <linearGradient id="dragonGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="46" fill="url(#circuloGrad)" stroke="#FFD700" strokeWidth="3"/>
                  <g transform="translate(25, 22)" fill="url(#dragonGrad)">
                    <path d="M5,50 C5,50 15,35 27,40 C39,45 42,28 30,20 C18,12 34,5 48,16 L45,10 L55,13 L49,22 L58,30 L50,33 L55,42 L42,40 C45,55 27,60 12,55 C5,53 5,50 5,50 Z"
                          stroke="#8B0000" strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx="43" cy="18" r="3" fill="#8B0000"/>
                    <path d="M0,42 L5,30 L10,42 L15,26 L20,42 L5,48 Z" fill="#FF6B00" opacity="0.9"/>
                    <path d="M52,-2 L56,10 L60,-2 L63,12 L66,-2 Z" fill="#FFD700" opacity="0.95"/>
                    <path d="M0,12 L6,6 L10,16 L15,2 L20,16 Z" fill="#FF4500" opacity="0.85"/>
                  </g>
                  <text x="50" y="92" textAnchor="middle"
                        fontFamily="'Georgia', serif" fontWeight="900" fontSize="10"
                        fill="#FFD700" letterSpacing="1.5">
                    CHIFA
                  </text>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Horario de atención
              </h3>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Lunes a Viernes</p>
              <p className="text-sm text-muted-foreground mb-4">08:00 am - 20:00 pm</p>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Sábados y Domingo</p>
              <p className="text-sm text-muted-foreground">08:00 am - 18:30 pm</p>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Nos encontramos en:
              </h3>
              <div className="w-full h-32 rounded-lg overflow-hidden mb-4 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7803.330839900001!2d-77.0427917!3d-12.0596541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850bdb5e2cb%3A0x5d24b6e8e9e20e1!2sJir%C3%B3n%20de%20la%20Uni%C3%B3n%20500%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1726966800000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dragón Dorado"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/aL3CQdSJhXk5QfBv7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Jr. de la Unión 500, Lima 15001
              </a>
            </div>

            {/* Contacto y Redes Sociales */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Central Telefónica:
              </h3>
              <a 
                href="tel:+51951979404"
                className="text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
              >
                (+51) 951-979-404
              </a>

              <h3 className="font-semibold text-foreground mb-4">Síguenos en</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.tiktok.com/@DragonDorado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                  aria-label="TikTok"
                >
                  <svg 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/DragonDorado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/DragonDorado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Políticas */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-semibold text-foreground mb-4">Políticas</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleModalOpen("terminos")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Términos y condiciones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleModalOpen("privacidad")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Políticas de Privacidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleModalOpen("faq")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Preguntas frecuentes
                  </button>
                </li>
              </ul>
              <Link
                to="/libro-reclamaciones"
                className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-3 text-xs text-center font-medium transition-colors"
              >
                📖 Libro de reclamaciones
              </Link>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Dragón Dorado - Chifa. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Diseñado con ❤️ por el equipo de Dragón Dorado
            </p>
          </div>
        </div>
      </footer>

      {/* Modales de Políticas */}
      <Dialog open={openModal === "terminos"} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Términos y Condiciones</DialogTitle>
            <DialogDescription>
              Última actualización: 24 de noviembre de 2025
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Aceptación de los Términos</h3>
              <p className="text-muted-foreground">
                Al acceder y utilizar el sitio web de Dragón Dorado - Chifa, usted acepta estar sujeto a estos términos y condiciones de uso.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">2. Uso del Sitio Web</h3>
              <p className="text-muted-foreground">
                El contenido de este sitio web es únicamente para su información general y uso. Está sujeto a cambios sin previo aviso.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">3. Productos y Servicios</h3>
              <p className="text-muted-foreground">
                Todos los productos y servicios ofrecidos están sujetos a disponibilidad. Los precios pueden cambiar sin previo aviso.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">4. Política de Pedidos</h3>
              <p className="text-muted-foreground">
                Los pedidos deben realizarse con anticipación. Los tiempos de entrega pueden variar según la complejidad del pedido.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">5. Métodos de Pago</h3>
              <p className="text-muted-foreground">
                Aceptamos pagos en efectivo, tarjetas de crédito/débito, Yape y transferencias bancarias a través de Mercado Pago.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">6. Programa de Fidelización</h3>
              <p className="text-muted-foreground">
                Los puntos y beneficios del programa de Fidelidad Chifa están sujetos a los términos específicos del programa.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === "privacidad"} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Políticas de Privacidad</DialogTitle>
            <DialogDescription>
              Última actualización: 24 de noviembre de 2025
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Información que Recopilamos</h3>
              <p className="text-muted-foreground">
                Recopilamos información personal como nombre, correo electrónico, teléfono y dirección cuando realiza un pedido o se registra en nuestro sitio.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">2. Uso de la Información</h3>
              <p className="text-muted-foreground">
                Utilizamos su información para procesar pedidos, mejorar nuestros servicios, enviar notificaciones sobre pedidos y ofertas especiales.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">3. Protección de Datos</h3>
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad para proteger su información personal. Utilizamos cifrado SSL y almacenamiento seguro.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">4. Cookies</h3>
              <p className="text-muted-foreground">
                Utilizamos cookies para mejorar su experiencia de navegación y mantener su sesión activa.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">5. Compartir Información</h3>
              <p className="text-muted-foreground">
                No vendemos ni compartimos su información personal con terceros, excepto cuando es necesario para procesar pagos (Mercado Pago).
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">6. Sus Derechos</h3>
              <p className="text-muted-foreground">
                Puede solicitar acceso, corrección o eliminación de sus datos personales contactándonos directamente.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openModal === "faq"} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preguntas Frecuentes</DialogTitle>
            <DialogDescription>
              Respuestas a las preguntas más comunes
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">¿Cómo hago un pedido?</h3>
              <p className="text-muted-foreground">
                Puedes realizar tu pedido a través de nuestro sitio web, seleccionando los productos del catálogo y procediendo al checkout.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Cuánto tiempo tarda mi pedido?</h3>
              <p className="text-muted-foreground">
                Los pedidos simples toman aproximadamente 30-45 minutos. Pedidos especiales o personalizados requieren coordinación previa.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-muted-foreground">
                Aceptamos efectivo, tarjetas de crédito/débito, Yape, Plin y transferencias bancarias a través de Mercado Pago.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Cómo funciona el programa de Fidelidad Chifa?</h3>
              <p className="text-muted-foreground">
                Por cada S/ 150 en consumición acumulas puntos. Al alcanzar la meta, recibes un PLATO ESPECIAL GRATIS.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Puedo cancelar mi pedido?</h3>
              <p className="text-muted-foreground">
                Puedes cancelar tu pedido antes de que sea confirmado por el cocinero. Contacta al (+51) 951-979-404.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Hacen entregas a domicilio?</h3>
              <p className="text-muted-foreground">
                Actualmente nuestros productos son para recoger en tienda. Estamos trabajando en implementar delivery pronto.
              </p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">¿Tienen productos sin gluten o veganos?</h3>
              <p className="text-muted-foreground">
                Contáctanos para consultar sobre opciones especiales. Hacemos nuestro mejor esfuerzo para adaptarnos a necesidades dietéticas.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
