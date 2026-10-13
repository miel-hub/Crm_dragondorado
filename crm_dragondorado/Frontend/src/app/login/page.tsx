"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useUser } from "@/lib/user-context"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Coffee, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useNavigate()
  const location = useLocation()
  const { login } = useUser()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const userData = await login(email, password)
      
      toast({
        title: "✅ Inicio de sesión exitoso",
        description: `Bienvenido de vuelta, ${userData.nombre_usuario}`,
        duration: 3000,
      })
      
      // Si es cocinero (rol_usuario === 3), redirigir a /cocinero
      if (userData.rol_usuario === 3) {
        router("/cocinero")
      } else {
        // Si es cliente u otro rol, redirigir a la ruta de donde venía o al dashboard
        const from = (location.state as any)?.from || "/dashboard"
        router(from)
      }
    } catch (err: any) {
      const errorMessage = err.message || "Error al iniciar sesión. Por favor, intenta nuevamente."
      setError(errorMessage)
      
      toast({
        variant: "destructive",
        title: "❌ Error al iniciar sesión",
        description: errorMessage,
        duration: 5000,
      })
      
      console.error("Login error:", err)
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
            <h1 className="text-3xl font-serif font-bold mb-2">Bienvenido de Vuelta</h1>
            <p className="text-muted-foreground">Inicia sesión para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
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
              />
            <div className="text-right mt-2">
                <Link to="/password-reset" className="text-sm text-primary hover:underline font-semibold">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-primary hover:underline font-semibold">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </Card>
      </main>
    </div>
  )
}