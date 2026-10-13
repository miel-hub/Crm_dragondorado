import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PrivateRoute } from "@/router/PrivateRoute";
import { ChefRoute } from "@/router/ChefRoute";
import { ClientRoute } from "@/router/ClientRoute";
import { AdminRoute } from "@/router/AdminRoute";

// Páginas principales
import Catalogo from "@/app/catalogo/page";
import Contacto from "@/app/contacto/page";
import Dashboard from "@/app/dashboard/page";
import Login from "@/app/login/page";
import PasswordReset from "@/app/password-reset/page"
import Producto from "@/app/producto/[id]/page";
import Register from "@/app/register/page";
import Home from "@/app/page";
import Nosotros from "@/app/nosotros/page";
import Checkout from "@/app/checkout/page";
import CheckoutSuccess from "@/app/checkout/success/page";
import CheckoutFailure from "@/app/checkout/failure/page";
import CheckoutPending from "@/app/checkout/pending/page";
import Juego from "@/app/juego/page";
import LibroReclamaciones from "@/app/libro-reclamaciones/page";

// Subrutas del Dashboard
import Pagos from "@/app/dashboard/pagos/page";
import Pedidos from "@/app/dashboard/pedidos/page";
import Perfil from "@/app/dashboard/perfil/page";
import Puntos from "@/app/dashboard/puntos/page";
import Contrasena from "@/app/dashboard/contrasena/page";
import Tickets from "@/app/dashboard/tickets/page";

// Dashboard Admin
import DashboardAdmin from "@/app/dashboard/admin/page";
import DashboardIA from "@/app/dashboard/admin/ia/page";

// Cocinero
import Cocinero from "@/app/cocinero/page"

export default function ReactRouter() {
  return (
    <>
      <main className="min-h-screen">
        <ScrollToTop />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/catalogo"element={<Catalogo />} />
          <Route path="/catalogo/:tipoAcceso" element={<Catalogo />} />
          
          <Route path="/catalogo/producto/:id" element={<Producto />} />
          <Route path="/catalogo/:tipoAcceso/producto/:id" element={<Producto />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/failure" element={<CheckoutFailure />} />
          <Route path="/checkout/pending" element={<CheckoutPending />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/juego" element={<Juego />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
          
          {/* Ruta del Dashboard Admin - SOLO para rol_usuario === 1 */}
          <Route
            path="/dashboard/admin"
            element={
              <AdminRoute>
                <DashboardAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/admin/ia"
            element={
              <AdminRoute>
                <DashboardIA />
              </AdminRoute>
            }
          />
          
          {/* Ruta del Cocinero - SOLO para rol_usuario === 3 */}
          <Route
            path="/cocinero"
            element={
              <ChefRoute>
                <Cocinero />
              </ChefRoute>
            }
          />

          {/* Rutas del Dashboard - SOLO para clientes (rol_usuario !== 3) */}
          <Route
            path="/dashboard"
            element={
              <ClientRoute>
                <Dashboard />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/pagos"
            element={
              <ClientRoute>
                <Pagos />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/pedidos"
            element={
              <ClientRoute>
                <Pedidos />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/perfil"
            element={
              <ClientRoute>
                <Perfil />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/puntos"
            element={
              <ClientRoute>
                <Puntos />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/perfil/contrasena"
            element={
              <ClientRoute>
                <Contrasena />
              </ClientRoute>
            }
          />
          <Route
            path="/dashboard/tickets"
            element={
              <ClientRoute>
                <Tickets />
              </ClientRoute>
            }
          />


          {/* Ruta 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl">
                404 - Página no encontrada
              </h1>
            }
          />
        </Routes>
      </main>
    </>
  );
}
