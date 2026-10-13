import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@/lib/user-context";
import { hasValidSession } from "@/lib/cookieManager";

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
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

  // Verificar autenticación
  const isAuthenticated = user !== null || hasValidSession();

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Verificar si el usuario es administrador (rol_usuario === 1)
  if (user?.rol_usuario !== 1) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso Denegado</h1>
          <p className="text-muted-foreground mb-6">
            No tienes permisos para acceder a esta sección. Solo administradores.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
