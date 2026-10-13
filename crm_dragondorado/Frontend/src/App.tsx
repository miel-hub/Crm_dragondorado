import { Suspense, useState } from "react";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { UserProvider } from "@/lib/user-context";
import { VentaProvider } from "@/lib/venta-context";
import { ProductProvider } from "@/lib/product-context";
import { ToastProvider } from "@/components/ui/ToastProvider";
import DashboardIoT from "./DashboardIoT";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import IAChatbotWidget from "@/components/ia-chatbot-widget";

import ReactRouter from "@/router/ReactRouter";

function App() {
  const [verIoT, setVerIoT] = useState(false);

  if (verIoT) {
    return (
      <div>
        <button
          onClick={() => setVerIoT(false)}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 99999,
            padding: "12px 20px",
            backgroundColor: "#d4af37",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          ⬅️ Volver a la Web del Chifa
        </button>
        <DashboardIoT />
      </div>
    );
  }

  return (
    <UserProvider>
      <VentaProvider>
        <CartProvider>
          <ProductProvider>
            <ToastProvider>
              <Suspense fallback={<div>Cargando...</div>}>
                <div className="font-sans antialiased">
                  {/* BOTÓN FLOTANTE PARA ABRIR EL PANEL IoT DE MESAS INTELIGENTES */}
                  <button
                    onClick={() => setVerIoT(true)}
                    style={{
                      position: "fixed",
                      bottom: "20px",
                      left: "20px",
                      zIndex: 99999,
                      padding: "12px 20px",
                      backgroundColor: "#b91c1c",
                      color: "#fff",
                      border: "2px solid #d4af37",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
                    }}
                  >
                    📡 Monitoreo IoT / Mesas
                  </button>

                  <Header />
                  <ReactRouter />
                  <Footer />
                  <IAChatbotWidget />
                </div>
              </Suspense>
            </ToastProvider>
          </ProductProvider>
        </CartProvider>
      </VentaProvider>
    </UserProvider>
  );
}

export default App;