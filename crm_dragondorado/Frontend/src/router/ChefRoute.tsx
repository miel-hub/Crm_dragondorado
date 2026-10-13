import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@/lib/user-context";
import { hasValidSession } from "@/lib/cookieManager";

export const ChefRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  // Mostrar indicador de carga mientras se verifica la sesión
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Verificar tanto el contexto como las cookies
  const isAuthenticated = user !== null || hasValidSession();

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Si está autenticado pero NO es cocinero (rol_usuario !== 3), redirigir al home
  if (user && user.rol_usuario !== 3) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
