"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { AlertCircle, BookOpen, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function LibroReclamacionesPage() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    tipo: "reclamo",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validaciones
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setError("Por favor completa todos los campos obligatorios")
      setIsLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.correo)) {
      setError("Por favor ingresa un correo electrónico válido")
      setIsLoading(false)
      return
    }

    if (formData.mensaje.length < 20) {
      setError("El mensaje debe tener al menos 20 caracteres")
      setIsLoading(false)
      return
    }

    try {
      // Enviar reclamo al backend
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/reclamaciones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Error al enviar el reclamo")
      }

      // Éxito
      setIsSubmitted(true)
      toast({
        title: "✅ Reclamo enviado exitosamente",
        description: "Hemos recibido tu reclamo y te enviaremos una confirmación por correo.",
        duration: 5000,
      })

      // Resetear formulario después de 3 segundos y redirigir
      setTimeout(() => {
        navigate("/")
      }, 3000)

    } catch (err: any) {
      const errorMessage = err.message || "Error al enviar el reclamo. Por favor, intenta nuevamente."
      setError(errorMessage)
      
      toast({
        variant: "destructive",
        title: "❌ Error al enviar reclamo",
        description: errorMessage,
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-cream to-muted p-4">
          <Card className="w-full max-w-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-serif font-bold mb-4">¡Reclamo Enviado!</h1>
            <p className="text-muted-foreground mb-4">
              Hemos recibido tu {formData.tipo} y te hemos enviado una confirmación a <strong>{formData.correo}</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Nuestro equipo revisará tu mensaje y te responderemos lo antes posible.
            </p>
            <Button onClick={() => navigate("/")} className="w-full">
              Volver al inicio
            </Button>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gradient-to-br from-cream to-muted p-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-serif font-bold mb-2">Libro de Reclamaciones</h1>
              <p className="text-muted-foreground">
                Tu opinión es importante para nosotros. Completa el formulario y nos pondremos en contacto contigo.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">📋 Información Importante</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Recibirás una confirmación por correo electrónico</li>
                <li>• Nuestro equipo revisará tu caso en un plazo de 24-48 horas</li>
                <li>• Te responderemos al correo que proporciones</li>
                <li>• Todos los campos marcados con * son obligatorios</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="correo">Correo Electrónico *</Label>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="(+51) 999-999-999"
                  />
                </div>

                <div>
                  <Label htmlFor="tipo">Tipo de Solicitud *</Label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  >
                    <option value="reclamo">Reclamo</option>
                    <option value="queja">Queja</option>
                    <option value="sugerencia">Sugerencia</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="mt-1 min-h-[150px]"
                  placeholder="Describe tu reclamo, queja o sugerencia con el mayor detalle posible..."
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Mínimo 20 caracteres ({formData.mensaje.length}/20)
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Ley N° 29571 - Código de Protección y Defensa del Consumidor</strong>
                </p>
                <p>
                  Al enviar este formulario, tus datos serán tratados de acuerdo con nuestra política de privacidad 
                  y la normativa vigente sobre protección de datos personales.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isLoading ? "Enviando..." : "Enviar Reclamo"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}
