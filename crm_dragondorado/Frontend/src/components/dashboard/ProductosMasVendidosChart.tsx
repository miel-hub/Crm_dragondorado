import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductoVendido {
  nombre_producto: string;
  cantidad: number;
}

interface ProductosMasVendidosChartProps {
  data: ProductoVendido[];
  title?: string;
  description?: string;
}

export function ProductosMasVendidosChart({ 
  data, 
  title = "Productos más vendidos",
  description = "Top 10 productos con mayor demanda"
}: ProductosMasVendidosChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="nombre_producto" 
              angle={-45}
              textAnchor="end"
              height={100}
              fontSize={12}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" fill="#3b82f6" name="Cantidad" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
