"use client";

import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useUser } from "@/lib/user-context";
import { useProductos } from "@/lib/product-context";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartSheet } from "@/components/cart-sheet";
import { useState, useMemo } from "react";

export function Header() {
  const { itemCount } = useCart();
  const { user, logout, isAuthenticated } = useUser();
  const { productos } = useProductos();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  // --- Filtro de búsqueda dinámico ---
  const resultados = useMemo(() => {
    if (!query.trim()) return [];
    return productos.filter((p) =>
      p.nombre_producto.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, productos]);

  const handleSelect = (id: number) => {
    setQuery("");
    setFocused(false);
    navigate(`/catalogo/producto/${id}`);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <svg
              viewBox="0 0 420 70"
              className="h-14 w-auto drop-shadow-lg"
              aria-label="Restaurante Dragón Dorado"
              role="img"
            >
              <defs>
                <linearGradient id="fuegoGradiente" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FF6B00" />
                  <stop offset="100%" stopColor="#DC143C" />
                </linearGradient>
                <linearGradient id="rojoGradiente" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B0000" />
                  <stop offset="100%" stopColor="#DC143C" />
                </linearGradient>
              </defs>
              
              {/* Círculo fondo dragón */}
              <circle cx="35" cy="35" r="32" fill="url(#rojoGradiente)" stroke="#FFD700" strokeWidth="3"/>
              
              {/* Dragón estilizado */}
              <g transform="translate(17, 15)" fill="#FFD700">
                {/* Cuerpo del dragón (forma S) */}
                <path d="M5,35 C5,35 12,25 20,28 C28,31 30,20 22,15 C14,10 25,5 35,12 L33,8 L40,10 L36,16 L42,22 L36,24 L40,30 L30,28 C32,38 20,42 10,38 C5,36 5,35 5,35 Z" 
                      stroke="#8B0000" strokeWidth="1.5" strokeLinejoin="round"/>
                {/* Ojo */}
                <circle cx="31" cy="13" r="2.2" fill="#8B0000"/>
                {/* Fuego alrededor del dragón */}
                <path d="M0,30 L3,22 L6,30 L9,20 L12,30 L3,34 Z" fill="#FF6B00" opacity="0.9"/>
                <path d="M38,0 L41,7 L44,0 L46,9 L48,0 Z" fill="#FFD700" opacity="0.95"/>
                <path d="M0,10 L4,6 L7,12 L10,4 L13,12 Z" fill="#FF4500" opacity="0.85"/>
              </g>
              
              {/* Texto línea 1: RESTAURANTE */}
              <text
                x="80"
                y="26"
                fontFamily="'Georgia', 'Times New Roman', serif"
                fontWeight="900"
                fontSize="14"
                fill="url(#fuegoGradiente)"
                letterSpacing="1.5"
                textLength="330"
                lengthAdjust="spacingAndGlyphs"
              >
                RESTAURANTE
              </text>
              
              {/* Texto línea 2: DRAGÓN DORADO */}
              <text
                x="80"
                y="58"
                fontFamily="'Georgia', 'Times New Roman', serif"
                fontWeight="900"
                fontSize="30"
                fill="url(#rojoGradiente)"
                letterSpacing="1.5"
                stroke="#FFD700"
                strokeWidth="1"
                paintOrder="stroke"
              >
                DRAGÓN DORADO
              </text>
              
              {/* Línea dorada decorativa inferior */}
              <line x1="80" y1="66" x2="415" y2="66" stroke="url(#fuegoGradiente)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>

          {/* Search Bar - Oculto para cocineros */}
          {user?.rol_usuario !== 3 && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setTimeout(() => setFocused(false), 200)} // para permitir clics
                  placeholder="Buscar productos..."
                  className="pl-11 bg-background border-border focus:border-primary transition-colors h-11"
                />
              </div>

            {/* Dropdown de resultados */}
            {focused && query && resultados.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-border rounded-md shadow-md z-50 max-h-64 overflow-y-auto">
                {resultados.map((producto) => (
                  <div
                    key={producto.id_producto}
                    onClick={() => handleSelect(producto.id_producto)}
                    className="px-4 py-2 hover:bg-muted cursor-pointer transition-colors"
                  >
                    <p className="font-medium">{producto.nombre_producto}</p>
                    <p className="text-xs text-muted-foreground">
                      S/ {Number(producto.precio).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}

              {focused && query && resultados.length === 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-border rounded-md shadow-md z-50 p-3 text-sm text-muted-foreground">
                  No se encontraron resultados
                </div>
              )}
            </div>
          )}

          {/* --- resto del código igual --- */}
          <div className="flex items-center gap-3">
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 relative h-12 w-12 p-0 rounded-full transition-all"
                >
                  <User className="h-6 w-6" strokeWidth={2.5} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {isAuthenticated && user ? (
                  <>
                    <DropdownMenuLabel>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">{user.nombre_usuario}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.correo_usuario}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* Ocultar opciones de dashboard si es cocinero */}
                    {user.rol_usuario !== 3 && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard">Mi Cuenta</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard/pedidos">Mis Pedidos</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard/puntos">Mis Puntos</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    {/* Mostrar Dashboard Admin solo para administradores */}
                    {user.rol_usuario === 1 && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard/admin" className="font-semibold text-blue-600">
                            Dashboard Admin
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    <DropdownMenuItem
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                      className="text-destructive"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/login">Iniciar Sesión</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/register">Registrarse</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart - Oculto para cocineros */}
            {user?.rol_usuario !== 3 && (
              <CartSheet>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 relative h-12 w-12 p-0 rounded-full transition-all"
                >
                  <ShoppingCart className="h-6 w-6" strokeWidth={2.5} />
                  {itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-0.5 -right-0.5 h-5 w-5 p-0 flex items-center justify-center text-[10px] font-bold"
                    >
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartSheet>
            )}

            {/* Mobile Menu - Oculto para cocineros */}
            {user?.rol_usuario !== 3 && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden h-12 w-12 p-0 rounded-full hover:bg-primary/10 transition-all">
                    <Menu className="h-6 w-6" strokeWidth={2.5} />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      to="/"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/nosotros"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Nosotros
                    </Link>
                    <Link
                      to="/catalogo"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Catálogo
                    </Link>
                    <Link
                      to="/contacto"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Contacto
                    </Link>
                    <Link
                      to="/juego"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Juego
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        {/* Navigation - Oculto para cocineros */}
        {user?.rol_usuario !== 3 && (
          <nav className="hidden md:flex items-center justify-center gap-12 py-4 border-t border-border">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/nosotros"
              className="text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/catalogo"
              className="text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Catálogo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/contacto"
              className="text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/juego"
              className="text-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Juego
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
