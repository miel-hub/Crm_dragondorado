import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useVentas } from "@/lib/venta-context";

export default function CheckoutSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const paymentId = searchParams.get("payment_id");
  const externalReference = searchParams.get("external_reference");
  const { refreshVentas } = useVentas();

  useEffect(() => {
    // Simular verificación del pago y recargar pedidos
    const timer = setTimeout(async () => {
      // Recargar los pedidos del usuario
      await refreshVentas();
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [refreshVentas]);

  const handleGoToOrders = () => {
    // Navegar a pedidos con recarga forzada
    navigate("/dashboard/pedidos", { state: { reload: true } });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4 p-8 text-center">
          <Loader2 className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
          <h2 className="text-2xl font-bold mb-2">Verificando pago...</h2>
          <p className="text-muted-foreground">
            Por favor espera mientras confirmamos tu transacción
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full mx-4 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-green-700">
          ¡Pago Exitoso!
        </h2>
        <p className="text-muted-foreground mb-6">
          Tu pago ha sido procesado correctamente. Recibirás un correo de
          confirmación con los detalles de tu pedido.
        </p>

        {paymentId && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
            <p className="text-muted-foreground">
              <strong>ID de Pago:</strong> {paymentId}
            </p>
            {externalReference && (
              <p className="text-muted-foreground mt-1">
                <strong>Referencia:</strong> {externalReference}
              </p>
            )}
          </div>
        )}

        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link to="/catalogo">Seguir Comprando</Link>
          </Button>
          <Button 
            onClick={handleGoToOrders}
            variant="outline" 
            className="w-full bg-transparent"
          >
            Ver Mis Pedidos
          </Button>
        </div>
      </Card>
    </div>
  );
}
