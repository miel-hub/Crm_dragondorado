import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useCart } from "@/lib/cart-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, Plus, Minus, ShoppingCart, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";
import { registrarAcceso } from "@/lib/metrics";
import { getProductos } from "@/lib/api";
import { CartSheet } from "@/components/cart-sheet";
import { Badge } from "@/components/ui/badge";

const CatalogoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("name");
  const { addItem, itemCount, total } = useCart();
  const { addToast } = useToast();
  const { tipoAcceso } = useParams<{ tipoAcceso?: string }>();
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorCarga, setErrorCarga] = useState(false);
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const CATEGORIAS_CHIFA_DEFAULT = [
    {
      name: "Arroces Chaufa",
      icon: "🍚",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Arroz%20chaufa%20de%20pollo%20y%20mariscos%20chifa%20peruano%2C%20arroz%20dorado%20frito%20en%20wok%2C%20huevo%2C%20ceboll%C3%ADn%2C%20salsa%20de%20soya%2C%20servido%20en%20plato%20blanco%20r%C3%BAstico%2C%20iluminaci%C3%B3n%20c%C3%A1lida%20de%20restaurante%2C%20fotograf%C3%ADa%20gastron%C3%B3mica%20profesional%204K&image_size=square",
    },
    {
      name: "Tallarines Saltados",
      icon: "🥢",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Tallar%C3%ADn%20saltado%20chifa%20peruano%20con%20lomo%20fino%20de%20res%2C%20verduras%20crujientes%2C%20br%C3%B3coli%2C%20pimiento%2C%20cebolla%2C%20salsa%20de%20ostr%C3%B3n%2C%20fuego%20de%20wok%2C%20humo%2C%20plato%20cer%C3%A1mico%2C%20fotograf%C3%ADa%20gastron%C3%B3mica%20profesional&image_size=square",
    },
    {
      name: "Wantanes y Fritos",
      icon: "🥟",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wantanes%20fritos%20crujientes%20chifa%20peruano%2C%20rollitos%20primavera%2C%20gyozas%20doradas%2C%20salsa%20agridulce%20y%20salsa%20de%20soya%20en%20salsera%2C%20palillos%20de%20madera%2C%20mesa%20de%20restaurante%20asi%C3%A1tico%2C%20foto%20cerrada%20apetitosa&image_size=square",
    },
    {
      name: "Sopas y Caldos",
      icon: "🍜",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sopa%20wonton%20chifa%20peruana%20con%20wantanes%20de%20cerdo%2C%20caldo%20claro%2C%20ceboll%C3%ADn%2C%20fideos%20de%20huevo%2C%20servida%20en%20taz%C3%B3n%20cer%C3%A1mico%20grande%2C%20vapor%20ascendente%2C%20fotograf%C3%ADa%20gastron%C3%B3mica%20c%C3%A1lida&image_size=square",
    },
    {
      name: "Especiales del Dragón",
      icon: "🐉",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Plato%20especial%20chifa%20pollo%20Kung%20Pao%20con%20cacahuates%2C%20chiles%20secos%2C%20salsa%20picante%20dorada%2C%20decorado%20con%20perejil%2C%20presentaci%C3%B3n%20gourmet%2C%20fondo%20oscuro%20restaurante%20elegante%2C%20iluminaci%C3%B3n%20dram%C3%A1tica&image_size=square",
    },
    {
      name: "Bebidas y Postres",
      icon: "🧋",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Chicha%20morada%20peruana%20fr%C3%ADa%20con%20rodaja%20de%20lim%C3%B3n%20y%20canela%20en%20vaso%20alto%2C%20acompa%C3%B1ado%20de%20postre%20de%20tres%20leches%2C%20cuchara%20de%20postre%2C%20encimera%20de%20restaurante%20chifa%2C%20foto%20apetitosa&image_size=square",
    },
  ];

  const categoriasUnicas = Array.from(
    new Set(productos.map((p) => p.categoria?.nombre_categoria))
  ).filter(Boolean);

  const categoriasDesdeDB = categoriasUnicas.map((name) => ({
    name,
    count: productos.filter((p) => p.categoria?.nombre_categoria === name).length,
  }));

  const categories =
    categoriasDesdeDB.length > 0
      ? categoriasDesdeDB
      : CATEGORIAS_CHIFA_DEFAULT.map((c) => ({ name: c.name, count: 0 }));

  useEffect(() => {
    (async () => {
      try {
        const data = await getProductos();
        setProductos(data);
        setErrorCarga(false);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setErrorCarga(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredproductos = selectedCategory
    ? productos.filter(
        (p) => p.categoria?.nombre_categoria === selectedCategory
      )
    : productos;

  const sortedproductos = [...filteredproductos]
    .filter((p) => p && p.nombre_producto) // seguridad
    .sort((a, b) => {
      if (sortBy === "price-low")
        return parseFloat(a.precio) - parseFloat(b.precio);
      if (sortBy === "price-high")
        return parseFloat(b.precio) - parseFloat(a.precio);
      if (sortBy === "name")
        return a.nombre_producto.localeCompare(b.nombre_producto);
      return 0;
    });

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      setSelectedCategory(storedCategory);
      localStorage.removeItem("selectedCategory"); // Limpia después de usarla
    }
  }, [productos]);

  useEffect(() => {
    // Verificar si ya se registró un acceso durante esta sesión
    const accesoRegistrado = sessionStorage.getItem("catalogoVisitado");

    if (!accesoRegistrado) {
      (async () => {
        const tipoAccesoId = tipoAcceso === "qr" ? 2 : 1;
        await registrarAcceso(tipoAccesoId);

        // Guardamos en sessionStorage que ya se registró este acceso
        sessionStorage.setItem("catalogoVisitado", "true");
      })();
    }
  }, []); // solo se ejecuta una vez al cargar

  const handleAddToCart = (product: (typeof productos)[0]) => {
    const quantity = quantities[product.id_producto] || 1;
    
    // Agregar la cantidad especificada al carrito
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id_producto,
        name: product.nombre_producto,
        price: Number(product.precio),
        image: `/products/${product.nombre_producto
          .toLowerCase()
          .replace(/\s+/g, "_")}.jpg`,
        category: product.categoria?.nombre_categoria,
      });
    }

    addToast(
      "✅ Producto añadido",
      `${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${product.nombre_producto} ${quantity === 1 ? 'añadida' : 'añadidas'} al carrito`,
      "success"
    );
    
    // Resetear cantidad después de agregar
    setQuantities(prev => ({ ...prev, [product.id_producto]: 1 }));
  };

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => {
      const current = prev[productId] || 1;
      const newValue = Math.max(1, Math.min(99, current + change));
      return { ...prev, [productId]: newValue };
    });
  };

  const getQuantity = (productId: number) => quantities[productId] || 1;

  if (loading) {
    return (
      <div className="min-h-screen">
        {/* Hero Siempre Visible */}
        <div className="bg-gradient-to-r from-primary via-[color:var(--brand-red-fire)] to-primary/80 text-white py-14 border-b-4 border-[color:var(--brand-gold)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🐉</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold">Nuestra Carta</h1>
              </div>
            </div>
            <p className="text-lg text-white/90 max-w-2xl">
              La esencia del Dragón: sazón de wok, recetas familiares y el mejor de China
              fusionado con el sabor único de Lima.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-96 gap-4">
          <div className="animate-pulse flex flex-col items-center gap-3">
            <span className="text-5xl">🔥</span>
            <p className="text-lg font-medium text-primary animate-pulse">
              El Dragón está preparando la carta...
            </p>
            <p className="text-sm text-muted-foreground">
              Cargando las especialidades del wok
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 🔥 HERO DE LA CARTA 🔥 */}
      <div className="bg-gradient-to-r from-primary via-[color:var(--brand-red-fire)] to-primary/80 text-white py-14 border-b-4 border-[color:var(--brand-gold)] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 text-[color:var(--brand-gold)] opacity-10 text-[22rem] leading-none select-none pointer-events-none font-black">
          🐉
        </div>
        <div className="absolute -left-10 bottom-0 text-[color:var(--brand-gold)] opacity-10 text-9xl leading-none select-none pointer-events-none">
          🔥
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[color:var(--brand-gold)]/20 border-2 border-[color:var(--brand-gold)]">
              <span className="text-3xl">🐉</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                Nuestra Carta
              </h1>
              <p className="text-[color:var(--brand-gold)] font-bold text-lg tracking-widest uppercase mt-1">
                Dragón Dorado · Sazón del wok
              </p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mb-6 leading-relaxed">
            Explora la fusión sino-peruana heredada por generaciones. Arroces dorados,
            tallarines saltados al fuego, wantanes crujientes, sopas reconfortantes y los
            <span className="font-bold text-[color:var(--brand-gold)]"> Especiales del Dragón</span>
            que nadie se atreve a copiar.
          </p>
          <div className="flex flex-wrap gap-3">
            {CATEGORIAS_CHIFA_DEFAULT.slice(0, 6).map((c) => (
              <span
                key={c.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
              >
                <span>{c.icon}</span>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-background rounded-lg p-4 shadow-sm border border-border">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  Categorías
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-white"
                        : "hover:bg-primary/5 text-foreground"
                    }`}
                  >
                    Todos los productos
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.name
                          ? "bg-primary text-white"
                          : "hover:bg-primary/5 text-foreground"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{cat.name}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">
                          {cat.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="bg-background rounded-lg p-4 shadow-sm border border-border">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  Ordenar por
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name">Nombre (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-transparent"
                >
                  <Filter className="w-4 h-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="space-y-6 mt-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                      Categorías
                    </h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === null
                            ? "bg-primary text-white"
                            : "hover:bg-primary/5 text-foreground"
                        }`}
                      >
                        Todos los productos
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === cat.name
                              ? "bg-primary text-white"
                              : "hover:bg-primary/5 text-foreground"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{cat.name}</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">
                              {cat.count}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                      Ordenar por
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="price-low">Precio: Menor a Mayor</option>
                      <option value="price-high">Precio: Mayor a Menor</option>
                      <option value="name">Nombre (A-Z)</option>
                    </select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* productos Grid */}
          <div className="flex-1">
            {(errorCarga || sortedproductos.length === 0) && !loading ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-2xl">🐉</span>
                    <span className="text-primary font-semibold">
                      {errorCarga
                        ? "El Dragón está actualizando su carta..."
                        : selectedCategory
                        ? "Próximamente en esta categoría"
                        : "Especialidades del Dragón — Próximamente"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {errorCarga
                      ? "Base de datos en mantenimiento"
                      : "Nuestra carta se está preparando"}
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Mientras tanto, explora nuestras 6 categorías estrella. ¡Cada una
                    guarda secretos de la cocina sino-peruana! 🔥
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CATEGORIAS_CHIFA_DEFAULT.map((cat, idx) => (
                    <Card
                      key={cat.name}
                      className="group overflow-hidden border-border hover:border-[color:var(--brand-gold)] hover:shadow-[0_0_30px_rgba(220,20,60,0.15)] transition-all duration-300 flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/placeholder.svg?height=400&width=533&query=comida%20chifa";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-[color:var(--brand-gold)]/0 group-hover:bg-[color:var(--brand-gold)]/10 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="font-serif font-bold text-2xl text-white drop-shadow-lg">
                            {cat.name}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                          {[
                            "Arroces salteados al wok con salmón, pollo, mariscos y la inconfundible sazón dorada del Dragón.",
                            "Tallarines saltados con lomo fino, pollo, verduras crujientes y fuego de wok de la casa.",
                            "Wantanes fritos crujientes, rollitos primavera, gyozas y empanadillas con salsas secretas.",
                            "Sopas calientes reconfortantes: wonton, aguadito de mariscos, caldo de gallina y más.",
                            "Los platos estrella que solo el Dragón sabe preparar. ¡Ningún otro chifa se atreve!",
                            "Bebidas frías/calientes, chicha morada, limonada de hierbabuena y postres tradicionales.",
                          ][idx]}
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedCategory(cat.name)}
                          className="w-full gap-2 border-[color:var(--brand-gold)]/50 text-[color:var(--brand-gold)] hover:bg-[color:var(--brand-gold)] hover:text-primary font-medium"
                        >
                          <span>Ver categoría</span>
                          <span>{cat.icon}</span>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedproductos.map((product) => (
                    <Card
                      key={product.id_producto}
                      className="group overflow-hidden hover:shadow-xl hover:border-[color:var(--brand-gold)] transition-all duration-300 border-border flex flex-col"
                    >
                      <Link
                        to={
                          tipoAcceso
                            ? `/catalogo/${tipoAcceso}/producto/${product.id_producto}`
                            : `/catalogo/producto/${product.id_producto}`
                        }
                      >
                        <div className="relative aspect-square overflow-hidden cursor-pointer bg-muted">
                          <img
                            src={`/products/${product.nombre_producto
                              .toLowerCase()
                              .replace(/\s+/g, "_")}.jpg`}
                            alt={product.nombre_producto}
                            onError={(e) => {
                              e.currentTarget.src =
                                "/placeholder.svg?height=300&width=300&query=product";
                            }}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">
                              Más detalles
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="p-4 flex flex-col flex-1">
                        <p className="text-xs text-muted-foreground mb-1">
                          {product.categoria?.nombre_categoria}
                        </p>
                        <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors cursor-pointer line-clamp-1 text-foreground">
                          {product.nombre_producto}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                          {product.descripcion_corta || product.descripcion || "Sazón al wok preparada por Dragón Dorado."}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-primary">
                            S/ {parseFloat(product.precio).toFixed(2)}
                          </span>
                        </div>
                        
                        {/* Selector de Cantidad */}
                        <div className="flex items-center justify-center gap-3 mb-3 bg-muted/50 rounded-lg p-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(product.id_producto, -1)}
                            disabled={getQuantity(product.id_producto) <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                            {getQuantity(product.id_producto)}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(product.id_producto, 1)}
                            disabled={getQuantity(product.id_producto) >= 99}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          Agregar al Carrito
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {sortedproductos.length === 0 && !errorCarga && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No hay productos en esta categoría
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Botón flotante del carrito - Solo visible cuando hay productos */}
      {itemCount > 0 && (
        <CartSheet>
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <Button
              size="lg"
              className="h-16 px-6 bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 rounded-full flex items-center gap-3 font-semibold text-lg"
            >
              <div className="relative">
                <ShoppingBag className="h-7 w-7" strokeWidth={2.5} />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center text-xs font-bold"
                >
                  {itemCount}
                </Badge>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-90">Ver Carrito</span>
                <span className="text-lg font-bold">S/ {total.toFixed(2)}</span>
              </div>
            </Button>
          </div>
        </CartSheet>
      )}
    </div>
  );
};

export default CatalogoPage;
