import React, { createContext, useContext, useState, useEffect } from "react";
import {
  login as apiLogin,
  register as apiRegister,
  checkSession,
  logout as apiLogout,
} from "./auth";
import { getUsuarioById } from "./api";
import { getUserSession, saveUserSession } from "./cookieManager";

export interface User {
  id_usuario: number;
  rol_usuario: number;
  nombre_usuario: string;
  correo_usuario: string;
  telefono_usuario?: string | null;
  direccion_usuario?: string | null;
  fecha_registro: string;
  contador_bubbleTea: number;
  regalo_bubbleTea: number;
  totalPedidos?: number;
  score?: number;
  tier?: "gold" | "silver" | "bronze" | string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        // Primero intentar recuperar desde cookies
        const cachedUser = getUserSession();
        if (cachedUser && typeof cachedUser === 'object' && 'id_usuario' in cachedUser) {
          setUser(cachedUser as User);
          setLoading(false);
          
          // Validar con el backend en segundo plano
          checkSession()
            .then(async (existingUser) => {
              if (existingUser) {
                const fullUser = await getUsuarioById(existingUser.id_usuario);
                if (fullUser) {
                  setUser(fullUser);
                  saveUserSession(fullUser);
                }
              }
            })
            .catch(console.error);
          
          return;
        }
        
        // Si no hay en cookies, verificar sesión en servidor
        const existingUser = await checkSession();
        if (existingUser) {
          const fullUser = await getUsuarioById(existingUser.id_usuario);
          const userData = fullUser ?? existingUser;
          setUser(userData);
          saveUserSession(userData);
        }
      } catch (error) {
        console.error("Error verificando sesión:", error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    const data = await apiLogin(email, password);
    if (data && data.usuario) {
      const fullUser = await getUsuarioById(data.usuario.id_usuario);
      const userData = fullUser ?? data.usuario;
      setUser(userData);
      saveUserSession(userData);
      return userData;
    } else {
      throw new Error("Error al iniciar sesión");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await apiRegister(name, email, password);
    if (data && data.usuario) {
      const fullUser = await getUsuarioById(data.usuario.id_usuario);
      const userData = fullUser ?? data.usuario;
      setUser(userData);
      saveUserSession(userData);
    } else {
      throw new Error("Error al registrar usuario");
    }
  };

  const logout = () => {
    apiLogout();
    setUser(null);
  };

  const refreshUser = async () => {
    try {
      if (user?.id_usuario) {
        const fullUser = await getUsuarioById(user.id_usuario);
        if (fullUser) setUser(fullUser);
      } else {
        const existingUser = await checkSession();
        if (existingUser) {
          const fullUser = await getUsuarioById(existingUser.id_usuario);
          setUser(fullUser ?? existingUser);
        }
      }
    } catch (error) {
      console.error("Error actualizando usuario:", error);
    }
  };

  const value: UserContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
    refreshUser,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de <UserProvider>");
  }
  return context;
}
