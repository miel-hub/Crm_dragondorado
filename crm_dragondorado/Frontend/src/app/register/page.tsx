"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useUser } from "@/lib/user-context"
import { Link, useNavigate } from "react-router-dom"
import { Coffee, Gift, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const router = useNavigate()
  const { register } = useUser()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validaciones en el frontend
    if (password.length < 6) {
      const errorMsg = "La contraseña debe tener al menos 6 caracteres"
      setError(errorMsg)
      toast({
        variant: "destructive",
        title: "❌ Error de validación",
        description: errorMsg,
        duration: 5000,
      })
      setIsLoading(false)
      return
    }

    try {
      await register(name, email, password)
      
      toast({
        title: "✅ Cuenta creada exitosamente",
        description: `¡Bienvenido, ${name}! Tu cuenta ha sido creada.`,
        duration: 3000,
      })
      
      router("/dashboard")
    } catch (err: any) {
      const errorMessage = err.message || "Error al crear la cuenta. Por favor, intenta nuevamente."
      setError(errorMessage)
      
      toast({
        variant: "destructive",
        title: "❌ Error al registrarse",
        description: errorMessage,
        duration: 5000,
      })
      
      console.error("Register error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-cream to-muted p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">Únete a Nosotros</h1>
            <p className="text-muted-foreground">Crea tu cuenta y empieza a ganar puntos</p>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-secondary" />
              <h3 className="font-semibold">Beneficios de Registro</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Gana puntos con cada compra</li>
              <li>• Acceso a ofertas especiales</li>
              <li>• Programa de Fidelidad Chifa</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div>
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
                placeholder="••••••••"
                minLength={6}
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
              {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-primary hover:underline font-semibold">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </Card>
      </main>
    </div>
  )
}
