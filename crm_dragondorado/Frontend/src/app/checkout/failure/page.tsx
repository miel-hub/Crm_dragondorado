import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function CheckoutFailurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full mx-4 p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <XCircle className="h-10 w-10 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-red-700">
          Pago Rechazado
        </h2>
        <p className="text-muted-foreground mb-6">
          Hubo un problema al procesar tu pago. Por favor, verifica tus datos e
          intenta nuevamente.
        </p>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 text-sm text-left">
          <p className="font-semibold text-red-800 mb-2">
            Posibles causas:
          </p>
          <ul className="text-red-700 space-y-1 list-disc list-inside">
            <li>Fondos insuficientes</li>
            <li>Datos de pago incorrectos</li>
            <li>Transacción cancelada</li>
            <li>Límite de compra excedido</li>
          </ul>
        </div>

        <div className="space-y-2">
          <Button asChild className="w-full bg-primary">
            <Link to="/checkout">Intentar Nuevamente</Link>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link to="/catalogo">Volver al Catálogo</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
