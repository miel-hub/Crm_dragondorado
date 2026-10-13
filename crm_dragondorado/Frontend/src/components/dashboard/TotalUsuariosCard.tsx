import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

interface TotalUsuariosCardProps {
  total: number;
  mes: number;
  anio: number;
}

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export function TotalUsuariosCard({ total, mes, anio }: TotalUsuariosCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total de usuarios registrados</CardTitle>
        <CardDescription>{meses[mes - 1]} {anio}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-16 w-16 text-blue-600" />
          </div>
          <div className="text-6xl font-bold text-blue-600">{total}</div>
          <p className="text-muted-foreground mt-2">Nuevos usuarios</p>
        </div>
      </CardContent>
    </Card>
  );
}
