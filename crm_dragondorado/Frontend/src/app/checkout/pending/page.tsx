import { Link, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function CheckoutPendingPage() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full mx-4 p-8 text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="h-10 w-10 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-yellow-700">
          Pago Pendiente
        </h2>
        <p className="text-muted-foreground mb-6">
          Tu pago está siendo procesado. Te notificaremos por correo cuando se
          confirme la transacción.
        </p>

        {paymentId && (
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 text-sm">
            <p className="text-muted-foreground">
              <strong>ID de Pago:</strong> {paymentId}
            </p>
            <p className="text-yellow-700 mt-2 text-xs">
              Guarda este número para consultas
            </p>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 text-sm text-left">
          <p className="font-semibold text-blue-800 mb-2">
            ¿Por qué está pendiente?
          </p>
          <ul className="text-blue-700 space-y-1 list-disc list-inside text-xs">
            <li>Pago en efectivo pendiente de depósito</li>
            <li>Transferencia bancaria en proceso</li>
            <li>Verificación de seguridad en curso</li>
          </ul>
        </div>

        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link to="/dashboard/pedidos">Ver Mis Pedidos</Link>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link to="/catalogo">Volver al Catálogo</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
