import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/user-context";
import { Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/ToastProvider";

interface TicketType {
  id_ticket: number;
  nombre_ticket: string;
  codigo_ticket: string;
  descuento: number;
  usado: boolean;
}

export default function TicketsPage() {
  const { user, isAuthenticated, loading: userLoading } = useUser();
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useNavigate();
  const { addToast } = useToast();

  useEffect(() => {
    if (!isAuthenticated && !userLoading) {
      router("/login");
    }
  }, [isAuthenticated, userLoading, router]);

  useEffect(() => {
    if (!user) return;
    const fetchTickets = async () => {
      try {
        const res = await axios.get<TicketType[]>(
          `http://localhost:3000/api/tickets/usuario/${user.id_usuario}`,
          {
            withCredentials: true,
            headers: { "Cache-Control": "no-cache" },
          }
        );
        setTickets(res.data);
      } catch (err) {
        console.error("Error al obtener tickets:", err);
        setError("No se pudieron cargar los tickets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-muted-foreground">Cargando tus tickets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-2 flex items-center gap-3">
              <Ticket className="h-8 w-8" /> Mis Tickets
            </h1>
            <p className="text-white/90">
              Aquí puedes ver todos tus tickets disponibles y su estado.
            </p>
          </div>
        </div>

        {/* Tickets */}
        <div className="container mx-auto px-4 py-10">
          {tickets.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                Aún no tienes tickets registrados.
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tickets.map((ticket) => (
                <Card
                  key={ticket.id_ticket}
                  className="p-6 border border-border hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">
                      {ticket.nombre_ticket}
                    </h2>
                    <Badge
                      variant={ticket.usado ? "secondary" : "default"}
                      className={`${
                        ticket.usado
                          ? "bg-gray-300 text-gray-700"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {ticket.usado ? "Usado" : "Disponible"}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Código:
                      </span>{" "}
                      {ticket.codigo_ticket}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Descuento:
                      </span>{" "}
                      {ticket.descuento}%
                    </p>
                  </div>

                  {!ticket.usado && (
                    <Button
                      variant="outline"
                      className="w-full mt-4 text-sm"
                      onClick={async () => {
                        await navigator.clipboard.writeText(
                          ticket.codigo_ticket
                        );
                        addToast(
                          "Código copiado ✅",
                          "El código del ticket se copió al portapapeles.",
                          "success"
                        );
                      }}
                    >
                      Copiar código
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
