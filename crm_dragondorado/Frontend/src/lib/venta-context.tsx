import React, { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./user-context";
import type { Producto } from "./product-context";
import { getVentasByUsuario } from "./api";

// --- Interfaces ---
export interface DetalleVenta {
  id_detalleVenta: number;
  id_producto: number;
  cantidad: number;
  subtotal: number;
  productos: Producto;
}

export interface Venta {
  id_venta: number;
  id_usuario: number;
  fecha_venta: string;
  total: number;
  id_metodoPago: number;
  id_comprobante: number;
  estado: string;
  metodo_entrega?: string;
  direccion_entrega?: string | null;
  referencia_entrega?: string | null;
  repartidor?: string | null;
  telefono_repartidor?: string | null;
  tiempo_estimado_min?: number | null;
  entregado_en?: string | null;
  detalleventa: DetalleVenta[];
}

interface VentaContextType {
  ventas: Venta[];
  loading: boolean;
  error: string | null;
  refreshVentas: () => Promise<void>;
  getVentaById: (id: number) => Venta | undefined;
}

// --- Contexto ---
const VentaContext = createContext<VentaContextType | undefined>(undefined);

// --- Provider ---
export const VentaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshVentas = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getVentasByUsuario(user.id_usuario);
      setVentas(data);
      setError(null);
    } catch (err: any) {
      console.error("❌ Error al traer ventas:", err);
      setError(err.message || "No se pudieron cargar las ventas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) refreshVentas();
    else setVentas([]);
  }, [user]);

  const getVentaById = (id: number): Venta | undefined =>
    ventas.find((v) => v.id_venta === id);

  const value: VentaContextType = {
    ventas,
    loading,
    error,
    refreshVentas,
    getVentaById,
  };

  return (
    <VentaContext.Provider value={value}>{children}</VentaContext.Provider>
  );
};

// --- Hook personalizado ---
export function useVentas() {
  const context = useContext(VentaContext);
  if (!context) {
    throw new Error("useVentas debe usarse dentro de <VentaProvider>");
  }
  return context;
}
