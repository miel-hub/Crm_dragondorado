/**
 * Utilidades para manejo de cookies en el cliente
 */

/**
 * Establece una cookie
 */
export const setCookie = (name: string, value: string, days: number = 7) => {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    
    const cookieOptions = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${expires.toUTCString()}`,
      'path=/',
      'SameSite=Strict'
    ];
    
    // Solo agregar Secure en producción (HTTPS)
    if (window.location.protocol === 'https:') {
      cookieOptions.push('Secure');
    }
    
    document.cookie = cookieOptions.join('; ');
    return true;
  } catch (error) {
    console.error('Error al establecer cookie:', error);
    return false;
  }
};

/**
 * Obtiene el valor de una cookie
 */
export const getCookie = (name: string): string | null => {
  try {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  } catch (error) {
    console.error('Error al leer cookie:', error);
    return null;
  }
};

/**
 * Elimina una cookie
 */
export const deleteCookie = (name: string) => {
  try {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
    return true;
  } catch (error) {
    console.error('Error al eliminar cookie:', error);
    return false;
  }
};

/**
 * Verifica si una cookie existe
 */
export const hasCookie = (name: string): boolean => {
  return getCookie(name) !== null;
};

/**
 * Guarda el usuario en cookies y localStorage
 */
export const saveUserSession = (user: unknown) => {
  try {
    const userData = JSON.stringify(user);
    setCookie('user', userData, 7);
    localStorage.setItem('usuario', userData);
    return true;
  } catch (error) {
    console.error('Error al guardar sesión:', error);
    return false;
  }
};

/**
 * Recupera el usuario desde cookies o localStorage
 */
export const getUserSession = (): unknown | null => {
  try {
    // Primero intentar desde cookies
    const cookieData = getCookie('user');
    if (cookieData) {
      return JSON.parse(cookieData);
    }
    
    // Fallback a localStorage
    const localData = localStorage.getItem('usuario');
    if (localData) {
      const user = JSON.parse(localData);
      // Sincronizar con cookies
      saveUserSession(user);
      return user;
    }
    
    return null;
  } catch (error) {
    console.error('Error al recuperar sesión:', error);
    return null;
  }
};

/**
 * Limpia toda la sesión del usuario
 */
export const clearUserSession = () => {
  try {
    deleteCookie('user');
    localStorage.removeItem('usuario');
    return true;
  } catch (error) {
    console.error('Error al limpiar sesión:', error);
    return false;
  }
};

/**
 * Verifica si existe una sesión válida
 */
export const hasValidSession = (): boolean => {
  const user = getUserSession();
  return user !== null && typeof user === 'object' && 'id_usuario' in user;
};
