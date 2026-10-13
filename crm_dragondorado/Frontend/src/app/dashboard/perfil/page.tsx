import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/lib/user-context";
import { ArrowLeft, User, Save, Key } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { updateUsuario } from "@/lib/api";

export default function PerfilPage() {
  const router = useNavigate();
  const { user, setUser, isAuthenticated } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Si no está autenticado, redirigir al login
  useEffect(() => {
    if (!isAuthenticated) {
      router("/login");
    } else if (user) {
      setFormData({
        name: user.nombre_usuario,
        email: user.correo_usuario,
        phone: user.telefono_usuario || "",
        address: user.direccion_usuario || "",
      });
    }
  }, [isAuthenticated, user, router]);

  if (!user) return null;

  // 🔹 Manejar el envío del formulario (actualizar datos)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    try {
      const updatedUserData = {
        nombre_usuario: formData.name,
        correo_usuario: formData.email,
        telefono_usuario: formData.phone,
        direccion_usuario: formData.address,
      };

      await updateUsuario(user.id_usuario, updatedUserData);

      const updatedUser = { ...user, ...updatedUserData };
      setUser(updatedUser);
      localStorage.setItem("usuario", JSON.stringify(updatedUser));
      setSuccess("Perfil actualizado exitosamente.");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al acualizar el perfil.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:text-white/80 mb-4"
            >
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Dashboard
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold mb-2">Mi Perfil</h1>
            <p className="text-white/90">Actualiza tu información personal</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user.nombre_usuario}</h2>
                  <p className="text-muted-foreground">{user.correo_usuario}</p>
                </div>
              </div>

              {/* Mensajes */}
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              {success && (
                <p className="text-green-600 text-sm mb-2">{success}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+51 999 999 999"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Calle, número, distrito"
                    className="mt-1"
                  />
                </div>

                {/* Botones */}
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold w-full"
                >
                  <Link to="/dashboard/perfil/contrasena">
                    <Key className="h-4 w-4 mr-2" />
                    Cambiar Contraseña
                  </Link>
                </Button>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
