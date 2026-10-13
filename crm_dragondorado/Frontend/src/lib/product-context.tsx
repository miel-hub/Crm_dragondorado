import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// --- Interfaces ---
export interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion?: string;
  descripcion_corta?: string;
  tags_seo?: string;
  precio: number;
  stock: number;
  descuento: number;
  id_categoria: number;
}

interface ProductContextType {
  productos: Producto[];
  loading: boolean;
  error: string | null;
  refreshProductos: () => Promise<void>;
  getProductoById: (id: number) => Producto | undefined;
}

// --- Contexto ---
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// --- Provider ---
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar todos los productos
  const refreshProductos = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Producto[]>(
        "http://localhost:3000/api/productos",
        {
          withCredentials: true,
          headers: { "Cache-Control": "no-cache" },
        }
      );
      setProductos(res.data);
      setError(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error(
          "Error al traer productos:",
          err.response?.data || err.message
        );
        setError(
          err.response?.data?.message || "No se pudieron cargar los productos"
        );
      } else {
        console.error("Error desconocido al traer productos:", err);
        setError("Error desconocido al cargar productos");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshProductos();
  }, []);

  // Buscar producto por ID
  const getProductoById = (id: number): Producto | undefined =>
    productos.find((p) => p.id_producto === id);

  const value: ProductContextType = {
    productos,
    loading,
    error,
    refreshProductos,
    getProductoById,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

// --- Hook personalizado ---
export function useProductos() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductos debe usarse dentro de <ProductProvider>");
  }
  return context;
}
