import { useState } from "react";
import type { ReactNode } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useUser } from "@/lib/user-context";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function CartSheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { user } = useUser();

  const discount = user
    ? user.tier === "gold"
      ? 0.15
      : user.tier === "silver"
      ? 0.1
      : 0.05
    : 0;
  const discountAmount = total * discount;
  const finalTotal = total - discountAmount;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="h-7 w-7" />
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="h-20 w-20 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Agrega productos para comenzar tu pedido
            </p>
            <Button asChild onClick={() => setOpen(false)}>
              <Link to="/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-5 w-5" />
                          </Button>
                          <span className="text-base font-medium w-10 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-base">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 text-destructive hover:bg-destructive/10"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col gap-4">
              <Separator />

              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">S/ {finalTotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <p className="text-right text-xs text-emerald-700">Descuento fidelidad: -S/ {discountAmount.toFixed(2)}</p>
                )}
              </div>

              <div className="w-full flex gap-2">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="flex-1 bg-transparent"
                >
                  Vaciar
                </Button>
                <Button
                  asChild
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <Link to="/checkout">Pagar</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
