'use client'

import React, { createContext, useContext, useState, useCallback, useRef } from 'react'

interface ToastMessage {
  id: number
  title: string
  description?: string
  type?: 'default' | 'success' | 'error'
}

interface ToastContextType {
  addToast: (
    title: string,
    description?: string,
    type?: 'default' | 'success' | 'error'
  ) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const addToast = useCallback(
    (
      title: string,
      description?: string,
      type: 'default' | 'success' | 'error' = 'default'
    ) => {
      // 🔹 Cancelamos cualquier timeout activo
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)

      // 🔹 Ocultamos el toast actual antes de mostrar el nuevo
      setToast(null)

      // 🔹 Mostramos el nuevo toast con un pequeño retardo
      timeoutRef.current = setTimeout(() => {
        const newToast: ToastMessage = {
          id: Date.now(),
          title,
          description,
          type,
        }
        setToast(newToast)

        // 🔹 Cerramos el toast después de 4s
        hideTimeoutRef.current = setTimeout(() => {
          setToast(null)
        }, 4000)
      }, 150)
    },
    []
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toast && (
        <div className="fixed top-20 right-6 z-50 animate-fadeInDown">
          <div
            className={`rounded-xl shadow-2xl p-5 border-2 text-base transition-all duration-300 bg-white min-w-[320px] max-w-[420px]
              ${
                toast.type === 'success'
                  ? 'border-green-500'
                  : toast.type === 'error'
                  ? 'border-red-500'
                  : 'border-gray-300'
              }
            `}
          >
            <p
              className={`font-bold mb-2 text-lg ${
                toast.type === 'success'
                  ? 'text-green-600'
                  : toast.type === 'error'
                  ? 'text-red-600'
                  : 'text-gray-800'
              }`}
            >
              {toast.title}
            </p>
            {toast.description && (
              <p className="text-gray-700 text-sm leading-relaxed">{toast.description}</p>
            )}
          </div>
        </div>
      )}

      {/* Animación */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.25s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast debe usarse dentro de ToastProvider')
  return context
}
