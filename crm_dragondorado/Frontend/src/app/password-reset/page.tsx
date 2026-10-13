"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function PasswordResetPage() {
  const [email, setEmail] = useState("")
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-muted p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Recuperar Contraseña</h1>
        {isSent ? (
          <p className="text-muted-foreground">
            Hemos enviado un enlace de recuperación a <span className="font-semibold">{email}</span>.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Enviar enlace
            </Button>
          </form>
        )}

        <div className="mt-6 text-sm">
          <Link to="/login" className="text-primary hover:underline">
            Volver al inicio de sesión
          </Link>
        </div>
      </Card>
    </div>
  )
}
