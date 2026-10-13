import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/lib/user-context";
import { useVentas, type DetalleVenta } from "@/lib/venta-context";
import { Package, ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function PedidosPage() {
  const router = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useUser();
  const { ventas, loading, refreshVentas } = useVentas();

  useEffect(() => {
    if (!isAuthenticated) {
      router("/login");
    }
    
  }, [isAuthenticated, router]);

  // Recargar pedidos cada vez que se entre a esta página
  useEffect(() => {
    if (user && isAuthenticated) {
      refreshVentas();
    }
  }, [user, isAuthenticated, location.state]);

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-muted-foreground">Cargando tus pedidos...</p>
      </div>
    );
  }

  if (ventas.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-background">
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
              <h1 className="text-4xl font-serif font-bold mb-2">
                Mis Pedidos
              </h1>
              <p className="text-white/90">Historial completo de tus compras</p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-muted-foreground text-lg">
              No tienes pedidos registrados aún ☕
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
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
            <h1 className="text-4xl font-serif font-bold mb-2">Mis Pedidos</h1>
            <p className="text-white/90">Historial completo de tus compras</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {ventas.map((order) => (
              <Card key={order.id_venta} className="p-6 relative">
                {/* Cabecera */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        Pedido #{order.id_venta}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.fecha_venta).toLocaleDateString(
                          "es-PE"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Productos */}
                <div className="space-y-2 mb-4">
                  {order.detalleventa?.map(
                    (item: DetalleVenta, index: number) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.cantidad}x {item.productos?.nombre_producto}
                        </span>
                        <span className="font-medium">
                          S/ {Number(item.subtotal).toFixed(2)}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {order.metodo_entrega === "delivery" && (
                  <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm">
                    <p className="font-semibold text-primary">🛵 Delivery a domicilio</p>
                    {order.direccion_entrega && <p>Dirección: {order.direccion_entrega}</p>}
                    {order.referencia_entrega && <p>Referencia: {order.referencia_entrega}</p>}
                    {order.repartidor && <p>Repartidor: {order.repartidor}</p>}
                    {order.tiempo_estimado_min != null && order.estado !== "entregado" && (
                      <p>Tiempo estimado: {order.tiempo_estimado_min} minutos</p>
                    )}
                  </div>
                )}

                {/* Total y estado */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-xl font-bold text-primary">
                      S/ {Number(order.total).toFixed(2)}
                    </p>
                  </div>

                  {/* Estado (alineado abajo a la derecha) */}
                  <div className="flex justify-end items-center">
                    <Badge
                      className={`text-white text-base px-5 py-2 rounded-md shadow-sm ${
                        order.estado === "entregado"
                          ? "bg-gray-400"
                          : order.estado === "por recoger"
                          ? "bg-green-500"
                          : order.estado === "en preparacion"
                          ? "bg-yellow-500"
                          : order.estado === "en camino"
                          ? "bg-blue-500"
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
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
