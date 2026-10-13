"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import api from "@/lib/api";
import { ChefHat, Clock, AlertCircle, Truck } from "lucide-react";
import { useEffect, useState } from "react";

// ======= TYPES ===========
type OrderItem = {
  id_detalleVenta?: number;
  id_producto?: number;
  cantidad: number;
  subtotal?: number;
  productos?: { nombre_producto?: string; precio?: number };
};

type Order = {
  id_venta: number;
  fecha_venta: string;
  total: number | string;
  estado?: string;
  metodo_entrega?: string;
  direccion_entrega?: string | null;
  referencia_entrega?: string | null;
  repartidor?: string | null;
  telefono_repartidor?: string | null;
  tiempo_estimado_min?: number | null;
  detalleventa: OrderItem[];
  usuarios?: { nombre_usuario?: string; telefono_usuario?: string };
  metodopago?: { nombre_metodoPago?: string };
};

// =========================

export default function ChefPage() {
  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrder, setLoadingOrder] = useState<number | null>(null);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [deliveryDrafts, setDeliveryDrafts] = useState<Record<number, {
    repartidor: string;
    telefono_repartidor: string;
    tiempo_estimado_min: string;
  }>>({});

  // === FUNCIÓN AUXILIAR: VERIFICAR SI ES DEL DÍA ACTUAL ===
  const isToday = (dateString: string) => {
    const orderDate = new Date(dateString);
    const today = new Date();
    return (
      orderDate.getDate() === today.getDate() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getFullYear() === today.getFullYear()
    );
  };

  // === CARGAR DATOS DEL BACKEND ===
  const fetchOrders = async () => {
    setIsLoadingOrders(true);
    try {
      const res = await api.getVentas();
      // Filtrar solo pedidos del día actual
      const todayOrders = res.filter((order: Order) => isToday(order.fecha_venta));
      setOrders(todayOrders);
      setDeliveryDrafts((previous) => {
        const next = { ...previous };
        todayOrders
          .filter((order: Order) => order.metodo_entrega === "delivery")
          .forEach((order: Order) => {
            next[order.id_venta] = next[order.id_venta] || {
              repartidor: order.repartidor || "",
              telefono_repartidor: order.telefono_repartidor || "",
              tiempo_estimado_min: order.tiempo_estimado_min?.toString() || "",
            };
          });
        return next;
      });
    } catch (error) {
      console.error("Error obteniendo ventas:", error);
    } finally {
      setIsLoadingOrders(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchOrders();
  }, []);

  if (!mounted || isLoadingOrders) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Cargando pedidos...</p>
        </main>
      </div>
    );
  }

  // ===========================
  // ORGANIZAR PEDIDOS
  // ===========================
  const pendingOrders = orders.filter((order) => order.estado !== "entregado");
  const completedOrders = orders.filter(
    (order) => order.estado === "entregado"
  );

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "por confirmar":
        return "bg-red-500";
      case "en preparacion":
        return "bg-yellow-500";
      case "por recoger":
        return "bg-green-500";
      case "en camino":
        return "bg-blue-500";
      case "entregado":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusLabel = (status: string | undefined) => {
    switch (status) {
      case "por confirmar":
        return "Por Confirmar";
      case "en preparacion":
        return "En Preparación";
      case "por recoger":
        return "Por Recoger";
      case "en camino":
        return "En Camino";
      case "entregado":
        return "Entregado";
      default:
        return status;
    }
  };

  const getNextStatus = (status?: string, metodoEntrega?: string) => {
    if (metodoEntrega === "delivery") {
      switch (status) {
        case "por confirmar":
          return "en preparacion";
        case "en preparacion":
          return "en camino";
        case "en camino":
          return "entregado";
        case "entregado":
          return "entregado";
        default:
          return "por confirmar";
      }
    }
    switch (status) {
      case "por confirmar":
        return "en preparacion";
      case "en preparacion":
        return "por recoger";
      case "por recoger":
        return "entregado";
      case "entregado":
        return "entregado";
      default:
        return "por confirmar";
    }
  };

  // ========== ACTUALIZAR ESTADO EN EL BACKEND ==========
  const handleStatusChange = async (
    orderId: number,
    currentStatus?: string,
    metodoEntrega?: string,
  ) => {
    const nextStatus = getNextStatus(currentStatus, metodoEntrega);

    try {
      setLoadingOrder(orderId);

      await api.updateVentaEstado(orderId, { estado: nextStatus });

      await fetchOrders();
    } catch (error) {
      console.error("Error actualizando estado:", error);
    } finally {
      setLoadingOrder(null);
    }
  };

  const updateDeliveryDraft = (
    orderId: number,
    field: "repartidor" | "telefono_repartidor" | "tiempo_estimado_min",
    value: string,
  ) => {
    setDeliveryDrafts((previous) => ({
      ...previous,
      [orderId]: {
        repartidor: previous[orderId]?.repartidor || "",
        telefono_repartidor: previous[orderId]?.telefono_repartidor || "",
        tiempo_estimado_min: previous[orderId]?.tiempo_estimado_min || "",
        [field]: value,
      },
    }));
  };

  const handleDeliveryDispatch = async (order: Order) => {
    const draft = deliveryDrafts[order.id_venta];
    if (!draft?.repartidor.trim()) {
      window.alert("Registra el nombre del repartidor antes de enviar el pedido.");
      return;
    }
    const eta = Number(draft.tiempo_estimado_min);
    if (!Number.isInteger(eta) || eta < 0 || eta > 240) {
      window.alert("El tiempo estimado debe estar entre 0 y 240 minutos.");
      return;
    }

    try {
      setLoadingOrder(order.id_venta);
      await api.updateVentaDelivery(order.id_venta, {
        estado: "en camino",
        repartidor: draft.repartidor.trim(),
        telefono_repartidor: draft.telefono_repartidor.trim() || undefined,
        tiempo_estimado_min: eta,
      });
      await fetchOrders();
    } catch (error) {
      console.error("Error enviando pedido a reparto:", error);
      window.alert(error instanceof Error ? error.message : "No se pudo actualizar el delivery");
    } finally {
      setLoadingOrder(null);
    }
  };

  // =======================================================

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <ChefHat className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-serif font-bold">
                Panel de Cocinero
              </h1>
            </div>
            <p className="text-white/80">
              Gestiona los pedidos de los clientes
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Pending Orders Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">
                Pedidos Pendientes ({pendingOrders.length})
              </h2>
            </div>

            {pendingOrders.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground text-lg">
                  No hay pedidos pendientes en este momento
                </p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {pendingOrders.map((order) => (
                  <Card
                    key={order.id_venta}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Header with Order ID and Status */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          #{order.id_venta}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.fecha_venta).toLocaleTimeString(
                            "es-PE",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>

                      <Badge
                        className={`${getStatusColor(
                          order.estado
                        )} text-white text-base px-4 py-1.5`}
                      >
                        {getStatusLabel(order.estado)}
                      </Badge>
                    </div>

                    {/* Customer Info */}
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Cliente
                          </p>
                          <p className="font-semibold">
                            {order.usuarios?.nombre_usuario ?? "Cliente"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Teléfono
                          </p>
                          <p className="font-semibold">
                            {order.usuarios?.telefono_usuario ?? "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Entrega
                          </p>
                          <p className="font-semibold">
                            {order.metodo_entrega === "pickup" 
                              ? "Recoger en Tienda" 
                              : order.metodo_entrega === "dine-in" 
                              ? "Consumir en Local" 
                              : order.metodo_entrega || "—"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Pago</p>
                          <p className="font-semibold">
                            {order.metodopago?.nombre_metodoPago ?? "-"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {order.metodo_entrega === "delivery" && (
                      <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Truck className="h-5 w-5 text-blue-700" />
                          <p className="font-semibold text-blue-800">Datos de reparto</p>
                        </div>
                        <p className="text-sm"><strong>Dirección:</strong> {order.direccion_entrega || "No registrada"}</p>
                        {order.referencia_entrega && (
                          <p className="text-sm"><strong>Referencia:</strong> {order.referencia_entrega}</p>
                        )}
                        {order.repartidor && (
                          <p className="text-sm"><strong>Repartidor:</strong> {order.repartidor}</p>
                        )}
                        {order.estado === "en camino" && order.tiempo_estimado_min != null && (
                          <p className="text-sm"><strong>ETA:</strong> {order.tiempo_estimado_min} minutos</p>
                        )}

                        {order.estado === "en preparacion" && (
                          <div className="mt-4 grid gap-3 md:grid-cols-4">
                            <Input
                              value={deliveryDrafts[order.id_venta]?.repartidor || ""}
                              onChange={(event) => updateDeliveryDraft(order.id_venta, "repartidor", event.target.value)}
                              placeholder="Repartidor *"
                              aria-label="Nombre del repartidor"
                            />
                            <Input
                              value={deliveryDrafts[order.id_venta]?.telefono_repartidor || ""}
                              onChange={(event) => updateDeliveryDraft(order.id_venta, "telefono_repartidor", event.target.value)}
                              placeholder="Teléfono"
                              aria-label="Teléfono del repartidor"
                            />
                            <Input
                              type="number"
                              min={0}
                              max={240}
                              value={deliveryDrafts[order.id_venta]?.tiempo_estimado_min || ""}
                              onChange={(event) => updateDeliveryDraft(order.id_venta, "tiempo_estimado_min", event.target.value)}
                              placeholder="ETA (min) *"
                              aria-label="Tiempo estimado en minutos"
                            />
                            <Button
                              onClick={() => void handleDeliveryDispatch(order)}
                              disabled={loadingOrder === order.id_venta}
                              className="bg-blue-700 text-white hover:bg-blue-800"
                            >
                              {loadingOrder === order.id_venta ? "Actualizando..." : "Enviar a reparto"}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Items List */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        Productos
                      </p>
                      <div className="space-y-2">
                        {order.detalleventa.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center p-2 bg-background rounded"
                          >
                            <div>
                              <p className="font-medium">
                                {item.productos?.nombre_producto ?? "Producto"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Cantidad: {item.cantidad}
                              </p>
                            </div>
                            <p className="font-semibold">
                              S/{" "}
                              {Number(
                                item.subtotal ?? item.productos?.precio ?? 0
                              ).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Total and Action */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-2xl font-bold text-primary">
                          S/ {Number(order.total).toFixed(2)}
                        </p>
                      </div>

                      {!(order.metodo_entrega === "delivery" && order.estado === "en preparacion") && (
                        <Button
                          onClick={() =>
                            handleStatusChange(order.id_venta, order.estado, order.metodo_entrega)
                          }
                          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                          disabled={loadingOrder === order.id_venta}
                        >
                          {loadingOrder === order.id_venta ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Actualizando...
                            </>
                          ) : (
                            <>
                              {order.estado === "por confirmar" && "Iniciar Preparación"}
                              {order.estado === "en preparacion" && order.metodo_entrega !== "delivery" && "Marcar Listo"}
                              {order.estado === "por recoger" && "Marcar Entregado"}
                              {order.estado === "en camino" && "Marcar Entregado"}
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Completed Orders Section */}
          {completedOrders.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Pedidos Entregados ({completedOrders.length})
              </h2>
              <div className="grid gap-4">
                {completedOrders.slice(0, 5).map((order) => (
                  <Card key={order.id_venta} className="p-4 opacity-60">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">#{order.id_venta}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.usuarios?.nombre_usuario}
                        </p>
                      </div>
                      <Badge className="bg-gray-400 text-white">
                        Entregado
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pendingOrders.length === 0 && completedOrders.length === 0 && (
            <Card className="p-12 text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No hay pedidos registrados
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
