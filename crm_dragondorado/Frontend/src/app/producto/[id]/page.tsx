import { useState, useEffect } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductos } from "@/lib/api";
import { useCart } from "@/lib/cart-context";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductoPage() {
  const params = useParams();
  const router = useNavigate();
  const { addItem } = useCart();

  const [productos, setProductos] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Cargando producto...</p>
      </div>
    );
  }

  // 🧠 Buscar producto por id
  const product = productos.find((p) => p.id_producto === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
            <Button asChild>
              <Link to="/catalogo">Volver al Catálogo</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Productos relacionados (misma categoría)
  const relatedProducts = productos
    .filter(
      (p) =>
        p.categoria?.nombre_categoria === product.categoria?.nombre_categoria &&
        p.id_producto !== product.id_producto
    )
    .slice(0, 4);

  // Precio total
  const finalPrice = product.precio;
  const totalPrice = finalPrice * quantity;

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id_producto,
        name: product.nombre_producto,
        price: Number(finalPrice),
        image: `/products/${product.nombre_producto
          .toLowerCase()
          .replace(/\s+/g, "_")}.jpg`,
        category: product.categoria?.nombre_categoria,
      },
      quantity
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button variant="ghost" onClick={() => router(-1)} className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted sticky top-24">
                <img
                  src={`/products/${product.nombre_producto
                    .toLowerCase()
                    .replace(/\s+/g, "_")}.jpg`}
                  alt={product.nombre_producto}
                  onError={(e) => {
                    e.currentTarget.src =
                      "/placeholder.svg?height=300&width=300&query=product";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.categoria?.nombre_categoria || "Sin categoría"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                {product.nombre_producto}
              </h1>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">
                  S/ {Number(product.precio).toFixed(2)}
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.descripcion || "Sin descripción disponible."}
              </p>

              <Separator className="my-6" />

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12"
                    >
                      <Minus className="h-5 w-5" />
                    </Button>
                    <span className="px-6 font-semibold text-lg min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (quantity < 10) {
                          setQuantity(quantity + 1);
                        }
                      }}
                      className="h-12 w-12"
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold text-primary">
                      S/ {totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 text-lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Agregar al Carrito
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-14 w-14 bg-transparent"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-14 w-14 bg-transparent"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 text-foreground">
                Productos Relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id_producto}
                    to={`/catalogo/producto/${relatedProduct.id_producto}`}
                  >
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border h-full">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={`/products/${relatedProduct.nombre_producto
                            .toLowerCase()
                            .replace(/\s+/g, "_")}.jpg`}
                          alt={relatedProduct.nombre_producto}
                          onError={(e) => {
                            e.currentTarget.src =
                              "/placeholder.svg?height=300&width=300&query=product";
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">
                          {relatedProduct.categoria?.nombre_categoria ||
                            "Sin categoría"}
                        </p>
                        <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {relatedProduct.nombre_producto}
                        </h3>
                        <p className="text-lg font-bold text-primary">
                          S/ {Number(relatedProduct.precio).toFixed(2)}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
