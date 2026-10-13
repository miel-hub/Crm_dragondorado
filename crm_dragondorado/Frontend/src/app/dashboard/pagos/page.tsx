"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useUser } from "@/lib/user-context"
import { CreditCard, ArrowLeft, Plus, Trash2 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function PagosPage() {
  const router = useNavigate()
  const { user, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated) {
      router("/login")
    }
  }, [isAuthenticated, router])

  if (!user) {
    return null
  }

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "08/26",
      isDefault: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="text-white hover:text-white/80 mb-4">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Dashboard
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold mb-2">Métodos de Pago</h1>
            <p className="text-white/90">Gestiona tus tarjetas y métodos de pago</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Agregar Nuevo Método de Pago
            </Button>

            {paymentMethods.map((method) => (
              <Card key={method.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{method.type}</h3>
                        {method.isDefault && <Badge variant="secondary">Predeterminada</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">•••• •••• •••• {method.last4}</p>
                      <p className="text-xs text-muted-foreground">Expira {method.expiry}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
