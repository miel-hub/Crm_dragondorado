import { useState, useEffect } from "react";
import { getProductos } from "@/lib/api";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Award,
  Clock,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const slides = [
    {
      title: "Bienvenidos a Dragón Dorado",
      description:
        "Auténtico sabor chifa peruano en el corazón de Lima. Tradición china, sazón peruana 🐉🔥",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Especialidades del Dragón",
      description:
        "Arroces Chaufa, Tallarines Saltados, Wantanes y los clásicos que conquistaron Lima",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Sazón que Enamora",
      description:
        "Recetas familiares con ingredientes frescos y el toque de fuego del Dragón",
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const categories = Array.from(
    new Set(productos.map((p) => p.categoria?.nombre_categoria))
  )
    .filter(Boolean)
    .slice(0, 4)
    .map((nombre_categoria) => {
      // Reemplazo de imágenes por categoría con fotos reales
      let imageUrl = "";
      const nombreLower = nombre_categoria.toLowerCase();
      
      if (nombreLower.includes("chaufa") || nombreLower.includes("arroz")) {
        imageUrl = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80";
      } else if (nombreLower.includes("tallari") || nombreLower.includes("saltado")) {
        imageUrl = "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80";
      } else if (nombreLower.includes("wantan") || nombreLower.includes("frito") || nombreLower.includes("entrada")) {
        imageUrl = "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80";
      } else if (nombreLower.includes("sopa")) {
        imageUrl = "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&w=800&q=80";
      } else {
        imageUrl = "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80"; // Imagen genérica china
      }

      return {
        name: nombre_categoria,
        image: imageUrl,
        count: productos.filter(
          (p) => p.categoria?.nombre_categoria === nombre_categoria
        ).length,
      };
    });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Slider */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center max-w-3xl px-4">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in text-balance">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg"
                    asChild
                  >
                    <Link to="/catalogo">
                      Ver Menú <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-[color:var(--brand-gold)] w-8" : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Flame,
                  title: "Sazón del Dragón",
                  desc: "Fuego y wok en cada plato",
                },
                {
                  icon: Award,
                  title: "Calidad Garantizada",
                  desc: "Ingredientes premium",
                },
                {
                  icon: Clock,
                  title: "Servicio Rápido",
                  desc: "Tu chifa listo sin esperas",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Hecho con Tradición",
                  desc: "Recetas familiares",
                },
              ].map((feature, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-primary mb-4 group-hover:bg-primary group-hover:text-[color:var(--brand-gold)] transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Especialidades Destacadas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubre nuestros platos más queridos, preparados con la sazón y
              la tradición que nos distingue en Lima
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">
              Cargando platos...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productos.slice(0, 4).map((product) => {
                // Asignar imagen real según el nombre del producto
                let prodImageUrl = "";
                const prodLower = product.nombre_producto.toLowerCase();
                if (prodLower.includes("chaufa") || prodLower.includes("arroz")) {
                  prodImageUrl = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80";
                } else if (prodLower.includes("tallari") || prodLower.includes("saltado") || prodLower.includes("fideo")) {
                  prodImageUrl = "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80";
                } else if (prodLower.includes("wantan") || prodLower.includes("frito") || prodLower.includes("roll")) {
                  prodImageUrl = "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80";
                } else {
                  prodImageUrl = "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80";
                }

                return (
                  <Link
                    to={`/catalogo/producto/${product.id_producto}`}
                    key={product.id_producto}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border h-full cursor-pointer bg-white hover:scale-105">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={prodImageUrl}
                          alt={product.nombre_producto}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <p className="text-xs text-secondary font-bold uppercase tracking-widest">
                          {product.categoria?.nombre_categoria || "Sin categoría"}
                        </p>
                        <h3 className="font-serif font-bold text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {product.nombre_producto}
                        </h3>
                        <span className="text-2xl font-bold text-primary">
                          S/ {Number(product.precio).toFixed(2)}
                        </span>
                        <p className="text-xs text-secondary font-semibold text-center pt-2">
                          Ver Detalles →
                        </p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6"
            >
              <Link to="/catalogo">Ver Todo el Menú</Link>
            </Button>
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                  Nuestras Categorías
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explora la variedad de nuestro menú chifa organizado para que
                  elijas tu favorito
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, i) => (
                  <Link
                    to="/catalogo"
                    key={i}
                    onClick={() => {
                      localStorage.setItem("selectedCategory", category.name);
                    }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-border h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">
                            {category.name}
                          </h3>
                          <p className="text-sm text-white/90">
                            {category.count} platos
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[color:var(--brand-gold)]">
                <img
                  src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&w=1000&q=80"
                  alt="Chef principal del Restaurante Dragón Dorado preparando especialidad en el wok"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
                  Programa de Fidelidad 🐉 Dragón Dorado
                </h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  ¡Por cada S/ 150 en consumición, recibe un <span className="font-bold text-[color:var(--brand-gold)]">PLATO ESPECIAL GRATIS</span>!
                  Regístrate hoy y empieza a acumular tus puntos para disfrutar
                  del auténtico sabor chifa del Dragón.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-[color:var(--brand-gold)] text-primary border-none">
                      <Flame className="w-6 h-6" />{" "}
                      Plato Especial Gratis
                    </Badge>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/register">Registrarme Ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}