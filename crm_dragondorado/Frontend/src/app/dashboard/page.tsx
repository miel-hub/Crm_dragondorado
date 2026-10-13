import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/lib/user-context";
import type { User as UserType } from "@/lib/user-context";
import { useVentas } from "@/lib/venta-context";
import { getUsuarioById } from "@/lib/api";
import {
  ShoppingBag,
  TrendingUp,
  User,
  CreditCard,
  Package,
  Zap,
  Ticket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const router = useNavigate();
  const { user, isAuthenticated, loading: userLoading } = useUser();
  const [userData, setUserData] = useState<UserType | null>(null);
  const { ventas, loading: ventasLoading } = useVentas();

  useEffect(() => {
    if (!isAuthenticated) {
      router("/login");
    }
  }, [isAuthenticated, userLoading, router]);

  useEffect(() => {
    if (!user) return;
    setUserData((prev: typeof userData) => prev ?? user);
    getUsuarioById(user.id_usuario)
      .then((data) => {
        if (data) setUserData(data);
      })
      .catch((err) => console.error("❌ Error al traer usuario:", err));
  }, [user]);

  if (!user) return null;

  if (userLoading || ventasLoading || userData === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-muted-foreground">Cargando tu información...</p>
      </div>
    );
  }

  const bubbleTeaCount = user.contador_bubbleTea ?? 0;
  const bubbleTeaProgress = (bubbleTeaCount / 9) * 100;
  const bubbleTeaRemaining = 9 - bubbleTeaCount;

  const totalPedidos = ventas.length;
  const pedidosRecientes = ventas.slice(0, 3); // 3 más recientes

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-2">Mi Cuenta</h1>
            <p className="text-white/90">
              Bienvenido de vuelta, {user.nombre_usuario}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Compras para Plato Especial
              </p>
              <p className="text-4xl font-bold text-primary">
                {bubbleTeaCount}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                de 9 para obtener un Plato Especial gratis
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Pedidos Totales
              </p>
              <p className="text-4xl font-bold">{totalPedidos}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Platos Especiales acumulados
              </p>
              <p className="text-4xl font-bold text-green-600">
                {userData?.regalo_bubbleTea ?? 0}
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Fidelidad Chifa - Plato Especial */}
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Tu Progreso al Plato Especial Gratis
                    </h2>
                    <p className="text-muted-foreground">
                      {bubbleTeaRemaining === 0
                        ? "¡Felicidades! Has ganado un Plato Especial gratis"
                        : `Te faltan ${bubbleTeaRemaining} compra${
                            bubbleTeaRemaining !== 1 ? "s" : ""
                          } para obtener un Plato Especial gratis`}
                    </p>
                  </div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🥡</span>
                  </div>
                </div>
                <Progress value={bubbleTeaProgress} className="h-4 mb-4" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{bubbleTeaCount} compras</span>
                  <span>9 compras</span>
                </div>
              </Card>

              {/* Recent Orders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Pedidos Recientes</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/pedidos">Ver Todos</Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  {pedidosRecientes.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      No tienes pedidos recientes.
                    </p>
                  ) : (
                    pedidosRecientes.map((order) => (
                      <div
                        key={order.id_venta}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <Package className="h-10 w-10 text-muted-foreground" />
                          <div>
                            <p className="font-semibold">
                              Pedido #{order.id_venta}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.fecha_venta).toLocaleDateString(
                                "es-PE"
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">
                            S/ {Number(order.total).toFixed(2)}
                          </p>

                          {/* ✅ Estado dinámico como en PedidosPage */}
                          <Badge
                            className={`text-white text-xs px-3 py-1 rounded-md shadow-sm ${
                              order.estado === "entregado"
                                ? "bg-gray-400"
                                : order.estado === "por recoger"
                                ? "bg-green-500"
                                : order.estado === "en preparacion"
                                ? "bg-yellow-500"
                                : order.estado === "por confirmar"
                                ? "bg-red-500"
                                : "bg-gray-400"
                            }`}
                          >
                            {order.estado
                              ? order.estado.charAt(0).toUpperCase() +
                                order.estado.slice(1)
                              : "Desconocido"}
                          </Badge>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Acciones Rápidas</h2>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link to="/dashboard/perfil">
                      <User className="h-4 w-4 mr-2" />
                      Editar Perfil
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link to="/dashboard/pedidos">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Mis Pedidos
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link to="/dashboard/puntos">
                      <Zap className="h-4 w-4 mr-2" />
                      Mi Progreso
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link to="/dashboard/tickets">
                      <Ticket className="h-4 w-4 mr-2" />
                      Mis Tickets
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Link to="/dashboard/pagos">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Métodos de Pago
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
