import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BASE_URL } from "@/lib/api";
import { ArrowLeft, CheckCircle2, Loader2, Sparkles, TrendingUp } from "lucide-react";

type Data = {
  ia: { total: number; resueltas: number; porcentajePrimerContacto: number; porIntencion: Record<string, number> };
  feedback: { total: number; negativos: number; pendientesNegativos72h: number; nps: number | null; respuestasNPS: number };
  email: { enviados: number; abiertos: number; clics: number; tasaApertura: number; objetivoApertura: number };
  seo: { total: number; completos: number; faltantes: number; porcentajeCompletitud: number; productos: Array<{ id_producto: number; nombre_producto: string; descripcion: boolean; tags_seo: boolean }> };
};

async function obtener<T>(ruta: string): Promise<T> {
  const respuesta = await fetch(`${BASE_URL}${ruta}`, { credentials: "include", cache: "no-store" });
  const data = await respuesta.json().catch(() => ({}));
  if (!respuesta.ok) throw new Error(data.message || `No se pudo cargar ${ruta}`);
  return data as T;
}

export default function DashboardIA() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const [generando, setGenerando] = useState<number | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const [ia, feedback, email, seo] = await Promise.all([
        obtener<Data["ia"]>("/ia/metrics"),
        obtener<Data["feedback"]>("/feedback/metrics"),
        obtener<Data["email"]>("/email/metrics"),
        obtener<Data["seo"]>("/ia/seo/audit"),
      ]);
      setData({ ia, feedback, email, seo });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "No se pudo cargar el panel de IA");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => { void cargar(); }, [cargar]);

  const generarSEO = async (id: number) => {
    setGenerando(id);
    try {
      const respuesta = await fetch(`${BASE_URL}/ia/seo/products/${id}/generate`, {
        method: "POST",
        credentials: "include",
      });
      if (!respuesta.ok) {
        setError("No se pudo generar el contenido SEO del plato");
      }
    } catch {
      setError("No se pudo generar el contenido SEO del plato");
    } finally {
      setGenerando(null);
      void cargar();
    }
  };

  if (cargando) {
    return <div className="flex min-h-screen items-center justify-center gap-2"><Loader2 className="h-5 w-5 animate-spin" />Cargando métricas IA...</div>;
  }

  if (error || !data) {
    return <div className="container mx-auto max-w-xl p-8"><Card><CardContent className="space-y-4 p-6"><p className="text-red-600">{error || "No hay datos disponibles"}</p><Button onClick={() => void cargar()}>Reintentar</Button></CardContent></Card></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Link to="/dashboard/admin" className="mb-2 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />Volver al dashboard</Link>
            <h1 className="flex items-center gap-2 text-3xl font-bold"><Sparkles className="h-7 w-7 text-amber-500" />Panel de IA y experiencia</h1>
            <p className="text-muted-foreground">Seguimiento de los objetivos del punto 6: atención, contenido, bienvenida, feedback y NPS.</p>
          </div>
          <Button variant="outline" onClick={() => void cargar()}>Actualizar</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card><CardHeader><CardTitle className="text-sm">Primer contacto IA</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">{data.ia.porcentajePrimerContacto}%</p><p className="text-xs text-muted-foreground">{data.ia.resueltas} de {data.ia.total} conversaciones resueltas</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="text-sm">SEO de carta</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">{data.seo.porcentajeCompletitud}%</p><p className="text-xs text-muted-foreground">{data.seo.faltantes} platos pendientes</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="text-sm">Apertura bienvenida</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">{data.email.tasaApertura}%</p><p className="text-xs text-muted-foreground">Objetivo: {data.email.objetivoApertura}%</p></CardContent></Card>
          <Card><CardHeader><CardTitle className="text-sm">NPS</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold">{data.feedback.nps ?? "—"}</p><p className="text-xs text-muted-foreground">{data.feedback.respuestasNPS} respuestas · {data.feedback.pendientesNegativos72h} negativos fuera de SLA</p></CardContent></Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5" />Intenciones del asistente</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(data.ia.porIntencion).map(([intencion, cantidad]) => <div key={intencion} className="flex items-center justify-between rounded border p-2"><span className="capitalize">{intencion}</span><Badge variant="secondary">{cantidad}</Badge></div>)}
              {!Object.keys(data.ia.porIntencion).length && <p className="text-sm text-muted-foreground">Aún no hay conversaciones registradas.</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Platos que necesitan contenido SEO</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {data.seo.productos.slice(0, 12).map((producto) => <div key={producto.id_producto} className="flex items-center justify-between gap-3 rounded border p-2"><div className="min-w-0"><p className="truncate font-medium">{producto.nombre_producto}</p><p className="text-xs text-muted-foreground">Descripción: {producto.descripcion ? "sí" : "pendiente"} · Tags: {producto.tags_seo ? "sí" : "pendiente"}</p></div><Button size="sm" variant="outline" disabled={generando === producto.id_producto} onClick={() => void generarSEO(producto.id_producto)}>{generando === producto.id_producto ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}Generar</Button></div>)}
              {!data.seo.productos.length && <p className="text-sm text-emerald-700">Todos los platos tienen descripción y tags SEO.</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
