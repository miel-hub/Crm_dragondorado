"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/lib/user-context";
import { useVentas } from "@/lib/venta-context";
import { Gift, ArrowLeft, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { getUsuarioById } from "@/lib/api";
import type { User } from "@/lib/user-context";

export default function PuntosPage() {
  const router = useNavigate();
  const { user, isAuthenticated } = useUser();
  const { ventas, loading: ventasLoading } = useVentas();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router("/login");
    }
  }, [isAuthenticated, router]);

  // Traer datos actualizados del usuario
  useEffect(() => {
    if (user) {
      getUsuarioById(user.id_usuario)
        .then(setUserData)
        .catch((err) => console.error("Error al traer usuario:", err));
    }
  }, [user]);

  if (!user || ventasLoading || !userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-muted-foreground">Cargando tu información...</p>
      </div>
    );
  }

  // Obtener el contador actual del backend
  const bubbleTeaCount = userData.contador_bubbleTea ?? 0;
  const bubbleTeaProgress = (bubbleTeaCount / 9) * 100;
  const bubbleTeaRemaining = 9 - bubbleTeaCount;

  // Historial de compras (tomado de las ventas del usuario)
  const purchaseHistory = ventas
    .filter((venta) =>
      venta.detalleventa?.length > 0
    )
    .map((venta) => ({
      date: new Date(venta.fecha_venta).toLocaleDateString("es-PE"),
      description: `Compra válida - Pedido #${venta.id_venta}`,
      type: "bubble-tea",
    }));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:text-white/80 mb-4"
            >
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Dashboard
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold mb-2">Mi Progreso</h1>
            <p className="text-white/90">
              Sigue tu progreso hacia tu Plato Especial gratis
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna Izquierda */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progreso Fidelidad Chifa */}
              <Card className="p-8 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Compras para Plato Especial
                    </p>
                    <p className="text-6xl font-bold text-primary">
                      {bubbleTeaCount}
                    </p>
                    <p className="text-lg text-muted-foreground mt-2">
                      de 9 para obtener un Plato Especial gratis
                    </p>
                  </div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🥡</span>
                  </div>
                </div>
                <Progress value={bubbleTeaProgress} className="h-4 mb-4" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{bubbleTeaCount} compras realizadas</span>
                  <span>9 compras totales</span>
                </div>
              </Card>

              {/* Detalles del progreso */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  Tu Progreso
                </h2>
                {bubbleTeaRemaining === 0 ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-900 mb-1">
                      ¡Felicidades! 🎉
                    </p>
                    <p className="text-sm text-green-800">
                      Has completado 10 compras válidas. Tu próximo Plato
                      Especial es completamente GRATIS.
                    </p>
                  </div>
                ) : (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 mb-1">
                      Te faltan {bubbleTeaRemaining} compra
                      {bubbleTeaRemaining !== 1 ? "s" : ""}
                    </p>
                    <p className="text-sm text-blue-800">
                      Sigue comprando para obtener tu próximo Plato Especial
                      completamente gratis.
                    </p>
                  </div>
                )}
              </Card>

              {/* Historial de compras reales */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Historial de Compras</h2>
                <div className="space-y-3">
                  {purchaseHistory.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      Aún no has realizado compras válidas para el programa.
                    </p>
                  ) : (
                    purchaseHistory.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {item.type === "bubble-tea" ? "🥡" : "🎁"}
                          </div>
                          <div>
                            <p className="font-semibold">{item.description}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.date}
                            </p>
                          </div>
                        </div>
                        {item.type === "bubble-tea" && (
                          <Badge variant="secondary" className="text-sm">
                            +1 compra
                          </Badge>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>

            {/* Columna Derecha */}
            <div className="space-y-6">
              {/* Cómo funciona */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Cómo Funciona</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <span className="text-lg">1️⃣</span> Compra en Dragón Dorado
                    </p>
                    <p className="text-muted-foreground">
                      Cada compra cuenta hacia tu meta de Plato Especial
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <span className="text-lg">2️⃣</span> Acumula Compras
                    </p>
                    <p className="text-muted-foreground">
                      Necesitas 9 compras para obtener un Plato Especial gratis
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <span className="text-lg">3️⃣</span> Disfruta Gratis
                    </p>
                    <p className="text-muted-foreground">
                      Tu 10ª compra se convierte en un Plato Especial GRATIS
                    </p>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <Gift className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">¡Sigue Comprando!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cada compra te acerca más a tu Plato Especial gratis
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Link to="/catalogo">Ir al Catálogo</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
