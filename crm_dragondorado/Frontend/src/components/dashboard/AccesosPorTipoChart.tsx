import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AccesoData {
  mes: number;
  tipo_acceso: string;
  cantidad: number;
}

interface AccesosPorTipoChartProps {
  data: AccesoData[];
  anio: number;
}

const mesesNombres = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
];

export function AccesosPorTipoChart({ data, anio }: AccesosPorTipoChartProps) {
  // Transformar datos para el gráfico agrupado por mes
  const transformedData = Array.from({ length: 12 }, (_, i) => {
    const mes = i + 1;
    const accesosDelMes = data.filter(d => d.mes === mes);
    
    const result: any = { 
      mes: mesesNombres[i],
      mesNumero: mes
    };
    
    accesosDelMes.forEach(acceso => {
      result[acceso.tipo_acceso] = Number(acceso.cantidad);
    });
    
    return result;
  });

  // Obtener tipos de acceso únicos para las barras
  const tiposAcceso = Array.from(new Set(data.map(d => d.tipo_acceso)));

  // Colores para cada tipo de acceso
  const colores = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cantidad de acceso y Tipo Acceso por Mes</CardTitle>
        <CardDescription>Distribución de accesos durante {anio}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            {tiposAcceso.map((tipo, index) => (
              <Bar 
                key={tipo} 
                dataKey={tipo} 
                fill={colores[index % colores.length]} 
                name={tipo}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
