"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, UtensilsCrossed, ShoppingBasket, Flame } from "lucide-react"
import { enviarFeedbackCliente } from "@/lib/api"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await enviarFeedbackCliente({
        nombre: formData.name,
        correo: formData.email,
        mensaje: `${formData.message}\nTeléfono: ${formData.phone}`,
        canal: "contacto",
      })
      alert("Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.")
      setFormData({ name: "", phone: "", email: "", message: "" })
    } catch (error) {
      console.error("Error enviando mensaje de contacto:", error)
      alert("No se pudo enviar el mensaje. Inténtalo nuevamente o escríbenos por WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 border-b-4 border-[color:var(--brand-gold)]">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Comunícate con Dragón Dorado 🐉🔥</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Reservas, pedidos delivery, eventos privados o simplemente para saludar al Dragón.
              Nuestro equipo está listo para llevarte la auténtica sazón chifa.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="p-6 border-[color:var(--brand-gold)]/30 hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">📍 Ubicación</h3>
                <a
                  href="https://maps.app.goo.gl/aL3CQdSJhXk5QfBv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Jr. de la Unión 500, Lima 15001
                  <br />
                  Lima, Perú
                </a>
              </Card>

              <Card className="p-6 border-[color:var(--brand-gold)]/30 hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">📞 Teléfono y WhatsApp</h3>
                <a href="tel:+51951979404" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  (+51) 951-979-404
                </a>
              </Card>

              <Card className="p-6 border-[color:var(--brand-gold)]/30 hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">✉️ Email</h3>
                <a href="mailto:contacto@dragondorado.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contacto@dragondorado.com
                </a>
              </Card>

              <Card className="p-6 border-[color:var(--brand-gold)]/30 hover:border-[color:var(--brand-gold)] transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">🕐 Horario del Dragón</h3>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Lunes a Viernes</p>
                  <p>08:00 am — 10:00 pm</p>
                  <p className="mt-2 font-medium text-foreground">Sábados y Domingos</p>
                  <p>08:00 am — 06:30 pm</p>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                  <Flame className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold mb-1">Reservas</h4>
                  <p className="text-xs text-muted-foreground">Mesa para familias y grupos</p>
                </Card>
                <Card className="p-5 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                  <ShoppingBasket className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-bold mb-1">Delivery</h4>
                  <p className="text-xs text-muted-foreground">Por toda Lima</p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Escríbele al Dragón 🔥</h2>
                    <p className="text-sm text-muted-foreground">Responderemos en menos de 24 horas</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2"
                        placeholder="Tu nombre y apellido"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-2"
                        placeholder="+51 999 999 999"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Tu Mensaje al Dragón *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="Cuéntanos sobre tu reserva, pedido delivery, evento privado o experiencia chifa que quieras vivir..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    {isSubmitting ? (
                      "Enviando mensaje al Dragón..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje 🐉
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Map */}
              <Card className="mt-6 overflow-hidden border-[color:var(--brand-gold)]/40">
                <div className="aspect-video bg-muted relative">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Collage%204%20platos%20chifa%20peruano%20top%20view%3A%20arroz%20chaufa%20cerdo%20huevo%20verdeo%2C%20tallar%C3%ADn%20saltado%20wantanes%20fritos%20triangulares%2C%20pollo%20tiras%20picante%20camarones%2C%20copa%20vino%20blanco%2C%20bandejas%20negras%20cer%C3%A1mica%2C%20tabla%20madera%2C%20fondo%20marr%C3%B3n%20textura%2C%20fotograf%C3%ADa%20gastron%C3%B3mica%20profesional&image_size=landscape_16_9"
                    alt="Especialidades del Nido del Dragón — Arroz Chaufa, Tallarín Saltado y platos estrella de Dragón Dorado"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-6 text-white w-full flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-2xl mb-1 flex items-center gap-2">
                          🐉 Visita el Nido del Dragón
                        </h3>
                        <p className="text-white/90">Jr. de la Unión 500, Lima — Centro de Lima, fácil acceso</p>
                      </div>
                      <a
                        href="https://maps.app.goo.gl/aL3CQdSJhXk5QfBv7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[color:var(--brand-gold)] text-primary font-bold px-5 py-2.5 rounded-lg hover:scale-105 transition-transform"
                      >
                        Ver en Maps
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
