import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductosMasVendidosChart } from '@/components/dashboard/ProductosMasVendidosChart';
import { ProductosMenosVendidosChart } from '@/components/dashboard/ProductosMenosVendidosChart';
import { TotalUsuariosCard } from '@/components/dashboard/TotalUsuariosCard';
import { AccesosPorTipoChart } from '@/components/dashboard/AccesosPorTipoChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BASE_URL } from '@/lib/api';
import { AlertCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardData {
  productosMasVendidos: Array<{ nombre_producto: string; cantidad: number }>;
  productosMenosVendidos: Array<{ nombre_producto: string; cantidad: number }>;
  usuariosRegistrados: { total: number; mes: number; anio: number };
  accesosPorTipo: Array<{ mes: number; tipo_acceso: string; cantidad: number }>;
  resumen: {
    totalUsuarios: number;
    totalVentas: number;
    totalAccesos: number;
    ingresosTotales: number;
    mes: number;
    anio: number;
  };
}

const meses = [
  { value: '1', label: 'Enero' },
  { value: '2', label: 'Febrero' },
  { value: '3', label: 'Marzo' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Mayo' },
  { value: '6', label: 'Junio' },
  { value: '7', label: 'Julio' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' }
];

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  
  const currentDate = new Date();
  const [selectedMes, setSelectedMes] = useState((currentDate.getMonth() + 1).toString());
  const [selectedAnio, setSelectedAnio] = useState(currentDate.getFullYear().toString());

  // Generar años desde 2020 hasta el año actual
  const anios = Array.from({ length: currentDate.getFullYear() - 2019 }, (_, i) => ({
    value: (2020 + i).toString(),
    label: (2020 + i).toString()
  }));

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const headers = {
        'Content-Type': 'application/json',
      };

      // Realizar todas las peticiones en paralelo
      const [
        productosMasVendidosRes,
        productosMenosVendidosRes,
        usuariosRegistradosRes,
        accesosPorTipoRes,
        resumenRes
      ] = await Promise.all([
        fetch(`${BASE_URL}/dashboard/productos-mas-vendidos?mes=${selectedMes}&anio=${selectedAnio}`, {
          credentials: 'include',
          headers
        }),
        fetch(`${BASE_URL}/dashboard/productos-menos-vendidos?mes=${selectedMes}&anio=${selectedAnio}`, {
          credentials: 'include',
          headers
        }),
        fetch(`${BASE_URL}/dashboard/usuarios-registrados?mes=${selectedMes}&anio=${selectedAnio}`, {
          credentials: 'include',
          headers
        }),
        fetch(`${BASE_URL}/dashboard/accesos-por-tipo?anio=${selectedAnio}`, {
          credentials: 'include',
          headers
        }),
        fetch(`${BASE_URL}/dashboard/resumen?mes=${selectedMes}&anio=${selectedAnio}`, {
          credentials: 'include',
          headers
        })
      ]);

      // Verificar si alguna petición falló con 401 o 403 (no autorizado)
      if ([productosMasVendidosRes, productosMenosVendidosRes, usuariosRegistradosRes, accesosPorTipoRes, resumenRes]
          .some(res => res.status === 401 || res.status === 403)) {
        setError('No tienes permisos para acceder a este dashboard. Solo administradores pueden verlo.');
        setTimeout(() => navigate('/'), 2000);
        return;
      }

      // Verificar errores generales
      if (!productosMasVendidosRes.ok || !productosMenosVendidosRes.ok || 
          !usuariosRegistradosRes.ok || !accesosPorTipoRes.ok || !resumenRes.ok) {
        throw new Error('Error al cargar los datos del dashboard');
      }

      const data: DashboardData = {
        productosMasVendidos: await productosMasVendidosRes.json(),
        productosMenosVendidos: await productosMenosVendidosRes.json(),
        usuariosRegistrados: await usuariosRegistradosRes.json(),
        accesosPorTipo: await accesosPorTipoRes.json(),
        resumen: await resumenRes.json()
      };

      setDashboardData(data);
    } catch (err) {
      console.error('Error al cargar dashboard:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMes, selectedAnio]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Administrador</h1>
            <p className="text-muted-foreground">Panel de métricas y análisis del sistema</p>
          </div>

          <div className="flex justify-end">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/dashboard/admin/ia"><Sparkles className="h-4 w-4" />Panel de IA, SEO y NPS</Link>
            </Button>
          </div>
          
          {/* Filtros */}
          <div className="flex gap-2">
            <Select value={selectedMes} onValueChange={setSelectedMes}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Seleccionar mes" />
              </SelectTrigger>
              <SelectContent>
                {meses.map(mes => (
                  <SelectItem key={mes.value} value={mes.value}>
                    {mes.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedAnio} onValueChange={setSelectedAnio}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                {anios.map(anio => (
                  <SelectItem key={anio.value} value={anio.value}>
                    {anio.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Gráficos principales */}
        <div className="grid gap-6 md:grid-cols-2">
          <ProductosMasVendidosChart data={dashboardData.productosMasVendidos} />
          <ProductosMenosVendidosChart data={dashboardData.productosMenosVendidos} />
        </div>

        {/* Card de usuarios y gráfico de accesos */}
        <div className="grid gap-6 md:grid-cols-3">
          <TotalUsuariosCard 
            total={dashboardData.usuariosRegistrados.total}
            mes={dashboardData.usuariosRegistrados.mes}
            anio={dashboardData.usuariosRegistrados.anio}
          />
          <div className="md:col-span-2">
            <AccesosPorTipoChart 
              data={dashboardData.accesosPorTipo} 
              anio={parseInt(selectedAnio)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
