import { BASE_URL } from "./api";

export async function registrarAcceso(tipoAccesoId: number) {
  try {
    // Usamos 'fetch' y 'credentials: "include"' igual que en auth.ts
    const res = await fetch(`${BASE_URL}/accesoqr/registrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ tipoAccesoId }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al registrar métrica");
    }

    // No necesitamos devolver nada, solo que se registró
    return await res.json();

  } catch (error) {
    // Silenciamos el error en consola para no molestar al usuario,
    // ya que esta es una tarea de fondo.
    console.error("Error de métrica (silenciado):", error);
  }
}