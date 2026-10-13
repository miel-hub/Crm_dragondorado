"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const MAX_QUANTITY_PER_PRODUCT = 10

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        const newQuantity = existing.quantity + quantity
        if (newQuantity > MAX_QUANTITY_PER_PRODUCT) {
          toast({
            title: "Límite alcanzado",
            description: `Solo puedes agregar hasta ${MAX_QUANTITY_PER_PRODUCT} unidades de este producto`,
            variant: "destructive",
          })
          return prev
        }
        toast({
          title: "Producto agregado",
          description: `${item.name} se agregó al carrito`,
        })
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: newQuantity } : i))
      }
      if (quantity > MAX_QUANTITY_PER_PRODUCT) {
        toast({
          title: "Límite alcanzado",
          description: `Solo puedes agregar hasta ${MAX_QUANTITY_PER_PRODUCT} unidades de este producto`,
          variant: "destructive",
        })
        return [...prev, { ...item, quantity: MAX_QUANTITY_PER_PRODUCT }]
      }
      toast({
        title: "Producto agregado",
        description: `${item.name} se agregó al carrito`,
      })
      return [...prev, { ...item, quantity }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    if (quantity > MAX_QUANTITY_PER_PRODUCT) {
      toast({
        title: "Límite alcanzado",
        description: `Solo puedes agregar hasta ${MAX_QUANTITY_PER_PRODUCT} unidades de este producto`,
        variant: "destructive",
      })
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: MAX_QUANTITY_PER_PRODUCT } : i)))
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)))
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
