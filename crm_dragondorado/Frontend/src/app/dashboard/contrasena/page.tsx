import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Save, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "@/lib/api";

export default function ChangePass() {
  const router = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("La nueva contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await changePassword(formData.currentPassword, formData.newPassword);
      setSuccess("✅ Contraseña cambiada exitosamente.");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setTimeout(() => router("/dashboard/perfil"), 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido al cambiar la contraseña.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:text-white/80 mb-4"
            >
              <Link to="/dashboard/perfil">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Perfil
              </Link>
            </Button>
            <h1 className="text-4xl font-serif font-bold mb-2">
              Cambiar Contraseña
            </h1>
            <p className="text-white/90">
              Actualiza tu contraseña para mantener tu cuenta segura
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Key className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Actualizar Contraseña</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="currentPassword">Contraseña Actual</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentPassword: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, newPassword: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">
                    Confirmar Nueva Contraseña
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="mt-1"
                  />
                </div>

                {/* Mensajes de error o éxito */}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">{success}</p>}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Nueva Contraseña
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
