// Usar variable de entorno o fallback a localhost
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getUsuarioById(id_usuario: number) {
  try {
    const res = await fetch(`${BASE_URL}/usuarios/${id_usuario}`, {
      credentials: "include", // enviar cookie de sesión
      cache: "no-store", // evitar respuestas 304 en el navegador
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (res.status === 204) return null;
    if (res.status === 304) {
      try {
        const maybeBody = await res.json();
        return maybeBody;
      } catch (_e) {
        return null;
      }
    }

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al obtener usuario");
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Error en getUsuarioById:", err);
    throw err;
  }
}

export async function updateUsuario(id_usuario: number, data: any) {
  try {
    const res = await fetch(`${BASE_URL}/usuarios/${id_usuario}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al actualizar usuario");
    }
    return await res.json();
  } catch (err) {
    console.error("❌ Error en updateUsuario:", err);
    throw err;
  }
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
) {
  try {
    const res = await fetch(`${BASE_URL}/auth/change-password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    const data = await res.json();
    if (!res.ok)
      throw new Error(data.message || "Error al cambiar la contraseña");
    return data;
  } catch (err) {
    console.error("❌ Error en changePassword:", err);
    throw err;
  }
}

//Obtener todos los productos reales desde el backend ---
export async function getProductos() {
  try {
    const res = await fetch(`${BASE_URL}/productos`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al obtener productos");
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Error en getProductos:", err);
    throw err;
  }
}

export interface ChatbotResponse {
  id: number | null;
  respuesta: string;
  intencion: string;
  confianza: number;
  resuelta: boolean;
  fuente: string;
  datos?: unknown;
}

/** Envía una consulta al asistente y aprovecha la sesión si el cliente inició sesión. */
export async function enviarMensajeChatbot(mensaje: string): Promise<ChatbotResponse> {
  const res = await fetch(`${BASE_URL}/ia/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ mensaje, canal: "web" }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "No se pudo contactar al asistente");
  return data as ChatbotResponse;
}

export async function calificarRespuestaChatbot(id: number, util: boolean) {
  const res = await fetch(`${BASE_URL}/ia/conversation/${id}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ util }),
  });
  if (!res.ok) throw new Error("No se pudo guardar tu valoración");
  return res.json();
}

export async function enviarFeedbackCliente(data: {
  nombre: string;
  correo?: string;
  mensaje: string;
  nps?: number;
  canal?: string;
}) {
  const res = await fetch(`${BASE_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(result.message || "No se pudo enviar el feedback");
  return result;
}

export async function crearReserva(data: {
  nombre: string;
  correo?: string;
  telefono?: string;
  fecha_reserva: string;
  personas: number;
  salon?: string;
  notas?: string;
}) {
  const res = await fetch(`${BASE_URL}/reservas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  const result = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(result.message || "No se pudo registrar la reserva");
  return result;
}

// --- VENTAS ---
export async function getVentasByUsuario(id_usuario: number) {
  try {
    const res = await fetch(`${BASE_URL}/ventas/usuario/${id_usuario}`, {
      credentials: "include",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al obtener ventas");
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Error en getVentasByUsuario:", err);
    throw err;
  }
}

export async function getVentaById(id_venta: number) {
  try {
    const res = await fetch(`${BASE_URL}/ventas/${id_venta}`, {
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al obtener venta");
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Error en getVentaById:", err);
    throw err;
  }
}

export async function getVentas() {
  try {
    const res = await fetch(`${BASE_URL}/ventas`, {
    cache: "no-store"
    });

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al obtener las ventas");
    }
  return res.json();
  } catch (error) {
    console.error("Error en getVentas: ", error)
  }
}

export async function updateVentaEstado(id_venta: number, data: any) {
  try {
    const res = await fetch(`${BASE_URL}/ventas/${id_venta}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.text().catch(() => null);
      throw new Error(errorData || "Error al actualizar la venta");
    }

    return res.json();
  } catch (err) {
    console.error("❌ Error en updateVentaEstado:", err);
    throw err;
  }
}

/** Actualiza repartidor, teléfono, ETA y estado de un pedido delivery. */
export async function updateVentaDelivery(
  id_venta: number,
  data: {
    estado?: string;
    repartidor?: string;
    telefono_repartidor?: string;
    tiempo_estimado_min?: number | null;
  },
) {
  const res = await fetch(`${BASE_URL}/ventas/${id_venta}/delivery`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    cache: "no-store",
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || "Error al actualizar el delivery");
  return body;
}

export async function getSeguimientoPedido(usuarioId: number, idVenta?: number) {
  const query = idVenta ? `?id=${idVenta}` : "";
  const res = await fetch(`${BASE_URL}/ventas/usuario/${usuarioId}/seguimiento${query}`, {
    credentials: "include",
    cache: "no-store",
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || "No se pudo consultar el seguimiento");
  return body;
}

export default {
  getUsuarioById,
  updateUsuario,
  changePassword,
  getProductos,
  enviarMensajeChatbot,
  calificarRespuestaChatbot,
  enviarFeedbackCliente,
  crearReserva,
  getVentasByUsuario,
  getVentaById,
  getVentas,
  updateVentaEstado,
  updateVentaDelivery,
  getSeguimientoPedido,
}
