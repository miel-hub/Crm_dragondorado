import type { ReactNode } from 'react'

type ThemeProviderProps = { children: ReactNode }

// El CRM usa clases CSS propias; este proveedor mantiene una API compatible
// sin añadir una dependencia de Next.js a la aplicación Vite.
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>
}
