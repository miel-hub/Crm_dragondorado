import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { useUser } from "@/lib/user-context";
import { useToast } from "@/components/ui/ToastProvider";
import {
  CreditCard,
  MapPin,
  ShoppingBag,
  CheckCircle2,
  Loader2,
  Truck,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/lib/api";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user, isAuthenticated } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mercadopago">("mercadopago");
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery" | "dine-in">("pickup");
  const { addToast } = useToast();
  const [loadingMercadoPago, setLoadingMercadoPago] = useState(false);

  // Ticket
  const [ticketCode, setTicketCode] = useState("");
  const [ticketVerified, setTicketVerified] = useState(false);
  const [ticketDiscount, setTicketDiscount] = useState(0);
  const [ticketUsado, setTicketUsado] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.nombre_usuario || "",
    email: user?.correo_usuario || "",
    phone: user?.telefono_usuario || "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
    deliveryAddress: user?.direccion_usuario || "",
    deliveryReference: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.nombre_usuario || "",
        email: user.correo_usuario || "",
        phone: user.telefono_usuario || "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        cardName: "",
        deliveryAddress: user.direccion_usuario || "",
        deliveryReference: "",
      });
    }
  }, [user]);

  // Calcular total con descuento
  const finalTotal = ticketUsado
    ? Math.max(0, total - total * (ticketDiscount / 100))
    : total;

  // 🔍 Verificar ticket
  const handleVerifyTicket = async () => {
    if (!ticketCode.trim()) {
      addToast("Código requerido", "Por favor ingresa un código de ticket.", "error");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/tickets/codigo/${ticketCode}`, {
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Ticket no encontrado");

      const data = await res.json();
      const ticket = data.ticket;

      if (!ticket) {
        addToast("Ticket no encontrado", "El código ingresado no existe.", "error");
        return;
      }

      if (ticket.usado) {
        addToast("Ticket usado", "Este ticket ya ha sido utilizado.", "error");
        return;
      }

      if (ticket.fecha_vencimiento && new Date(ticket.fecha_vencimiento) < new Date()) {
        addToast("Ticket expirado", "El ticket ya no es válido.", "error");
        return;
      }

      setTicketVerified(true);
      setTicketDiscount(ticket.descuento);

    } catch (err) {
      console.error("❌ Error al verificar ticket:", err);
      addToast("Error de verificación", "No se pudo verificar el ticket.", "error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 💳 Procesar pago con Mercado Pago
  const handleMercadoPagoCheckout = async () => {
    console.log('🚀 Iniciando proceso de Mercado Pago...');
    
    if (!user) {
      console.error('❌ Usuario no autenticado');
      addToast("Sesión requerida", "Debes iniciar sesión para pagar.", "error");
      return;
    }

    console.log('✓ Usuario autenticado:', user.correo_usuario);
    setLoadingMercadoPago(true);
    setIsProcessing(true);

    try {
      // 1️⃣ PRIMERO: Registrar la venta como "pendiente" en la base de datos
      console.log('📝 Registrando venta pendiente en la base de datos...');
      const ventaData = {
        id_usuario: user.id_usuario,
        fecha_venta: new Date().toISOString(),
        total: finalTotal,
        id_metodoPago: 2, // Mercado Pago
        id_comprobante: 1,
        metodo_entrega: deliveryMethod,
        direccion_entrega: deliveryMethod === "delivery" ? formData.deliveryAddress.trim() : null,
        referencia_entrega: deliveryMethod === "delivery" ? formData.deliveryReference.trim() || null : null,
        estado: "por confirmar",
      };

      const ventaRes = await fetch(`${BASE_URL}/ventas`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ventaData),
      });

      if (!ventaRes.ok) throw new Error("Error al crear la venta");
      const venta = await ventaRes.json();
      const idVenta = venta.venta?.id_venta;

      console.log('✅ Venta registrada con ID:', idVenta);

      // 2️⃣ Crear detalle de venta
      for (const item of items) {
        await fetch(`${BASE_URL}/detalleventas`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_venta: idVenta,
            id_producto: item.id,
            cantidad: item.quantity,
            subtotal: item.price * item.quantity,
          }),
        });
      }

      console.log('✅ Detalles de venta registrados');

      // 3️⃣ Si se usó ticket, marcarlo como usado
      if (ticketVerified && !ticketUsado) {
        await fetch(`${BASE_URL}/tickets/usar/${ticketCode}`, {
          method: "PATCH",
          credentials: "include",
        });
        console.log('✅ Ticket marcado como usado');
      }

      // 4️⃣ AHORA: Preparar items para Mercado Pago con nombres detallados
      const mpItems = items.map(item => ({
        id: item.id.toString(),
        title: `${item.name}`, // Nombre completo del producto
        description: `${item.category || 'Producto'} - Cantidad: ${item.quantity}`, // Categoría y cantidad
        quantity: item.quantity,
        unit_price: item.price
      }));

      console.log('📦 Items preparados:', mpItems);

      const payerData = {
        name: formData.name,
        email: formData.email,
        ...(formData.phone && formData.phone.trim() !== '' && { phone: formData.phone })
      };

      console.log('👤 Datos del pagador:', payerData);

      const requestBody = {
        items: mpItems,
        payer: payerData,
        external_reference: `VENTA_${idVenta}_USER_${user.id_usuario}` // Incluir ID de venta
      };

      console.log('📤 Enviando request a:', `${BASE_URL}/mercadopago/create-preference`);
      console.log('📤 Body completo:', JSON.stringify(requestBody, null, 2));

      // Crear preferencia de pago
      const response = await fetch(`${BASE_URL}/mercadopago/create-preference`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      console.log('📥 Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ Error del servidor:', errorData);
        throw new Error(errorData.message || 'Error al crear preferencia de pago');
      }

      const data = await response.json();
      console.log('✅ Respuesta exitosa:', data);

      if (!data.success || !data.init_point) {
        console.error('❌ Respuesta sin init_point:', data);
        throw new Error('No se recibió el link de pago');
      }

      console.log('🔗 Redirigiendo a:', data.init_point);
      
      // Limpiar el carrito ANTES de redirigir
      clearCart();
      console.log('🛒 Carrito limpiado');
      
      // Redirigir a Mercado Pago
      window.location.href = data.init_point;
    } catch (error) {
      console.error('Error en Mercado Pago:', error);
      addToast(
        "Error de pago", 
        "No se pudo procesar el pago. Intenta nuevamente.", 
        "error"
      );
      setIsProcessing(false);
      setLoadingMercadoPago(false);
    }
  };

  // 🧾 Confirmar compra
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      addToast("Sesión requerida", "Debes iniciar sesión para completar tu compra.", "error");
      return;
    }

    if (deliveryMethod === "delivery" && !formData.deliveryAddress.trim()) {
      addToast("Dirección requerida", "Escribe la dirección donde entregaremos tu pedido.", "error");
      return;
    }

    // Si es consumo en local (dine-in), NO redirigir a pago
    if (deliveryMethod === "dine-in") {
      await handleDineInOrder();
      return;
    }

    // Si es Mercado Pago, redirigir a la pasarela
    if (paymentMethod === "mercadopago") {
      await handleMercadoPagoCheckout();
      return;
    }

    setIsProcessing(true);

    try {
      // 1️⃣ Crear venta
      const ventaData = {
        id_usuario: user.id_usuario,
        fecha_venta: new Date().toISOString(),
        total: finalTotal,
        id_metodoPago: 1,
        id_comprobante: 1,
        metodo_entrega: deliveryMethod,
        direccion_entrega: deliveryMethod === "delivery" ? formData.deliveryAddress.trim() : null,
        referencia_entrega: deliveryMethod === "delivery" ? formData.deliveryReference.trim() || null : null,
        estado: "por confirmar",
      };

      const ventaRes = await fetch(`${BASE_URL}/ventas`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ventaData),
      });

      if (!ventaRes.ok) throw new Error("Error al crear la venta");
      const venta = await ventaRes.json();
      const idVenta = venta.venta?.id_venta;

      // 2️⃣ Crear detalle de venta
      for (const item of items) {
        await fetch(`${BASE_URL}/detalleventas`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_venta: idVenta,
            id_producto: item.id,
            cantidad: item.quantity,
            subtotal: item.price * item.quantity,
          }),
        });
      }

      // 3️⃣ Si se usó ticket, marcarlo como usado
      if (ticketVerified && ticketUsado) {
        await fetch(`${BASE_URL}/tickets/usar/${ticketCode}`, {
          method: "PUT",
          credentials: "include",
        });
      }

      setOrderComplete(true);
      clearCart();
    } catch (err) {
      console.error("❌ Error al procesar la venta:", err);
      addToast("Error al procesar el pedido", "Hubo un problema al registrar tu compra.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  // 🍽️ Crear pedido para consumir en el local (sin pago previo)
  const handleDineInOrder = async () => {
    if (!user) {
      addToast("Inicia sesión", "Necesitas iniciar sesión para registrar el pedido.", "error");
      return;
    }
    setIsProcessing(true);

    try {
      // 1️⃣ Crear venta con método de pago "efectivo" o "por pagar"
      const ventaData = {
        id_usuario: user.id_usuario,
        fecha_venta: new Date().toISOString(),
        total: finalTotal,
        id_metodoPago: 1, // Efectivo (se pagará en caja)
        id_comprobante: 1,
        metodo_entrega: "dine-in",
        estado: "por confirmar" // Estado inicial
      };

      const ventaRes = await fetch(`${BASE_URL}/ventas`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ventaData),
      });

      if (!ventaRes.ok) throw new Error("Error al crear el pedido");
      const venta = await ventaRes.json();
      const idVenta = venta.venta?.id_venta;

      console.log('✅ Pedido para consumir en local creado:', idVenta);

      // 2️⃣ Crear detalle de venta
      for (const item of items) {
        await fetch(`${BASE_URL}/detalleventas`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_venta: idVenta,
            id_producto: item.id,
            cantidad: item.quantity,
            subtotal: item.price * item.quantity,
          }),
        });
      }

      console.log('✅ Detalles del pedido creados');

      // 3️⃣ Si se usó ticket, marcarlo como usado
      if (ticketVerified && ticketUsado) {
        await fetch(`${BASE_URL}/tickets/usar/${ticketCode}`, {
          method: "PUT",
          credentials: "include",
        });
      }

      // Mostrar mensaje de éxito
      addToast(
        "¡Pedido Generado! 🎉",
        "Tu pedido ha sido enviado a la cocina. Paga en caja cuando termines.",
        "success"
      );

      setOrderComplete(true);
      clearCart();
    } catch (err) {
      console.error("❌ Error al generar el pedido:", err);
      addToast("Error al generar pedido", "Hubo un problema al crear tu pedido.", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  // 🛒 Si carrito vacío
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">
              Agrega productos para continuar con tu compra
            </p>
            <Button asChild>
              <Link to="/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // ✅ Si compra completada
  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center bg-background">
          <Card className="max-w-md w-full mx-4 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pedido Confirmado</h2>
            <p className="text-muted-foreground mb-6">
              Tu pedido ha sido procesado exitosamente. Recibirás un correo de
              confirmación pronto.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/catalogo">Seguir Comprando</Link>
              </Button>
              {isAuthenticated && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <Link to="/dashboard/pedidos">Ver Mis Pedidos</Link>
                </Button>
              )}
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold">
              Finalizar Compra
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Columna izquierda */}
              <div className="lg:col-span-2 space-y-6">
                {/* Ticket */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      🎟️
                    </div>
                    <h2 className="text-xl font-bold">Ticket de Descuento</h2>
                  </div>
                  <div className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Label htmlFor="ticket">Código del Ticket</Label>
                      <Input
                        id="ticket"
                        value={ticketCode}
                        onChange={(e) => setTicketCode(e.target.value)}
                        placeholder="Ingresa tu código"
                        className="mt-1"
                      />
                    </div>
                    <Button type="button" onClick={handleVerifyTicket}>
                      Verificar
                    </Button>
                  </div>

                  {ticketVerified && (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-600 w-5 h-5" />
                        <p>
                          <span className="font-semibold text-green-700">
                            Ticket válido:
                          </span>{" "}
                          {ticketDiscount}% de descuento
                        </p>
                      </div>

                      <Button
                        type="button"
                        onClick={() => setTicketUsado(!ticketUsado)}
                        className={`transition-all ${
                          ticketUsado
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-white border border-green-400 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        {ticketUsado
                          ? "Ticket aplicado (Quitar)"
                          : "Usar Ticket"}
                      </Button>
                    </div>
                  )}
                </Card>
                {/* Contact Information */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                    <h2 className="text-xl font-bold">
                      Información de Contacto
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Teléfono (Opcional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone ?? ""}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+51 999 999 999"
                      />
                    </div>
                  </div>
                </Card>

                {/* Delivery Method */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                    <h2 className="text-xl font-bold">Método de Entrega</h2>
                  </div>
                  <RadioGroup
                    value={deliveryMethod}
                    onValueChange={(value: "pickup" | "delivery" | "dine-in") =>
                      setDeliveryMethod(value)
                    }
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {/* Card Recoger en Tienda */}
                    <Label
                      htmlFor="pickup"
                      className={`relative cursor-pointer transition-all duration-200 ${
                        deliveryMethod === "pickup"
                          ? "ring-2 ring-primary ring-offset-2 scale-[1.02]"
                          : "hover:scale-[1.01] hover:shadow-md"
                      }`}
                    >
                      <Card className={`p-6 border-2 ${
                        deliveryMethod === "pickup"
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <RadioGroupItem value="pickup" id="pickup" className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              <div className="p-3 rounded-lg bg-primary/10">
                                <MapPin className="h-7 w-7 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="text-lg font-bold mb-1">Recoger en Tienda</p>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Lima, Perú - Gratis
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  💳 Paga ahora y recoge tu pedido cuando esté listo
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Label>

                    {/* Card Delivery a domicilio */}
                    <Label
                      htmlFor="delivery"
                      className={`relative cursor-pointer transition-all duration-200 ${
                        deliveryMethod === "delivery"
                          ? "ring-2 ring-primary ring-offset-2 scale-[1.02]"
                          : "hover:scale-[1.01] hover:shadow-md"
                      }`}
                    >
                      <Card className={`p-6 border-2 ${
                        deliveryMethod === "delivery"
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <RadioGroupItem value="delivery" id="delivery" className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              <div className="p-3 rounded-lg bg-primary/10">
                                <Truck className="h-7 w-7 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="text-lg font-bold mb-1">Delivery a Domicilio</p>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Lima Cercado · 30–40 minutos aprox.
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  🛵 Consulta el estado de tu reparto desde el chatbot
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Label>

                    {/* Card Consumir en el Local */}
                    <Label
                      htmlFor="dine-in"
                      className={`relative cursor-pointer transition-all duration-200 ${
                        deliveryMethod === "dine-in"
                          ? "ring-2 ring-primary ring-offset-2 scale-[1.02]"
                          : "hover:scale-[1.01] hover:shadow-md"
                      }`}
                    >
                      <Card className={`p-6 border-2 ${
                        deliveryMethod === "dine-in"
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <RadioGroupItem value="dine-in" id="dine-in" className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              <div className="p-3 rounded-lg bg-primary/10">
                                <div className="h-7 w-7 text-3xl flex items-center justify-center">🍽️</div>
                              </div>
                              <div className="flex-1">
                                <p className="text-lg font-bold mb-1">Consumir en el Local</p>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Disfruta en nuestro restaurante chifa
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  📝 Genera tu pedido y paga en caja al finalizar
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Label>
                  </RadioGroup>
                </Card>

                {deliveryMethod === "delivery" && (
                  <Card className="p-6 mt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold">Datos de entrega</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="deliveryAddress">Dirección de entrega *</Label>
                        <Input
                          id="deliveryAddress"
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleInputChange}
                          placeholder="Av., calle, número y distrito"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryReference">Referencia (opcional)</Label>
                        <Input
                          id="deliveryReference"
                          name="deliveryReference"
                          value={formData.deliveryReference}
                          onChange={handleInputChange}
                          placeholder="Edificio, puerta, color o referencia"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </Card>
                )}

                {/* Payment Method - Solo mostrar si NO es dine-in */}
                {deliveryMethod !== "dine-in" && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                    <h2 className="text-xl font-bold">Método de Pago</h2>
                  </div>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value: "card" | "mercadopago") =>
                      setPaymentMethod(value)
                    }
                  >
                    <div className="flex items-center space-x-3 border border-border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-semibold">
                              Tarjeta de Crédito/Débito
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Pago directo con tarjeta
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border-2 border-blue-500 bg-blue-50/50 rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="mercadopago" id="mercadopago" />
                      <Label htmlFor="mercadopago" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <img 
                              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadopago/logo__large@2x.png" 
                              alt="Mercado Pago" 
                              className="h-6"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-blue-700">
                              Mercado Pago
                            </p>
                            <p className="text-sm text-blue-600">
                              Tarjetas, Yape, Plin, transferencias y más
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required={paymentMethod === "card"}
                          className="mt-1"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <Label htmlFor="cardExpiry">
                            Fecha de Expiración *
                          </Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required={paymentMethod === "card"}
                            className="mt-1"
                            placeholder="MM/AA"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc">CVC *</Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            required={paymentMethod === "card"}
                            className="mt-1"
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Nombre en la Tarjeta *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required={paymentMethod === "card"}
                          className="mt-1"
                          placeholder="Como aparece en la tarjeta"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "mercadopago" && (
                    <div className="mt-6 bg-blue-50 border-2 border-blue-200 p-5 rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">ℹ️</span>
                        </div>
                        <div>
                          <p className="font-bold text-blue-900 mb-2">
                            Métodos de Pago Disponibles
                          </p>
                          <ul className="text-sm text-blue-800 space-y-1.5">
                            <li className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <strong>Yape</strong> - Pago instantáneo con código de aprobación
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <strong>Plin</strong> - Transferencia móvil
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <strong>Tarjetas</strong> - Visa, Mastercard, American Express
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <strong>Transferencia Bancaria</strong>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <strong>Efectivo</strong> - PagoEfectivo, Western Union
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200 mt-3">
                        <p className="text-xs text-blue-700">
                          <strong>Nota:</strong> Serás redirigido a la pasarela segura de Mercado Pago 
                          donde podrás elegir tu método de pago preferido.
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
                )}
              </div>

              {/* Columna derecha - Resumen */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-3 bg-muted/30 rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-base mb-1 leading-tight">
                            {item.name}
                          </p>
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.category}
                          </p>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-muted-foreground">
                              Cantidad: <span className="font-semibold text-foreground">{item.quantity}</span>
                            </p>
                            <p className="text-base font-bold text-primary">
                              S/ {(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3 text-base">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">Subtotal</span>
                      <span className="font-semibold">S/ {total.toFixed(2)}</span>
                    </div>
                    {ticketUsado && (
                      <div className="flex justify-between text-green-600">
                        <span className="font-medium">Descuento ({ticketDiscount}%)</span>
                        <span className="font-semibold">
                          - S/ {(total * (ticketDiscount / 100)).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-between text-2xl font-bold mb-8">
                    <span>Total</span>
                    <span className="text-primary">
                      S/ {finalTotal.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing || loadingMercadoPago}
                    size="lg"
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {loadingMercadoPago && (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    )}
                    {loadingMercadoPago 
                      ? "Redirigiendo a Mercado Pago..." 
                      : isProcessing 
                      ? "Procesando..." 
                      : deliveryMethod === "dine-in"
                      ? "📝 Generar Pedido"
                      : paymentMethod === "mercadopago"
                      ? "💳 Pagar con Mercado Pago"
                      : "💳 Confirmar y Pagar"}
                  </Button>
                  
                  {deliveryMethod === "dine-in" && (
                    <p className="text-sm text-center text-muted-foreground mt-3">
                      🔔 Tu pedido se enviará a la cocina. Pagarás en caja al finalizar.
                    </p>
                  )}
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
