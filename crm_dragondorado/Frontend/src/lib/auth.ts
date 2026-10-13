import { BASE_URL } from "./api";
import { saveUserSession, clearUserSession } from "./cookieManager";

export async function login(correo_usuario: string, clave_usuario: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
    credentials: "include",
    cache: "no-store",
    body: JSON.stringify({ correo_usuario, clave_usuario }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

  // Guardar en cookies y localStorage
  if (data.usuario) {
    saveUserSession(data.usuario);
  }

  return data;
}

export async function register(
  nombre_usuario: string,
  correo_usuario: string,
  clave_usuario: string
) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre_usuario, correo_usuario, clave_usuario }),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al registrarse");

  // Guardar en cookies y localStorage
  if (data.usuario) {
    saveUserSession(data.usuario);
  }

  return data;
}

export async function checkSession() {
  const res = await fetch(`${BASE_URL}/auth/check-session`, {
    credentials: "include",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.usuario;
}

export async function logout() {
  await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
  
  // Limpiar cookies y localStorage
  clearUserSession();
}
